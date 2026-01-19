# Pet Personality Matcher 🐶🐱

A fun, interactive web quiz that determines whether you're a dog person or a cat person based on your personality traits. After completing the quiz, you'll receive a personalized result along with a cute image of your matching pet!

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [API Integration](#api-integration)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Features

- **Interactive Quiz**: 8 personality-based questions to assess your preferences
- **Dynamic Results**: Get personalized feedback based on your answers
- **Random Pet Images**: Fetches adorable dog or cat images from public APIs
- **Responsive Design**: Beautiful gradient interface that works on all devices
- **Smooth Animations**: Engaging fade-in effects and transitions
- **Error Handling**: Graceful fallbacks for API failures

## 🎬 Demo

Visit the landing page, take the quiz, and discover whether you're a dog person, cat person, or both!

## 🛠️ Technologies Used

- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with gradients and animations
- **HTTP Client**: Axios
- **APIs**: 
  - [Dog CEO API](https://dog.ceo/dog-api/) for random dog images
  - [The Cat API](https://thecatapi.com/) for random cat images

### Dependencies

```json
{
  "express": "^4.18.2",
  "axios": "^1.6.0",
  "body-parser": "^1.20.2",
  "ejs": "^3.1.9"
}
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/pet-personality-matcher.git
cd pet-personality-matcher
```

2. **Install dependencies**

```bash
npm install
```

3. **Create the directory structure**

```
pet-personality-matcher/
├── public/
│   └── css/
│       └── styles.css
├── views/
│   ├── index.ejs
│   ├── quiz.ejs
│   └── result.ejs
├── index.js
├── package.json
└── README.md
```

4. **Start the server**

```bash
node index.js
```

5. **Open your browser**

Navigate to `http://localhost:3000`

## 🚀 Usage

1. Visit the landing page at `http://localhost:3000`
2. Click "Move on to the quiz" to start
3. Answer all 8 questions by selecting radio buttons
4. Click "Submit Answers" to see your result
5. View your personalized result with a cute pet image!

## 📁 Project Structure

```
pet-personality-matcher/
├── public/
│   └── css/
│       └── styles.css          # All styling and animations
├── views/
│   ├── index.ejs               # Landing page
│   ├── quiz.ejs                # Quiz interface
│   └── result.ejs              # Results page
├── index.js                    # Main server file
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## 🔍 How It Works

### Scoring Algorithm

The quiz uses a simple point-based system:

- Each **"dog"** answer adds **+1** point
- Each **"cat"** answer adds **-1** point
- Final calculation:
  - `score > 0` → You're a dog person! 🐶
  - `score < 0` → You're a cat person! 🐱
  - `score === 0` → You like both! 🐶🐱

### Routes

- `GET /` - Landing page
- `GET /quiz` - Quiz page
- `POST /result` - Processes quiz answers and displays results

### Quiz Questions

The quiz evaluates personality across multiple dimensions:

1. Energy and recharging preferences
2. Ideal weekend activities
3. Affection expression styles
4. Pet interaction preferences
5. Circadian rhythm preferences
6. Organization habits
7. Social attention preferences
8. Food taste preferences

## 🔌 API Integration

### Dog CEO API

```javascript
async function fetchDogImage() {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  return response.data.message;
}
```

### The Cat API

```javascript
async function fetchCatImage() {
  const response = await axios.get("https://api.thecatapi.com/v1/images/search");
  return response.data[0].url;
}
```

Both APIs include error handling to ensure a smooth user experience even if the external services are unavailable.

## 🎨 Customization

### Adding More Questions

Edit `views/quiz.ejs` and add new question blocks:

```html
<div>
    <p>9. Your new question?</p>
    <label>
        <input type="radio" name="q9" value="dog">
        Dog-leaning answer
    </label>
    <label>
        <input type="radio" name="q9" value="cat">
        Cat-leaning answer
    </label>
</div>
```

### Modifying Styles

Edit `public/css/styles.css` to change:
- Gradient colors
- Animation timings
- Layout and spacing
- Responsive breakpoints

### Changing the Port

In `index.js`, modify:

```javascript
const port = 3000; // Change to your preferred port
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dog images provided by [Dog CEO API](https://dog.ceo/dog-api/)
- Cat images provided by [The Cat API](https://thecatapi.com/)
- Inspired by personality quizzes and the love for pets

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/pet-personality-matcher](https://github.com/yourusername/pet-personality-matcher)

---

<div align="center">
Made with ❤️ for pet lovers everywhere!
</div>