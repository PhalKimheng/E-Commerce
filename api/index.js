const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("db.json", "utf8"));
    let output = "[\n";
    data.forEach((product, index) => {
      output += `  {\n`;
      output += `    "pictureUrl": "${product.pictureUrl}"\n`;
      output += `  }`;
      if (index < data.length - 1) {
        output += ",";
      }
      output += "\n";
    });
    output += "]";
    res.send(output);
  } catch (err) {
    res.send({ message: "Error reading db.json file!", error: err.message });
  }
});
app.post("/products", (req, res) => {
  const product = {
    pictureUrl: req.body.pictureUrl
  };
  try {
    let products = [];
    try {
      products = JSON.parse(fs.readFileSync("db.json", "utf8"));
    } catch (err) {}
    products.push(product);
    fs.writeFileSync("db.json", JSON.stringify(products));
    res.send({ message: "Data added successful!", product });
  } catch (err) {
    res.send({ message: "Data added unsuccessful!", error: err.message });
  }
});

app.listen(8081, () => console.log("api is running on http://127.0.0.1:8081/"));
