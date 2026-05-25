import Post from "./components/post/post";
import useFeed from "./hooks/use-feed";

export default function App() {
  const { newPostContent, setNewPostContent, addNewPost, posts, deletePost } =
    useFeed();

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
          <Post content={post} deletePost={() => deletePost(index)} />
        ))}
      </ul>
    </div>
  );
}
