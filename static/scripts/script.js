const buttonLQ = document.querySelector('#-LQ-')
const buttonHQ = document.querySelector('#-HQ-')
const buttonMP3 = document.querySelector('#-MP3-')
const buttonLoad = document.querySelector("#load")
const input = document.querySelector('#input')
const buttons = document.getElementsByClassName('quality')
const thumb = document.querySelector('#thumbnail')
const video = document.querySelector('#video')
var url = ""
var videoId = ""

buttonLoad.addEventListener('click', async function(e){
    e.preventDefault()
    if (input.value != '') {
        if(input.value.search('youtu') >= 0){
            let match = input.value.match(/v=([\w\W+]{11})/)
            if (match !== null){
                showVideo()
                url = input.value
                videoId = match[1]
                let thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                var embedCode = `<img src="${thumbnail}">`
                thumb.innerHTML = embedCode
            } else{
                window.alert('Insira uma url válida!')
            }
        } else{
            window.alert("Insira uma url do youtube!")
        }
    } else{
        window.alert("Insira uma url")
    }
}, false)

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
    disableButtons()
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
}

function showVideo(){
    video.style.display = 'flex'
}

function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerText = 'Preparando...';
      buttons[i].disabled = true;
    }
  }

function enableButtons() {
    buttons[0].innerText = 'Qualidade baixa'
    buttons[1].innerText = 'Qualidade alta'
    buttons[2].innerText = 'Somente audio'
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
      }
}