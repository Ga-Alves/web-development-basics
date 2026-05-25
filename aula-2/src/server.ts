import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

var posts = ["Neymar fora da copa?"];

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/posts", (_, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const body = req.body;

  posts.push(body.content);

  res.status(201).send();
});

app.delete("/posts/:id", (req, res) => {
  const body = req.body;
  const params = req.params;

  const id = Number(params.id)

  if(id < 0 || id >= posts.length){
    res.status(400).send("id is out of range")
  }

  posts = posts.filter((_, i) => i != id)

  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
