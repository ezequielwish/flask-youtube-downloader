const buttonLQ = document.querySelector('#-LQ-')
const buttonHQ = document.querySelector('#-HQ-')
const buttonMP3 = document.querySelector('#-MP3-')
const input = document.querySelector('#input')
const buttons = document.getElementsByClassName('quality')


buttonLQ.addEventListener('click', function(){
    downloadButton('LQ')
}, false)

buttonHQ.addEventListener('click', function() {
    downloadButton('HQ')
}, false)

buttonMP3.addEventListener('click', function(){
    downloadButton('MP3')
}, false)


function downloadButton(quality) {
    if (input.value != '') {
        if(input.value.search('youtu') >= 0){
            let match = input.value.match(/v=([\w\W+]{11})/)
            if (match !== null){
                disableButtons()
                const videoId = match[1]
                fetch(`http://localhost:5000/download?v=${videoId}&q=${quality}`, {method: "GET", credentials: "include"}).then(response => {
                    return response.blob()
                }).then(blob => {
                    const downloadURL = URL.createObjectURL(blob)
                    const link = document.createElement('a')
                    link.href = downloadURL
                    link.download = ""
                    link.click()
                })
                .then(()=>{
                    enableButtons()
                })
            } else{
                window.alert('Insira uma url válida!')
            }
        } else{
            window.alert("Insira uma url do youtube!")
        }
    } else{
        window.alert("Insira uma url")
    }
}


function disableButtons() {
    buttons[0].innerText = 'Preparando...'
    buttons[0].disabled = true
    buttons[1].innerText = 'Preparando...'
    buttons[1].disabled = true
    buttons[2].innerText = 'Preparando...'
    buttons[2].disabled = true
}

function enableButtons() {
    buttons[0].innerText = 'Qualidade baixa'
    buttons[0].disabled = false
    buttons[1].innerText = 'Qualidade alta'
    buttons[1].disabled = false
    buttons[2].innerText = 'Somente audio'
    buttons[2].disabled = false
}
