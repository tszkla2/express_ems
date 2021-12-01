const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use("/api", require("./routes/employeeRoutes"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});
