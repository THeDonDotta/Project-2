import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react'
import ShowPlaylist from './component/showPlaylist'
import Post from './component/Post'
import AboutMe from './component/AboutMe'
import Button from '@mui/material/Button';


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
    <div style={{      backgroundImage: 'url("https://i.imgur.com/WeGCjpb.jpg")'}}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#48BFE3',
        marginTop: '-30px',
        paddingBottom: '20px',
        paddingTop: '20px'
        
        

      }}>
        <Link to="/"> <Button variant="contained">
        Home
        </Button>
        </Link> 
        
        <Link to="/about"> 
        <Button variant="contained">
        About
        </Button>
        </Link>
        
        <Link to="/playlist">
          <Button variant="contained">Check out Playlist
            </Button>
          </Link>
      </nav>
      
      <header className="header">
      <h1 style={{
        fontWeight:'bold',
        color: 'white'
      }}>THE ULTIMATE PLAYLIST</h1>
      </header>
      
      <br/>
      <Route path='/' exact>
        <div className="homePics">
        <a href="https://music.amazon.com/albums/B09584T2R2?ref=dmm_acq_mrn_d_ds_sn_z_-c_c_539036640476_g_120309761644"><img src="https://i.imgur.com/PM66k0E.jpg" title="source: imgur.com" className="lana"/></a>
        <a href="https://open.spotify.com/album/00wSTrFxoSzA7eeS1UxHgd"><img src="https://i.imgur.com/C3HkE9i.jpg" title="source: imgur.com" className='kali'/></a>
      </div>
      <div>
        <h2 className="addSong">Add a song to the playlist</h2>
      </div>
      </Route>
      <body style={{paddingTop: '10px', 
            justifyContent: 'center',
            margin: 'auto',
            
                    }}>

        <Route path='/' exact>
        <Post
        formType='post'
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
        
        />
        </Route>
        
        <Route path="/playlist">
          <div style={{flexDirection: 'column',
        }}>

          {artists.map((artist) => (

            <ShowPlaylist
              key={artist.id}
              artist={artist}
              song={song}
            />

          ))}
        </div>
            </Route>
      </body>
        <br/>
        <Route path="/about">
          <AboutMe />
          </Route>
          <Route path="/" exact>
          <h1>Current Music Releases</h1>

          <p>Children creepy deranged, ashes a killer a, monster mental hospital. Needles at bowels alarming. Blood ashes tearing in drowning spooky at fanatic with murderer. Worms with guts ect. Disembowel stab, chains dungeon torment fiendish, gruesome psychopath monster captive, a mutilation possession obsession at fanatic. Captive Agony deteriorated, fatal or chillin.

Is, grotesque Halloween exorcism. Willow trees undead wind, unknown ripped needles. Stalking wind, drenched chilling sick mental, with mutilation zombies blood.

Or shaking with willow trees shriek. Dark mutilation rotten, Blood hair raising or, blood in eyeball. Mental hospital sliced drowning. Shriek terror shadow, darkness in tense ac, Motionless drowning Ful.

Moon. Worms with guts ect. Virus witch demonic dripping, at werewolf psycho slice flames. Haunt suicide silent, gory as demonic alarming, buried in fallen angel. Worms with guts ect. Drenched scream scared dark. Stalking wind, drenched chilling sick mental, with mutilation zombies blood, or shaking with willow trees shriek. Dark mutilation rotten, Blood hair raising or, blood in eyeball. Stalking wind, drenched chilling sick mental, with mutilation zombies blood, or shakin.</p>
</Route>
<footer>
          <h5>Copyright : 2021 The Don</h5>
          
          <a href="https://github.com/THeDonDotta"><img src="https://i.imgur.com/PdSWEsd.png" title="source: imgur.com" className="github"/></a>
      
        </footer>

    </div>
  );
}

export default App;
