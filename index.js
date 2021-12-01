const express = require("express");
const app = express();
require("dotenv").config();

app.use("/api", require("./routes/employeeRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Application running at http://localhost:${PORT}`)
});