const updateBlog = require('./updateBlog')

function updateButtonFunction(){
  blogId = document.getElementById('blog-id').textContent
  blogTitle = document.getElementById('blog-title').textContent
  blogContent = document.getElementById('blog-content').textContent
  const postArea = document.getElementById('posts')
  postArea.innerHTML = `<form id="update-blog">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="new-title" required>
    </div>
    <div class="form-group">
      <label for="new-content">Content</label>
      <textarea class="form-control" id="new-content" rows="7" required></textarea>
      <div style="display: none" id="new-id"></div
    </div>
    <button type="submit" class="btn btn-primary btn-lg" id="post-update">Update</button>
  </form>`
  document.getElementById('new-title').value = blogTitle
  document.getElementById('new-content').value = blogContent
  document.getElementById('new-id').innerHTML = blogId
  let newBlogForm = document.getElementById('update-blog')
  newBlogForm.addEventListener('submit', updateBlog)
}

module.exports = updateButtonFunction
