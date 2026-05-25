type PostProps = {
  content: string;
  deletePost: () => void;
};

export default function Post(props: PostProps) {
  const { content, deletePost } = props;

  return (
    <li
      className="bg-black text-white border border-gray-700 rounded-lg p-3 flex items-center justify-between gap-2"
    >
      <span className="text-base">{content}</span>
      <button
        onClick={deletePost}
        className="bg-red-600 hover:bg-red-700 text-white text-sm px-2.5 py-1 rounded-md transition-colors"
      >
        🗑️
      </button>
    </li>
  );
}
