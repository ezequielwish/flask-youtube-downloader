import yt_dlp as youtube_dl

options = {
    '-MP3-': {
        'format': 'bestaudio/best', # baixa o melhor formato de áudio disponível
        'outtmpl': 'download/%(id)s.%(ext)s', # nome do arquivo de saída
        'postprocessors': [{
            'key': 'FFmpegExtractAudio', # extrai o áudio
            'preferredcodec': 'mp3', # formato de saída do áudio
            'preferredquality': '192' # qualidade do áudio
        }]
    },
    
    '-HQ-': {
        'format': 'bestvideo[height<=1080]+bestaudio/best', # baixa o melhor formato até 1080p junto ao melhor audio
        'outtmpl': 'download/%(id)s.%(ext)s' # nome do arquivo de saída
    },
    
    '-LQ-': {
        'format': 'bestvideo[height<=360]+bestaudio/best', # baixa na qualidade 360p
        'outtmpl': 'download/%(id)s.%(ext)s' # nome do arquivo de saída
    }
}


def download(video_url, quality):
    with youtube_dl.YoutubeDL(options[quality]) as ydl:
        video_info = ydl.extract_info(
            video_url,
            download=True
        )
        
    id = video_info["id"]
    print(id)
    file = f'{id}.{video_info["ext"]}'
    
    return file
 