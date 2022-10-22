import app from "./app"
require("dotenv").config();
require('./db');


const PORT =process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})

