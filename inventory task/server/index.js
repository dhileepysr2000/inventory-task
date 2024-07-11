const express = require("express");
const cors = require("cors");
const mycon = require("mysql2");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const productRoute = require("./router/product");
const storeRoute = require("./router/store");
const purchaseRoute = require("./router/purchase");
const salesRoute = require("./router/sales");

const app = express();
const secretKey = "your_secret_key";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const c = mycon.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "webnox",
  password: "Udhaya@1",
});

c.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Database connected successfully");
  }
});


app.use("/api/store", storeRoute);

app.use("/api/product", productRoute);


app.use("/api/purchase", purchaseRoute);


app.use("/api/sales", salesRoute);

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  let sql = "INSERT INTO register (name, email, password) VALUES (?, ?, ?)";

  c.query(sql, [name, email,password], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to register" });
    } else {
      res.status(200).json({ result: "success" });
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  let sql = "SELECT * FROM register WHERE email = ?";
  c.query(sql, [email], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to authenticate" });
    } else {
      if (results.length > 0) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err || !isMatch) {
            res.status(401).json({ error: "Authentication failed" });
          } else {
            // Create JWT token
            const token = jwt.sign(
              { id: user.id, email: user.email },
              secretKey,
              { expiresIn: "1h" } // Token expires in 1 hour
            );
            res.status(200).json({ token });
          }
        });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
