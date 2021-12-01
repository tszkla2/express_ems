const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(require("./routes/employeeRoutes"));
app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});
