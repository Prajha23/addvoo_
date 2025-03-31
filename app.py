from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    user_text = data.get("text", "")
    language = data.get("language", "English")
    
    # Dummy output (in real case, AI model will generate video/image)
    response = {
        "text": user_text,
        "language": language,
        "output": "static/sample_video.mp4"  # Placeholder video
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
