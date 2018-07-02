let selectorRender = require('./selectorRender')

function submitBlog(event){
  event.preventDefault()
  let postArea = document.getElementById('posts')
  let title = document.getElementById('title').value
  let content = document.getElementById('content').value
  console.log(content)
  axios.post(`http://localhost:3000/posts`, {title, content})
    .then(result => {
      postArea.innerHTML = ''
      selectorRender()
    })
    .catch(error => {
      console.log(error)
    })
}

module.exports = submitBlog
