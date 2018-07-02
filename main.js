const insertForm = require('./scripts/insertForm')
const selectorRender = require('./scripts/selectorRender')
const loadBlog = require('./scripts/loadBlog')

//This loads the post selector
selectorRender()



//this loads up the createPost menu.
const createPost = document.getElementById('create-post')
createPost.addEventListener('click', insertForm)
