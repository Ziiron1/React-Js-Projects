const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');


/* Ability */
const habilidade1 = document.querySelector('.habilidade');
const habilidade2 = document.querySelector('.habilidade1');

/* Types */
const type1 = document.querySelector('.type1')
const type2 = document.querySelector('.type2')

/* Stats */
const Hp = document.querySelector('.Hp')
const Attack = document.querySelector('.Attack')
const Defense = document.querySelector('.Defense')
const Speed = document.querySelector('.Speed')
const Weight = document.querySelector('.Weight')

/* Buttons */
const BtnPrev = document.querySelector('.btn-prev')
const BtnNext = document.querySelector('.btn-next')

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {

  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }


}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...'
  pokemonNumber.innerHTML = ''


  const data = await fetchPokemon(pokemon)

  if (data) {

    try {
      type1.innerHTML = data['types']['0']['type']['name']
      type2.innerHTML = data['types']['1']['type']['name']

    } catch (error) {
      error
    }
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']


    Hp.innerHTML = 'Hp: ' + data['stats']['0']['base_stat']

    Attack.innerHTML = 'Attack: ' + data['stats']['1']['base_stat']

    Defense.innerHTML = 'Defense: ' + data['stats']['2']['base_stat']

    Speed.innerHTML = 'Speed: ' + data['stats']['5']['base_stat']

    Weight.innerHTML = 'Weight: ' + data['weight']


    input.value = '';
    searchPokemon = data.id
    console.log(data)

    if (data.id > 649) {
      pokemonImage.src = data['sprites']['front_shiny']
    } else { }


    try {

      habilidade1.innerHTML = data['abilities']['0']['ability']['name'] + ', '
      habilidade2.innerHTML = data['abilities']['1']['ability']['name']
    } catch (error) {
      console.log("Não existe dados suficientes")
    }

  } else {
    pokemonImage.style.display = 'none'
    pokemonName.innerHTML = 'Not Found :(';
    pokemonNumber.innerHTML = '';
    type1.innerHTML = ''
    type2.innerHTML = ''
    habilidade1.innerHTML = ''
    habilidade2.innerHTML = ''
    Hp.innerHTML = 'Hp: '
    Speed.innerHTML = 'Speed: '
    Weight.innerHTML = 'Weight: '
    Defense.innerHTML = 'Defense: '
    Attack.innerHTML = 'Attack: ';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  renderPokemon(input.value.toLowerCase());
  input.value = '';
  type1.innerHTML = ''
  type2.innerHTML = ''
  habilidade1.innerHTML = ''
  habilidade2.innerHTML = ''
  Hp.innerHTML = 'Hp: '
  Speed.innerHTML = 'Speed: '
  Weight.innerHTML = 'Weight: '
  Defense.innerHTML = 'Defense: '
  Attack.innerHTML = 'Attack: ';
})

BtnPrev.addEventListener('click', () => {
  type1.innerHTML = ''
  type2.innerHTML = ''
  habilidade1.innerHTML = ''
  habilidade2.innerHTML = ''
  Hp.innerHTML = 'Hp: '
  Speed.innerHTML = 'Speed: '
  Weight.innerHTML = 'Weight: '
  Defense.innerHTML = 'Defense: '
  Attack.innerHTML = 'Attack: ';
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon)
  }

})

BtnNext.addEventListener('click', (e) => {
  type1.innerHTML = ''
  type2.innerHTML = ''
  habilidade1.innerHTML = ''
  habilidade2.innerHTML = ''
  Hp.innerHTML = 'Hp: '
  Speed.innerHTML = 'Speed: '
  Weight.innerHTML = 'Weight: '
  Defense.innerHTML = 'Defense: '
  Attack.innerHTML = 'Attack: ';
  searchPokemon += 1;
  renderPokemon(searchPokemon);

}) 