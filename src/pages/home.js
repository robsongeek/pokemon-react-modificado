import React, { useContext, useState } from "react";
import { Header } from "../components/header/header";
import { PokemonList } from "../components/pokemon-list/pokemon-list";
import { ThemeContext } from "../contexts/theme-context";
import styled from "styled-components";
import { SearchBar } from "../components/searchBar/searchBar";
import { searchPokemon } from "../services/pokedex-api";
import { Link } from "react-router-dom";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState();

  const fetchPokemons = async () => {
    try {
    } catch (error) {}
  };

  const onSearchHandler = async (pokemon) => {
    if (pokemon) {
      const result = await searchPokemon(pokemon);
      console.log("pokemon", result);
      setPokemon(result);
    }
  };

  return (
    <Container style={{ color: theme.color, backgroundImage: theme.image }}>
      <Header />
      <SearchBar onSearch={onSearchHandler} />
      {pokemon ? (
        <Section>
          {loading ? (
            <div>Carregou segura a fera...</div>
          ) : (
            <Ul>
              <DivPesquisa>Pokemon pesquisado</DivPesquisa>
              <Li style={{ backgroundColor: theme.background }}>
                <Link to={`/details/${pokemon.id}`}>
                  <h1 style={{ color: theme.color }}>{pokemon.name}</h1>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </Link>
              </Li>
              <a href="/">
                <Button
                // style={{
                //   color: theme.color,
                //   backgroundColor: theme.background,
                // }}
                >
                  <Span>Cancelar pesquisa</Span>
                </Button>
              </a>
            </Ul>
          )}
        </Section>
      ) : null}
      <PokemonList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
`;

const Section = styled.section`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 30px;
`;

const Li = styled.li`
  border: 5px solid red;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 40px 40px -7px;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Button = styled.button`
width: 160px;
  height: 60px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 45px;
   background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;

  &:hover {
    transform: scale(1.05);
  }
`;

const Span = styled.span`
  color: aquamarine;
  font-size: 15px;
`;

const DivPesquisa = styled.div`
border: 2px solid;
padding: 10px;
background-color: rgb(96,9,240);
color:white;
`
