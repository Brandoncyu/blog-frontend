(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const insertForm = require('./scripts/insertForm')

const createPost = document.getElementById('create-post')

createPost.addEventListener('click', insertForm)

},{"./scripts/insertForm":2}],2:[function(require,module,exports){
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

},{"./submitBlog":3}],3:[function(require,module,exports){
function submitBlog(event){
  event.preventDefault()
  let postArea = document.getElementById('posts')
  let title = document.getElementById('title').value
  let content = document.getElementById('content').value
  postArea.innerHTML = ''
  console.log(title, content)
}

module.exports = submitBlog

},{}]},{},[1]);
