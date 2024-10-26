var express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
let tasks = [];

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/tasks", (req, res) => {
    const { task } = req.body;
    if (task) {   
        tasks.push(task);
        return res.status(200).send({ "msg": "Sent data" });
    } else {
        return res.status(400).send({ "msg": "No data sent" });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});
