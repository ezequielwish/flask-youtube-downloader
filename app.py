from flask import Flask, render_template, send_from_directory, request
from flask_cors import CORS, cross_origin
import wish_YT_downloader
import os, re, threading, platform

operacional_system = platform.system()
path = r'.\download' if operacional_system == 'nt' else 'download'
app = Flask(__name__)
CORS(app, supports_credentials=True)

def fix_mp3_extension(quality, filename):
    quality = quality.lower()
    if quality == 'mp3':
        extension = re.search(r'\.([a-zA-Z0-9]+)$', filename).group(1)
        new_filename = filename.replace(extension, quality)
        return new_filename
    else:
        return filename

def delete_file(file_path):
    time_to_wait = 60
    threading.Timer(time_to_wait, os.remove, args=(file_path,)).start()

@app.route('/download', methods= ['GET'])
@cross_origin()
def download():
    videoID = request.args.get('v', '')
    quality = request.args.get('q', '')
    filename = wish_YT_downloader.download(f'https://youtu.be/{videoID}', f'-{quality}-')
    new_filename = fix_mp3_extension(quality, filename)
    file_path = os.path.join('download', new_filename)
    try:
        return send_from_directory('download', new_filename, as_attachment=True)
    finally:
        delete_file(file_path)

@app.route('/', methods=['GET'])
def render():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
