console.log("Let's get this party started!");

const baseUrl = 'http://api.giphy.com/v1/gifs/search'
const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

const searchTermEl = document.querySelector('#searchTerm')
const searchButton = document.querySelector('#searchButton')
const removeButton = document.querySelector('#removeButton')
const gifs = document.querySelector('#gifs')

async function addGif(res) {
    const numGifs = res.data.data.length
    if (numGifs) {
        const randGif = Math.floor(Math.random() * numGifs);
        newImg = document.createElement('IMG')
        newImg.setAttribute('src', res.data.data[randGif].images.downsized.url)
        newImg.classList.add('img-fluid')
        gifs.append(newImg)
    }
}

searchButton.addEventListener('click', async function(e) {
    e.preventDefault()
    const searchTerm = searchTermEl.value
    searchTermEl.value = ""

    payload = {q: searchTerm, api_key: apiKey}
    const res = await axios.get(baseUrl, {params: payload})

    addGif(res)
})

removeButton.addEventListener('click', function(e) {
    gifs.innerHTML = ''
})
