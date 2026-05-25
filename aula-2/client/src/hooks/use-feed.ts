import { useCallback, useEffect, useState } from "react";

export default function useFeed() {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  const loadPosts = useCallback(async () => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const addNewPost = useCallback(() => {
    createNewPost(newPostContent).then(loadPosts);
  }, [newPostContent, loadPosts]);

  const deletePost = useCallback(
    (index: number) => {
      removePost(index).then(loadPosts);
    },
    [loadPosts],
  );

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return {
    addNewPost,
    deletePost,
    posts,
    newPostContent,
    setNewPostContent,
  };
}

const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const createNewPost = async (content: string) => {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const removePost = async (id: number) => {
  try {
    const response = await fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
  } catch (err) {
    console.log(err);
  }
};
