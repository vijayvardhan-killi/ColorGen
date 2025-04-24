from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

# Helper function to generate color palette from an image
def generate_color_palette(image_path, k=10):
    # Open the image using Pillow (PIL)
    image = Image.open(image_path)
    
    # Convert the image to RGB (in case it's RGBA or grayscale)
    image_rgb = image.convert("RGB")
    
    # Convert image to a numpy array (height x width x channels)
    image_np = np.array(image_rgb)
    
    # Reshape the image to a 2D array of pixels (height*width, 3)
    pixels = image_np.reshape(-1, 3)
    
    # Apply KMeans clustering
    kmeans = KMeans(n_clusters=k, n_init=10)
    kmeans.fit(pixels)
    
    # Get the dominant color (the centroid of the largest cluster)
    dominant_color = kmeans.cluster_centers_[np.argmax(np.bincount(kmeans.labels_))]
    
    # Convert dominant color from float to int
    dominant_color = dominant_color.astype(int)
    
    # Get the colors from the centroids (palette)
    palette = kmeans.cluster_centers_.astype(int)
    
    return palette, dominant_color

# Helper function to format color as Hex, HSL, etc.
def format_palette(palette, dominant_color):
    def rgb_to_hex(rgb):
        return '#' + ''.join([f'{x:02x}' for x in rgb])
    
    def rgb_to_hsl(rgb):
        r, g, b = [x / 255.0 for x in rgb]
        max_c = max(r, g, b)
        min_c = min(r, g, b)
        delta = max_c - min_c
        l = (max_c + min_c) / 2
        s = 0 if delta == 0 else delta / (1 - abs(2 * l - 1) - 0.0001)
        if delta == 0:
            h = 0
        else:
            if max_c == r:
                h = (g - b) / delta + (6 if g < b else 0)
            elif max_c == g:
                h = (b - r) / delta + 2
            else:
                h = (r - g) / delta + 4
            h /= 6
        return [round(h * 360), round(s * 100), round(l * 100)]
    
    # Convert dominant color to Hex and HSL
    dominant_hex = rgb_to_hex(dominant_color)
    dominant_hsl = rgb_to_hsl(dominant_color)

    # Convert the entire palette to Hex and HSL
    palette_hex = [rgb_to_hex(color) for color in palette]
    palette_hsl = [rgb_to_hsl(color) for color in palette]

    return {
        "dominant": {
            "rgb": dominant_color.tolist(),
            "hex": dominant_hex,
            "hsl": dominant_hsl
        },
        "palette": [
            {"rgb": color.tolist(), "hex": rgb_to_hex(color), "hsl": rgb_to_hsl(color)}
            for color in palette
        ]
    }
