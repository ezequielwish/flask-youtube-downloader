
# Youtube Downloader API

Uma API projetada para ser simples, ela recebe como parâmetro na url os 9 digitos do ID de um video do youtube e uma qualidade (HQ, LQ e MP3) e retorna um blob com o arquivo baixado no servidor e deleta o arquivo apos 2 minutos.

## Requisitos
É recomendado que tenha um servidor ou um computador com capacidade de processamento que suporte todas as requisições de download feitas pelo usuario atravéz do seu APP ou site.
* É necessário que a máquina tenha o Python 3.x+ instalado junto às bibliotecas Flask, MoviePy e PyTube.
* É necessário que a máquina tenha acesso à internet pois o servidor efetuará o download e upload dos vídeos.

## Como usar?

Simples, mande uma requisição GET para a url onde a API está hospedada com os 11 dígitos do ID de um video do youtube e a qualidade como no exemplo a seguir ou use a interface grafica hospedada em localhost:5000.
```
http://localhost:5000/download?v=<id_do_video>&q=<MP3, HQ, LQ>
```

## Exemplos
Dado o link do vídeo: 
```
https://www.youtube.com/watch?v=_XG3h6LywNQ
```
Fariamos:
```
http://localhost:5000/download?v=_XG3h6LywNQ&q=MP3
```

## Interface

Também pode ser usado atravès de sua interface web rodando em localhost:5000/ onde voce pode colar o link do youtube, clicar na qualidade desejada e o download iniciará assim que a conversão estiver pronta.

![interface web](https://github.com/ezequielwish/flask-youtube-downloader/blob/d3cd4e6f2cc5f1d6b67de1f771e99e712445d33f/screenshots/interface-web.png)
