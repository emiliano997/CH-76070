// import banana from "./services/post.service.js"; // ❌ (Opinion personal)
import { postService } from "./services/post.service.js"; // ✅ (Opinion personal)
import express from "express";

const app = express();
const PORT = 5000;

// App Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes | Endpoints
app.get("/api/posts", async (req, res) => {
  const posts = await postService.getAll();

  res.status(200).json(posts);
});

app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;

  const post = await postService.getById({ id });

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json(post);
});

app.post("/api/posts", async (req, res) => {
  const { title, content, description } = req.body;

  try {
    const post = await postService.create({ title, content, description });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  const { id } = req.params;

  const { title, content, description } = req.body;

  try {
    const post = await postService.update({ id, title, content, description });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postService.delete({ id });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// App Listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
