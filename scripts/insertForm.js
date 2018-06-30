submitBlog = require('./submitBlog')

function insertForm(){
  let postArea = document.getElementById('posts')
  let blogForm = document.getElementById('blog-form')
  if (!postArea.contains(blogForm)){
    postArea.innerHTML = `<form id="blog-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" required>
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <textarea class="form-control" id="content" rows="7" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-lg" id="post-post">Post</button>
    </form>`
    let newBlogForm = document.getElementById('blog-form')
    newBlogForm.addEventListener('submit', submitBlog)
  }

}



module.exports = insertForm
