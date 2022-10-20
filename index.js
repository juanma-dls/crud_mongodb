const express = require("express");
const { create } = require("express-handlebars");
require("dotenv").config();
require('./src/databse/db');

const app = express();

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// middleware
app.use(express.static(__dirname +"/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extend: true}));
app.use("/", require('./src/routes/home'));
app.use("/auth", require('./src/routes/auth'));


const PORT =process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})

