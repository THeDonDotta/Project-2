import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'

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

        
        <form onSubmit={handleSubmit}>
        <label htmlFor='artist'> Artist: </label>
                    <input type='text' 
                        id='artist' 
                        palceholder='artist'
                        value={artist} 
                        onChange={(ev) => setArtist(ev.target.value)}/>
                <br/>

    
                <label htmlFor='song'> Song: </label>
                    <input type='text' 
                        id='song' 
                        palceholder='song'
                        value={song} 
                        onChange={(ev) => setSong(ev.target.value)}/>
                <br/>

            <input type='submit'/>

        </form>
    </div>
)



}

export default Post;