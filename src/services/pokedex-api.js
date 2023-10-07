// criando a função que vai usar a API para pesquisar o pokemon pelo nome
export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    // console.log(response);
    return await response.json();
  } catch (error) {
    console.log("Error ", error);
  }
};

// criando a função para paginação
export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    // console.log(response);
    return await response.json();
  } catch (error) {
    console.log("Error ", error);
  }
};

export const getPokemonList = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Error ", error);
  }
};
