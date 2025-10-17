const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const postRoutes = require("./routes/post-routes");
const postApiRoutes = require("./routes/api-post-routes");
const contactRoutes = require("./routes/contact-routes");
const createPath = require("./helpers/create-path");

const app = express();

app.set("view engine", "ejs");

const PORT = 3000;

// const db = "mongodb+srv://spidybats72:Bakytbek05@node-course.2nrrv.mongodb.net/node-blog?retryWrites=true&w=majority&appName=node-course"
const db =
  "mongodb+srv://Bakytbek:Bakytbek05@wp.thdfbw1.mongodb.net/?retryWrites=true&w=majority&appName=wp";

mongoose
  .connect(db)
  .then((res) => console.log("Connect to db"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(express.json());

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = "Not found";
  res.status(404).render(createPath("error"), { title });
});
