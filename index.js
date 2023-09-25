import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var taskList = [];
var taskDone =false;


app.get("/", (req, res) => {
    res.render("index.ejs", {
        taskList: taskList,
        taskDone: taskDone
    });
})

app.post("/add", (req,res) => {
    var newTask = req.body["inputAdd"];
    if (newTask != "") {
        taskList.push(newTask);
    }
    res.render("index.ejs", {
        taskList: taskList,
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})