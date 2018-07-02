const loadBlog = require('./loadBlog')

function selectorRender(){
    const selector = document.getElementById('selector')

    axios.get('https://damp-fortress-44851.herokuapp.com')
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
