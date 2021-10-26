import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'

const API_URL ='https://api.airtable.com/v0/app89uih6eVWpafTK/Table%201?api_key=keyZHnK73JWzkEwP6'

const ShowPlaylist = ({artist, song})  => {

    const [artists, setArtists] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);


return(

    <div>
        <Card variant="outlined">
        <p>Artist: {artist.fields.artist}</p>
        
        <p>Song: {artist.fields.song}</p>
        </Card>
        <Rating name="size-medium" defaultValue={4} />
        
        <br/>
    </div>
)



}

export default ShowPlaylist;