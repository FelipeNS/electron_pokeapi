const functions = require('./api.js')

module.exports.showData = (data) => {
    document.getElementById('pokedex_name').textContent = data.descriptions[0].description

    data.pokemon_entries.map((item, indice) => {
        document.getElementById('card_list').innerHTML = document.getElementById('card_list').innerHTML + `
        <div class="card col-2" style="width: 18rem;">
            <div id="pokemon_image_${indice}"></div>
            <div class="card-body">
                <h5 class="card-title text-center">${item.pokemon_species.name}</h5>
                <p class="card-text"><span style="font-weight: bold;">Abilities<br></span><span id="abilities_${indice}"></span></p>
                <p class="card-text"><span style="font-weight: bold;">Types<br></span><span id="types_${indice}"></span></p>
                <p class="card-text"><span style="font-weight: bold;">Stats<br></span><span id="stats_${indice}"></span></p>
            </div>
        </div>`
        api.getPokemon( item.entry_number, (data) => {
            document.getElementById(`pokemon_image_${indice}`).innerHTML = `<img class="card-img-top" src=${data.sprites.front_default} />`
            data.abilities.map((item) => {
                document.getElementById(`abilities_${indice}`).innerHTML = document.getElementById(`abilities_${indice}`).innerHTML + `${item.ability.name}<br> `
            })
            data.types.map((item) => {
                document.getElementById(`types_${indice}`).innerHTML = document.getElementById(`types_${indice}`).innerHTML + `${item.type.name}<br>`
            })
            data.stats.map((item) => {
                document.getElementById(`stats_${indice}`).innerHTML = document.getElementById(`stats_${indice}`).innerHTML + `${item.stat.name}(${item.base_stat})<br>`
            })
        });
    })
}