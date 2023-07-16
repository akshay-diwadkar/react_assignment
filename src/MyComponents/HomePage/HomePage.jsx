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

    const search = async () => {
        setIsLoading(true)
        if(searchTerm != ""){
            console.log("oglist", ogList)
            let newList = ogList.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
            newList.map((character) => console.log(character.name))
            setAllCharacters(newList)
            console.log(searchTerm)
        }
        setIsLoading(false)
    }

    const dataFetch = async () => {
        console.log("data fetching")
        setIsLoading(true);
        const data = await (
            await fetch(
            'https://rickandmortyapi.com/api/character'
            )
        ).json();
        console.log(data)
        setAllCharacters(data.results.map((element) => {
            let char = new Character(element.name, element.image)
            console.log(char.name)
            return char;
        }))
        allCharacters.map((character) => console.log(character.name))
        console.log("All chars", allCharacters)
        setOgList(allCharacters)
        setIsLoading(false)
    };

    useEffect(() => {
        dataFetch();
      }, []);

    const content = isLoading ? <center><h1>Loading... 😅</h1></center> : <Grid container spacing={2} style={{paddingLeft: '20vh'}}>
        {allCharacters.map((character) => <Grid item>
            <Item><div style={{width: '300px', height:'350px', backgroundRepeat: 'no-repeat', backgroundImage: `url(${character.image})`}}>
                    <div style={{paddingTop: '300px'}}>
                        <h3>{character.name}</h3>
                    </div>
                </div></Item>
        </Grid>)}
    </Grid>

    return <div>
        <h1 style={{paddingLeft: '50px'}}>Home</h1>
        <Box sx={{width: '100%', height: '200px', paddingLeft: '55vh',}}>
            <MySearchField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onClick={()=>search()} onClear={()=>setSearchTerm("")}></MySearchField>
        </Box>
        <center>
            <MyButton name="Load All" variant='contained' onClick={()=>dataFetch()}></MyButton>
        </center>
        <Box sx={{width: '100%', paddingLeft: '30px', paddingRight: '30px', paddingTop: '30px'}}>
            {content}
        </Box>
    </div>
}

export default HomePage