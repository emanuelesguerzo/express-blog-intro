const express = require("express");
const data = require("./data.js")
const app = express();
const port = 3001;
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio Blog");
});

app.get("/bacheca", (req, res) => {
    const posts = {
        post: data.posts,
        lunghezza: data.posts.length,
    }
    res.json(posts);
})

app.listen(port, () => {
    console.log(`Server in esecuzione sulla porta ${port}`);
});