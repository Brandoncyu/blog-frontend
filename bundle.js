(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const insertForm = require('./scripts/insertForm')
const selectorRender = require('./scripts/selectorRender')
const loadBlog = require('./scripts/loadBlog')

//This loads the post selector
selectorRender()



//this loads up the createPost menu.
const createPost = document.getElementById('create-post')
createPost.addEventListener('click', insertForm)

},{"./scripts/insertForm":3,"./scripts/loadBlog":4,"./scripts/selectorRender":5}],2:[function(require,module,exports){
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

},{"./selectorRender":5}],3:[function(require,module,exports){
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

},{"./submitBlog":6}],4:[function(require,module,exports){
const deleteButtonFunction = require('./deleteButtonFunction')
const updateButtonFunction = require('./updateButtonFunction')

function loadBlog(id){
  axios.get(`https://damp-fortress-44851.herokuapp.com/posts/${id}`)
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

},{"./deleteButtonFunction":2,"./updateButtonFunction":8}],5:[function(require,module,exports){
const loadBlog = require('./loadBlog')

function selectorRender(){
    const selector = document.getElementById('selector')

    axios.get('https://damp-fortress-44851.herokuapp.com/posts')
      .then(result => {
        let data = result.data.data

        const links = data.map(element => {
          return `<a href="#" class="list-group-item list-group-item-action" data-id="${element.id}">${element.title}</a>`
        }).join('')

        selector.innerHTML = `<ul class="list-group">${links}</ul>`

        eachLink = document.querySelectorAll('a')

        eachLink.forEach(element => element.addEventListener('click', function(event){
          let setId = event.target.getAttribute('data-id')
          loadBlog(setId)
        }))
      })
      .catch(error => {
        console.log(error)
      })
}

module.exports = selectorRender

},{"./loadBlog":4}],6:[function(require,module,exports){
let selectorRender = require('./selectorRender')

function submitBlog(event){
  event.preventDefault()
  let postArea = document.getElementById('posts')
  let title = document.getElementById('title').value
  let content = document.getElementById('content').value
  console.log(content)
  axios.post(`https://damp-fortress-44851.herokuapp.com/posts`, {title, content})
    .then(result => {
      postArea.innerHTML = ''
      selectorRender()
    })
    .catch(error => {
      console.log(error)
    })
}

module.exports = submitBlog

},{"./selectorRender":5}],7:[function(require,module,exports){
function updateBlog(event){
  event.preventDefault()
  let title = document.getElementById('new-title').value
  let content = document.getElementById('new-content').value
  let id = document.getElementById('new-id').innerHTML
  axios.put(`https://damp-fortress-44851.herokuapp.com/posts/${id}`, {title, content})
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

},{"./loadBlog":4,"./selectorRender":5}],8:[function(require,module,exports){
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

},{"./updateBlog":7}]},{},[1]);
