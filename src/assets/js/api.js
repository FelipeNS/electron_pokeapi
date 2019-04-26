const axios = require('axios') 

module.exports.getPokedex = (callback) => {
    axios.get('https://pokeapi.co/api/v2/pokedex/1/', {})
    .then(response => {
        callback(response.data)
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports.getPokemon = ( entry_number, callback) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${entry_number}/`, {})
    .then(response => {
        callback(response.data)
    })
    .catch(error => {
        console.log(error)
    })
}