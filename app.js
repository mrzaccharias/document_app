//entry point
const express = require("express");
const welcome_get = require("./routes/welcome");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/welcome", welcome_get);

app.listen(3000, function() {
	console.log("Listening on port 3000!");
});
