function deleteButtonFunction(){
  let id = document.getElementById('blog-id').textContent
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(result => {let postArea = document.getElementById('posts')
      postArea.innerHTML = ''
      const selectorRender = require('./selectorRender')
      selectorRender()
    })
      .catch(error => {
        console.log(error)
      })
}

module.exports = deleteButtonFunction
