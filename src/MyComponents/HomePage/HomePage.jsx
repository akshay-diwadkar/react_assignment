import { Box } from "@mui/material"
import MySearchField from "../MyTextField/MySearchField"
import { useState, useEffect } from "react"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyButton from "../MyButton/MyButton";

class Character {
    constructor(name, image) {
      this.name = name;
      this.image = image;
    }
  }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [ogList, setOgList] = useState([])
    const [allCharacters, setAllCharacters] = useState([])

    const search = () => {
        setIsLoading(true)
        if(searchTerm != ""){
            console.log("all chars", )
            let newList = ogList.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
            newList.map((character) => console.log(character.name))
            setAllCharacters(newList)
            console.log(searchTerm)
        }
        setIsLoading(false)
    }

    const dataFetch = () => {
        console.log("data fetching solo")
        setIsLoading(true);
        fetch(
            'https://rickandmortyapi.com/api/character'
        ).then((response) => response.json())
        .then((data) => {
            console.log("whats in the data? ", data.results)
            setAllCharacters(data.results)
            setOgList(data.results)
            console.log("ALL CHARS", allCharacters)

            allCharacters.map((character) => console.log(character.name))
            setIsLoading(false)
        })
    };

    useEffect(() => {
        const dataFetch2 = () => {
            console.log("data fetching useff")
            setIsLoading(true);
            fetch(
                'https://rickandmortyapi.com/api/character'
            ).then((response) => response.json())
            .then((data) => {
                console.log("what in the data? ", data.results)
                setAllCharacters(data.results)
                setOgList(data.results)
                console.log("ALL CHARS", allCharacters)
                allCharacters.map((character) => console.log(character.name))
                setIsLoading(false)
            })
        };
        dataFetch2()
      }, []);

    const content = isLoading ? <center><h1>Loading... 😅</h1></center> : <Grid container spacing={2} style={{paddingLeft: '20vh'}}>
        {allCharacters.map((character) => <Grid item key={character.name}>
            <Item><div style={{width: '300px', height:'420px', backgroundRepeat: 'no-repeat', backgroundImage: `url(${character.image})`}}>
                    <div style={{paddingTop: '290px'}}>
                        <p style={{fontSize: '20px', fontWeight: '800'}}>{character.name}</p>
                        <p style={{}}>Species: {character.species}</p>
                        <p style={{fontStyle: 'italic'}}>Status: {character.status}</p>
                    </div>
                </div></Item>
        </Grid>)}
    </Grid>

    return <div style={{background: 'linear-gradient(to right bottom, #edffff,#c6c4f5)'}}>
        <h1 style={{paddingLeft: '50px'}}>Home</h1>
        <Box sx={{width: '100%', height: '200px', paddingLeft: '55vh',}}>
            <MySearchField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onClick={()=>search()} onClear={()=>setSearchTerm("")}></MySearchField>
        </Box>
        <Box sx={{width: '100%', paddingLeft: '30px', paddingRight: '30px', paddingTop: '30px'}}>
            {content}
        </Box>
        <center style={{paddingBottom: '50px', paddingTop: '50px'}}>
            <MyButton name="Load All" variant='contained' onClick={()=>dataFetch()}></MyButton>
        </center>
    </div>
}

export default HomePage