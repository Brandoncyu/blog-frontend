function deleteButtonFunction(){
  let id = document.getElementById('blog-id').textContent
    axios.delete(`https://damp-fortress-44851.herokuapp.com/posts/${id}`)
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
