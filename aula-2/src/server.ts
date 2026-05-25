import express from "express";
import postsRouter from "./modules/posts/routes.ts";

const app = express();

app.use(express.json());

const port = 3000;

app.use("/posts", postsRouter);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
