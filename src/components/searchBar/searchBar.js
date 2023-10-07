import { useState } from "react";
import styled from "styled-components";
// import { searchPokemon } from "../../services/apiPokemon";

export const SearchBar = (props) => {
    // onSearch vem do App.js
    // const { onSearchHandler } = props;
    const [search, setSearch] = useState("")
    const { onSearch } = props;
    // const [pokemon, setPokemon] = useState()
    // let search = "bulbasaur"
    const onChangeHandler = (e) => {
        // console.log('onChangeHandler', e.target.value);
        setSearch(e.target.value)
        if(e.target.value.length === 0){
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
        // console.log(search);
    }

    
    return(
        <DivContainer>
            <DivInput>
                <Input placeholder="Buscar pokemon" onChange={onChangeHandler}/>
                {/* {search}  somente para teste*/}
            </DivInput>
            <div>
                <Button onClick={onButtonClickHandler}>Buscar Pokemon</Button>
            </div>
            
        </DivContainer>
    )
}

const DivContainer = styled.div`
display: flex;
margin: 0 auto;
padding: 0 20px;
align-items: center;
`

const DivInput = styled.div`
background-color: white;
margin-right: 20px
`

const Input = styled.input`
padding: 10px;
box-shadow: 0px 2px 2px rgba(0,0,0,0.25);
border-radius: 3px;
border: none;
`

const Button = styled.button`
background-color: #8e6f9f;
padding: 10px 12px;
border-radius: 10px;
border: none;
color: white;
transition: .5s;

&:hover {
    background-color: #105b72c2;
    transform: scale(1.1);
  }
` 