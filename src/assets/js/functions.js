const functions = require('./api.js')

module.exports.showData = (data) => {
    document.getElementById('card_list').innerHTML = ""

    data.pokemon_entries.map((item, indice) => {
        if( indice < 300 ){
            document.getElementById('card_list').innerHTML = document.getElementById('card_list').innerHTML + `
            <div class="col-4 mb-3">
                <div class="card shadow">
                    <div class="bg-dark-img" id="pokemon_image_${indice}"><img class="card-img-top" src="./assets/img/load.gif" /></div>
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.pokemon_species.name}</h5>
                        <hr>
                        <p class="card-text"><span style="font-weight: bold;">Abilities: </span><span id="abilities_${indice}"></span></p>
                        <hr>
                        <p class="card-text"><span style="font-weight: bold;">Types: </span><span id="types_${indice}"></span></p>
                        <hr>
                        <p class="card-text"><span style="font-weight: bold;">Stats: </span><span id="stats_${indice}"></span></p>
                    </div>
                </div>
            </div>`
            api.getPokemon( item.entry_number, (data) => {
                document.getElementById(`pokemon_image_${indice}`).innerHTML = `<img class="image-shadow mx-auto d-block"  style="height: 200px; width: 200px; align-items: center;" src=${data.sprites.front_default} />`
                data.abilities.map((item) => {
                    document.getElementById(`abilities_${indice}`).innerHTML = document.getElementById(`abilities_${indice}`).innerHTML + `${item.ability.name}, `
                })
                data.types.map((item) => {
                    document.getElementById(`types_${indice}`).innerHTML = document.getElementById(`types_${indice}`).innerHTML + `${item.type.name}, `
                })
                data.stats.map((item) => {
                    document.getElementById(`stats_${indice}`).innerHTML = document.getElementById(`stats_${indice}`).innerHTML + `${item.stat.name}(${item.base_stat}), `
                })
            });
        }
    })
}