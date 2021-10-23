import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react'
import ShowPlaylist from './component/showPlaylist'
import Post from './component/Post'
import AboutMe from './component/AboutMe'


const API_URL ='https://api.airtable.com/v0/app89uih6eVWpafTK/Table%201?api_key=keyZHnK73JWzkEwP6'

function App() {
 
  const [song, setSong] =useState('')
  
  const [artists, setArtists] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);


  useEffect(() => {

  const getSongs = async () => {
    const resp = await axios.get(API_URL);
    console.log(resp.data);
    setArtists(resp.data.records)
  }
    getSongs();

  },[toggleFetch] )


  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-around',

      }}>
        <Link to="/"> Home</Link> 
        
        <Link to="/about"> About</Link>
        <Link to="/playlist">Check out Playlist</Link>
      </nav>
      <hr/>
      <br/>
      <body style={{paddingTop: '10px', 
            justifyContent: 'center',
            margin: 'auto'
                    
                    }}>
        <Route path='/' exact>
        <Post
        formType='post'
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
        
        />
        </Route>

        <Route path="/playlist">

          {artists.map((artist) => (

            <ShowPlaylist
              key={artist.id}
              artist={artist}
              song={song}
            />

          ))}
        
            </Route>
      </body>
        <br/>
        <Route path="/about">
          <AboutMe />
          </Route>
      
        <footer>
          <h5>Copyright : 2021 The Don</h5>

        </footer>

    </div>
  );
}

export default App;
