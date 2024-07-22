const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const projetRoutes = require("./routes/projetRoutes");
const commandeRoutes = require("./routes/commandeRoutes");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/project", projetRoutes);
app.use("/commande", commandeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
