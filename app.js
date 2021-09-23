console.log("Let's get this party started!");

const baseUrl = 'http://api.giphy.com/v1/gifs/search'
const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

const searchTermEl = document.querySelector('#searchTerm')
const searchButton = document.querySelector('#searchButton')
const removeButton = document.querySelector('#removeButton')
const gifs = document.querySelector('#gifs')

async function getGiphy(payload) {
    let res = await axios.get(baseUrl, {params: payload})
    // console.log(res.data.data[0].images.downsized.url)
    newImg = document.createElement('IMG')
    newImg.setAttribute('src', res.data.data[0].images.downsized.url)
    gifs.append(newImg)
}

searchButton.addEventListener('click', function(e) {
    const searchTerm = searchTermEl.value
    payload = {q: searchTerm, api_key: apiKey}

    getGiphy(payload)

    searchTermEl.value = ""
})

removeButton.addEventListener('click', function(e) {
    gifs.innerHTML = ''
})
