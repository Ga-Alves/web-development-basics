import { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState(["Neymar na copa !!!"]);
  const [newPostContent, setNewPostContent] = useState("");

  const addNewPost = () => {
    if (!newPostContent.trim()) return;
    setPosts([...posts, newPostContent]);
    setNewPostContent("");
  };

  const deletePost = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-[600px] mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl font-semibold mb-4 text-white">Meus Posts</h1>

      {/* FORM */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="O que está pensando?"
          className="flex-1 bg-black text-white border border-gray-700 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="button"
          value="Publicar"
          onClick={addNewPost}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-md cursor-pointer transition-colors"
        />
      </div>

      {/* FEED */}
      <ul className="space-y-2">
        {posts.map((post, index) => (
          <li
            key={index}
            className="bg-black text-white border border-gray-700 rounded-lg p-3 flex items-center justify-between gap-2"
          >
            <span className="text-base">{post}</span>
            <button
              onClick={() => deletePost(index)}
              className="bg-red-600 hover:bg-red-700 text-white text-sm px-2.5 py-1 rounded-md transition-colors"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
