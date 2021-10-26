import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'

const API_URL ='https://api.airtable.com/v0/app89uih6eVWpafTK/Table%201?api_key=keyZHnK73JWzkEwP6'

const Post = ({ toggleFetch, setToggleFetch })  => {

    const [artist, setArtist] = useState('')
    const [song, setSong] =useState('')
    const [songLink, setSongLink] = useState('')
    

    const handleSubmit = async (ev) => {
        ev.preventDefault();
    
        const newSong = {
            records: [
            {
                fields: {
                artist,
                song,
                songLink
                }
            }
            ]
        }
        await axios.post(API_URL, newSong)
    
    
        setToggleFetch(!toggleFetch);
        }
    

return(

    <div>

    <Card variant="outlined" style={{
        backgroundColor: '#56CFE1',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '10px',
        fontFamily: 'Roboto Mono',
        color: '#6930C3'

        }}>
    <h2 className="addSong">Add a song to the playlist</h2>
        <form onSubmit={handleSubmit}
        >
        <label htmlFor='artist'> Artist: </label>
                    <input type='text' 
                        id='artist' 
                        palceholder='artist'
                        value={artist} 
                        style={{marginBottom: '10px'}}
                        onChange={(ev) => setArtist(ev.target.value)}/>
                <br/>

    
                <label htmlFor='song'> Song: </label>
                    <input type='text' 
                        id='song' 
                        palceholder='song'
                        value={song} 
                        onChange={(ev) => setSong(ev.target.value)}/>
                <br/>
            <Button variant='contained' type='submit'
                style={{marginTop: '20px',
                    marginLeft: '45px'}}>
            Submit
            </Button>

        </form>
    </Card>
    </div>
)



}

export default Post;