from flask import Flask , jsonify , request
from flask_cors import CORS
from helpers import generate_color_palette, format_palette

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "🎨 Flask Color API is running!"

@app.route('/get-color-palette', methods=['POST'])
def get_color_palatte():
    # Check if the request contains a file
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400
    # Get the uploaded image
    image_file = request.files['image']

    try:
        # Generate the color palette and dominant color
        palette, dominant = generate_color_palette(image_file, k=8)
        
        # Format the palette data (RGB, Hex, HSL)
        formatted = format_palette(palette, dominant)

        return jsonify(formatted)
    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
