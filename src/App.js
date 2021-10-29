import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react'
import ShowPlaylist from './component/showPlaylist'
import Post from './component/Post'
import AboutMe from './component/AboutMe'
import Button from '@mui/material/Button';
import AudioFile from './component/audioplayer'
import AbSoul from './component/audioplayer2'
import Staple from './component/audioplayer3'
import Yiruma from './component/audioplayer4'
import Sultana from './component/SpotlightSong'


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
    <div 
      style={{background: '#7400B8'}}
    className="full"
    >
      
      <nav style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#48BFE3',
        marginTop: '-30px',
        paddingBottom: '20px',
        paddingTop: '20px',
        width: '100vw'
        
        
        

      }}>
        <Link to="/"> 
        <Button variant="contained">
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
        color: '#80FFDB',
        margin: 'auto' ,

      }}> CREATIVE MINDS </h1>
      <br/>
      <h1 style={{margin: 'auto',
            color: '#80FFDB'
            }}>The playlist for music lovers</h1>
      
      </header>
      
      
      <br/>
      <Route path='/' exact>
        <div>

        <div className="homePics"

        >

        <a href="https://music.amazon.com/albums/B09584T2R2?ref=dmm_acq_mrn_d_ds_sn_z_-c_c_539036640476_g_120309761644"><img src="https://i.imgur.com/PM66k0E.jpg" title="source: imgur.com" className="lana"/></a>
        <a href="https://open.spotify.com/album/00wSTrFxoSzA7eeS1UxHgd"><img src="https://i.imgur.com/C3HkE9i.jpg" title="source: imgur.com" className='kali'/></a>
      </div>
      </div>
      </Route>
      <body style={{paddingTop: '10px',
            paddingBottom: '10px',
            justifyContent: 'center',
            backgroundSize: 'cover', 
            background: '#48BFE3'
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
              background: '#6c757d'
          
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
          <Route path="/">
            <div>
            <h2 style={{
            color: 'white'
            }}>
            Play some music to catch a vibe!</h2>
            </div>
          <div className='playMusic'>
            <AudioFile/>
            <AbSoul/>
            <Staple/>
            <Yiruma/>
          </div>
            </Route>

          <Route path="/" exact>

            
          
          <h1 className='spotlightTitle'>Artist Spotlight : Tash Sultana
          <Sultana />
          </h1>
          <div className="spotlight" style={{flexFlow: 'row'}}>
          <p style={{color: 'white'}} className="texts">Tash Sultana, the gender fluid multi-instrumentalist, singer-songwriter, producer and engineer, has been dubbed one of the hardest working music exports in Australia. From a viral bedroom recording of ‘Jungle’ and street-stopping busking performances in Melbourne, to setting attendance records on non-stop, sold out global tours, Tash’s accolades rush in faster than there is time to count them.

Tash’s second album TERRA FIRMA arrives four years after ARIA-winning #2 debut album FLOW STATE – which spawned the 2x Platinum single ‘Jungle’ and the Platinum-selling single ‘Mystik’.

Written and recorded over a full year, TERRA FIRMA saw Tash in full flight as they recorded, engineered, performed, arranged, and produced the album themselves.

From the expansive ‘Coma’ and evocative ‘Greed’ to the intuitive ‘Beyond The Pine’, Tash adds to their trademark looped and layered jams with a dazzling patchwork of soul, funk, R&B, folk, rock, hip-hop – you name it. The result is Tash’s most ambitious triumph to date.

TERRA FIRMA is recognisably Tash Sultana, but its lyricism delves deeper, its impact more nuanced. While TERRA FIRMA still cements the oft-used description of a “one person band”, the record hosts a first for Tash Sultana with four carefully chosen co-writers and close friends brought in for just a handful of songs: Matt Corby, Dann Hume, Jerome Farah and Josh Cashman.

As a cohesive collection, TERRA FIRMA is Tash Sultana on full display. Each track opens a new door into the mind of Tash, whose musical integrity and confessional poetry soar on the wings of that octave-vaulting voice.</p>

<a href="https://open.spotify.com/artist/6zVFRTB0Y1whWyH7ZNmywf"><img src="https://i.imgur.com/nIJVydA.jpg" title="source: imgur.com" style={{
  height: '300px',
  width: '450px'
}} className="tash"/></a>

</div>
</Route>

<footer>
          <h5 style={{color: 'white'}}>Copyright : 2021 The Don</h5>
          
          <a href="https://github.com/THeDonDotta"><img src="https://i.imgur.com/PdSWEsd.png" title="source: imgur.com" className="github"/></a>


      
        </footer>

    </div>
  );
}

export default App;
