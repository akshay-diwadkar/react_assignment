import { Box } from "@mui/material"
import MySearchField from "../MyTextField/MySearchField"
import { useState, useEffect } from "react"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
    const [allCharacters, setAllCharacters] = useState([])
    const [gridItems, setGridItems] = useState([])

    const search = async () => {
        setIsLoading(true)
        console.log(searchTerm)
        const response = await fetch(`https://rickandmortyapi.com/api/character/${searchTerm}`, {method:'get'})
        const data = await response.json();
    }

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch(
               'https://rickandmortyapi.com/api/character'
            )
          ).json();
    
          // set state when the data received
          setAllCharacters(data.results.map((element) => {
            let char = new Character(element.name, element.image)
            return char;
        }))
        allCharacters.map((character) => console.log(character.name))
            setIsLoading(false)
            // setGridItems(
            // allCharacters.map(
            //     (character) => <Grid item>
            //             <Item><div style={{maxWidth: '200px', maxHeight: '600px', backgroundImage: `url(${character.image})`, position: 'absolute'}}></div></Item>
            //         </Grid>
            //     )
            // )
          console.log("from useeffect ", gridItems.length)
         
        };
    
        dataFetch();
      }, []);


    const content = isLoading ? <center><h1>Loading...</h1></center> : <Grid container spacing={2} style={{paddingLeft: '20vh'}}>
        {allCharacters.map((character) => <Grid item>
            <Item><div style={{width: '300px', height:'350px', backgroundRepeat: 'no-repeat', backgroundImage: `url(${character.image})`}}>
                    <div style={{paddingTop: '300px'}}>
                        <h3>{character.name}</h3>
                    </div>
                </div></Item>
        </Grid>)}
    </Grid>

    return <div>
        <Box sx={{width: '100%', height: '200px', paddingLeft: '55vh', paddingTop: '20vh'}}>
            <MySearchField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onClick={()=>search()}></MySearchField>
        </Box>
        <Box sx={{width: '100%', paddingLeft: '30px', paddingRight: '30px', paddingTop: '30px'}}>
            {content}
        </Box>
    </div>
}

export default HomePage