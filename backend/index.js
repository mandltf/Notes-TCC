const express = require("express");
const sequelize = require("./configs/database");
const noteRoutes = require("./routes/noteRoute");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

require("./schema/note");
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  sequelize.sync()
    .then(() => {
      console.log("Database connected and synced successfully");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  console.log(`Server is running on port ${PORT}`);
});
