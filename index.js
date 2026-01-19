import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { render } from "ejs";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/quiz", (req, res) => {
  res.render("quiz.ejs");
});

app.post("/result", async (req, res) => {
  const quizValues = Object.values(req.body);
  let score = 0;
  let decision = "";
  let imageUrl = "";

  quizValues.forEach((value) => {
    //scale to calculate whether user is leaning more towards dogs or cats
    if (value == "dog") {
      score = score + 1;
    } else if (value == "cat") {
      score = score - 1;
    }
  });

  if (score > 0) {
    decision = "You are a dog person!";
    imageUrl = await fetchDogImage();
  } else if (score < 0) {
    decision = "You are a cat person!";
    imageUrl = await fetchCatImage();
    console.log(imageUrl);
  } else if (score === 0) {
    decision = "You like both!";
  }

  res.render("result.ejs", { result: decision, image:imageUrl });
});

// Hits Dog API to retrieve random dog image
async function fetchDogImage() {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    return response.data.message;
  } catch (error) {
    return "No image found";
  }
}

// Hits Dog API to retrieve random cat image
async function fetchCatImage() {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search");
    return response.data[0].url;
  } catch (error) {
    return "No image found";
  }
}

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
