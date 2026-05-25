import express from "express"

const postsRouter = express.Router()

var posts = ["Neymar fora da copa???"];

postsRouter.use((req, res, next) => {
  console.log(`A request was made to ${req.method} ${req.baseUrl}`)
  next()
})


postsRouter.get("", (_, res) => {
  res.send(posts);
});

postsRouter.post("", (req, res) => {
  const body = req.body;

  posts.push(body.content);

  res.status(201).send();
});

postsRouter.delete("/:id", (req, res) => {
  const params = req.params;

  const id = Number(params.id)

  if(id < 0 || id >= posts.length){
    res.status(400).send("id is out of range")
  }

  posts = posts.filter((_, i) => i != id)

  res.send();
});

export default postsRouter;