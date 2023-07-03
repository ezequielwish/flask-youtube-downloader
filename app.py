from flask import Flask, render_template, send_from_directory, request, send_file
from flask_cors import CORS, cross_origin
import wish_YT_downloader
import os, re

path = 'download'
app = Flask(__name__)
CORS(app, supports_credentials=True)

def fix_filename(quality, filename):
    quality = quality.lower()
    if quality == 'mp3':
        extension = re.search(r'\.([a-zA-Z0-9]+)$', filename).group(1)
        new_filename = filename.replace(extension, quality)
        return new_filename
    else:
        return filename


@app.route('/download', methods= ['GET'])
@cross_origin()
def download():
    videoID = request.args.get('v', '')
    quality = request.args.get('q', '')
    filename = wish_YT_downloader.download(f'https://youtu.be/{videoID}', f'-{quality}-')
    new_filename = fix_filename(quality, filename)
    return send_from_directory('download', new_filename, as_attachment=True)

@app.route('/', methods=['GET'])
def render():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
