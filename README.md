
# Youtube Downloader API

Uma API projetada para ser simples, ela recebe como parâmetro na url os 9 digitos do ID de um video do youtube e uma qualidade (HQ, LQ e MP3 por enquanto) e retorna um blob com o arquivo baixado no servidor.

## Requisitos
É recomendado que tenha um servidor ou um computador com capacidade de processamento que suporte todas as requisições de download feitas pelo usuario atravéz do seu APP ou site.
* É necessário que a máquina tenha o Python 3.x+ instalado junto às bibliotecas Flask, MoviePy e PyTube.
* É necessário que a máquina tenha acesso à internet e que tenha numa largura de banda alta pois o servidor efetuará o download e upload dos vídeos.

## Como usar?

Simples, mande uma requisição GET para a url onde a API está hospedada com os 11 dígitos do ID de um video do youtube e a qualidade como no exemplo a seguir.
```
http://127.0.0.1:5000/download?v=<id_do_video>&q=<MP3, HQ, LQ>
```

## Exemplos
Dado o link do vídeo: 
```
https://www.youtube.com/watch?v=_XG3h6LywNQ
```
Seria assim:
```
http://127.0.0.1:5000/download?v=_XG3h6LywNQ&q=MP3
```

## Interface

Também pode ser usado atravès de sua unterface web rodando em 127.0.0.1:5000/ onde pode colar o link do youtube e clicar na qualidade desejada e o download iniciará assim que a conversão estiver pronta.

![interface web](https://github.com/ezequielwish/flask-youtube-downloader/blob/6379d895985fc24875077204e8fa55e800380236/screenshots/interface%20web.png)
