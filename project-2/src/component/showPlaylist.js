import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'

const API_URL ='https://api.airtable.com/v0/app89uih6eVWpafTK/Table%201?api_key=keyZHnK73JWzkEwP6'

const ShowPlaylist = ({artist, song})  => {

    const [artists, setArtists] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);


return(

    <div>
        <p>Artist: {artist.fields.artist}</p>
        <p>Song: {artist.fields.song}</p>

    </div>
)



}

export default ShowPlaylist;