const deleteButtonFunction = require('./deleteButtonFunction')
const updateButtonFunction = require('./updateButtonFunction')

function loadBlog(id){
  axios.get(`http://localhost:3000/posts/${id}`)
    .then(result =>{
      let blogHolder = document.getElementById('posts')
      blogHolder.innerHTML = `<div class="card">
        <h3 class="card-title m-4" id="blog-title">${result.data.data.title}</h3>
        <hr>
        <p class = "px-4" id="blog-content">${result.data.data.content}</p>
        <p style="display: none" id="blog-id">${id}</p>
        <hr>
        <div class="card-buttons d-flex justify-content-around">
          <button type="button" class="btn btn-lg btn-link mb-2" id="update">Update</button>
          <button type="button" class="btn btn-lg btn-link" id="delete">Delete</button>
        </div>
      </div>`

      const deleteButton = document.getElementById('delete')

      const updateButton = document.getElementById('update')

      deleteButton.addEventListener('click', deleteButtonFunction)

      updateButton.addEventListener('click', updateButtonFunction)
    })
    .catch(error => {
      console.log(error)
    })


}

module.exports = loadBlog
