function updateBlog(event){
  event.preventDefault()
  let title = document.getElementById('new-title').value
  let content = document.getElementById('new-content').value
  let id = document.getElementById('new-id').innerHTML
  axios.put(`https://damp-fortress-44851.herokuapp.com/${id}`, {title, content})
    .then(result => {
      const selectorRender = require('./selectorRender')
      const loadBlog = require('./loadBlog')
      loadBlog(id)
      selectorRender()
    })
    .catch(error => {
      console.log(error)
    })

}

module.exports = updateBlog
