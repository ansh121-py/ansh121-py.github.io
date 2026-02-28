# Ansh Mistry — Portfolio

A static portfolio website. Works out of the box on **GitHub Pages** (no build step needed).

## File Structure

```
portfolio/
├── index.html          ← Home
├── about.html          ← About
├── projects.html       ← Projects
├── contact.html        ← Contact
├── random.html         ← Random (hub)
├── random/
│   └── digit-draw.html ← Digit drawing canvas
├── style.css           ← All styles
├── main.js             ← Shared JS
└── README.md
```

## How to Deploy on GitHub Pages

1. Create a new GitHub repo (e.g. `ansh-mistry.github.io` or `portfolio`)
2. Push all these files to the **root** of the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/` (or `/portfolio`)

## Things to Edit

Every placeholder is marked with a `<!-- EDIT: ... -->` comment in the HTML. Key spots:

| File | What to fill in |
|------|----------------|
| `index.html` | Tagline, project cards |
| `about.html` | Bio, photo, school, skills, timeline |
| `projects.html` | Real project names, descriptions, GitHub/demo links |
| `contact.html` | Email, GitHub, LinkedIn links |
| `random.html` | Add more random sub-pages |

## Digit Recognizer (Python Backend)

The `random/digit-draw.html` page draws a digit and POSTs it to your Python server.

### Expected API format

**Request:** `POST /predict`
```json
{
  "image": "<base64-encoded PNG string>"
}
```
The image is a 28×28 px grayscale PNG (MNIST format).

**Response:**
```json
{
  "digit": 7,
  "confidence": 0.98,
  "probabilities": [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.98, 0.01, 0.01]
}
```

### Minimal Flask server example

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import base64, io
import numpy as np
from PIL import Image
# import your model here

app = Flask(__name__)
CORS(app)  # needed for browser requests

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    img_bytes = base64.b64decode(data['image'])
    img = Image.open(io.BytesIO(img_bytes)).convert('L').resize((28, 28))
    arr = np.array(img) / 255.0
    arr = arr.reshape(1, 28, 28, 1)

    # Replace with your model prediction
    # probs = model.predict(arr)[0]
    probs = [0.1] * 10  # placeholder
    digit = int(np.argmax(probs))
    confidence = float(np.max(probs))

    return jsonify({"digit": digit, "confidence": confidence, "probabilities": probs.tolist()})

@app.route('/health')
def health():
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(port=5000)
```

Install deps: `pip install flask flask-cors pillow numpy`

> **Note:** The Python server runs locally. GitHub Pages only hosts static files. When demoing the digit recognizer, run the Flask server on your machine and open the page in your browser.
