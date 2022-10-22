import express from "express";
import exphbs from "express-handlebars"
import path from "path"
import morgan from "morgan"
import router from "./routes/index.routes";


const app = express();

app.set('views', path.join(__dirname, 'views') )
app.engine('.hbs', exphbs({
  partialsDir: path.join(app.get("views"), 'partials'),
  layoutsDir: path.join(app.get("views"), 'layouts'),
  defaultLayout: 'main',
  extname: ".hbs",
}))
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

// routes
app.use(router);

app.use(express.static(path.join(__dirname, "public")));

export default app;