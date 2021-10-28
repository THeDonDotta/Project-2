import './showPlaylist.css';
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'


const ShowPlaylist = ({artist, song})  => {



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