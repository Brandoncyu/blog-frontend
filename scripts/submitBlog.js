function submitBlog(event){
  event.preventDefault()
  let postArea = document.getElementById('posts')
  let title = document.getElementById('title').value
  let content = document.getElementById('content').value
  postArea.innerHTML = ''
  console.log(title, content)
}

module.exports = submitBlog
