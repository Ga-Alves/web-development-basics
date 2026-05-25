class Feed {
  posts = [];
  nextId = 0;

  constructor() {
    this.posts.push("Neymar na copa !!!");
  }

  addNewPost() {

    const content = document.getElementById("new-post").value;

    if(!content) return;

    this.posts.push(content);
    this.render();
  }

  render() {
    const feed = document.getElementById("feed");
    feed.innerHTML = "";
    this.posts.forEach((post, id) => {
      feed.appendChild(this.createPost(post, id));
    });
  }

  createPost(content, id) {
    const newPostLi = document.createElement("li");
    newPostLi.setAttribute(
      "class",
      "bg-black text-white border border-gray-700 rounded-lg p-3 flex items-center justify-between gap-2",
    );
    newPostLi.setAttribute("data-id", id);

    const postContentSpan = document.createElement("span");
    postContentSpan.setAttribute("class", "text-base");
    const postContent = document.createTextNode(content);
    postContentSpan.appendChild(postContent);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "class",
      "bg-red-600 hover:bg-red-700 text-white text-sm px-2.5 py-1 rounded-md transition-colors",
    );
    const deleteButtonContent = document.createTextNode("🗑️");
    deleteButton.appendChild(deleteButtonContent);

    newPostLi.appendChild(postContentSpan);
    newPostLi.appendChild(deleteButton);

    deleteButton.onclick = () => this.deletePost(id);

    return newPostLi;
  }

  deletePost(id) {
    this.posts = this.posts.filter((_, i) => i !== id);
    this.render();
  }
}

const feed = new Feed();
feed.render();
