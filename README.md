# 🎨 ColorGen – Instant Color Palette from Images

**ColorGen** is a sleek web tool that lets you upload an image and automatically generates a color palette based on its dominant hues. Perfect for designers, developers, and color nerds!

[🌐 Live Demo](https://colorgen-xmna.onrender.com/) | [⚙️ Backend API](https://colorgen-backend.onrender.com)

---

## ✨ Features

- 📷 **Image Upload** – Upload any image to extract its color palette
- 🎨 **Dominant + Secondary Colors** – Get up to 8 extracted colors
- 📋 **Click to Copy** – Tap on any color to copy its HEX code
- ⚡ **Real-Time Feedback** – Instant toasts for copied colors
- 📱 **Responsive Design** – Looks great on mobile & desktop
- ⏳ **Loading Indicators** – Smooth feedback while processing
- 🛡️ **Error Handling** – Graceful alerts for bad uploads or issues

---

## 🚀 Usage

1. **Upload an image**  
   Click the upload button and select any image file (JPG, PNG, etc.).

2. **Wait for magic to happen ✨**  
   The app will extract the most dominant colors using **machine learning (k-means)**.

3. **Explore the palette**  
   View the beautiful color palette, along with the dominant color.

4. **Copy with one click**  
   Tap any color to instantly copy its hex code to your clipboard.



## 🧰 Tech Stack

### 🔹 Frontend  
Built with [React](https://reactjs.org/) + [Tailwind CSS](https://tailwindcss.com/)  
Deployed on **Render** (Static Site Hosting)

### 🔸 Backend  
Built with [Flask](https://flask.palletsprojects.com/)  
Image Processing using:
- `Pillow` – To handle image input
- `Scikit-learn` – KMeans for dominant color extraction  
Deployed on **Render** (Free Web Service)

---

## 📁 Project Structure

```bash
ColorGen/
├── Frontend/
│   ├── src/
│   │   ├── components/   # React components (InputBox, ColorPalette, ColorItem)
│   │   └── services/     # API service (fetch logic)
│   └── index.html        # Main HTML
├── Backend/
│   ├── app.py            # Flask server with /get-color-palette route
│   ├── helpers.py        # Palette generation logic
└── README.md


```


---

## 🛠️ Run Locally

### 🔹 Backend (Flask)
```bash
cd Backend
pip install -r requirements.txt
python app.py
```

### 🔹 Backend (Flask)
```bash
cd Frontend
npm install
npm run dev
```
