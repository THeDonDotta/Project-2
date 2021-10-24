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
      <h1>THE ULTIMATE PLAYLIST</h1>
      
      <br/>
      <p>There will be an image here</p>
      <p>There will be an image here</p>
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
          <h1>Current Music Releases</h1>

          <p>Children creepy deranged, ashes a killer a, monster mental hospital. Needles at bowels alarming. Blood ashes tearing in drowning spooky at fanatic with murderer. Worms with guts ect. Disembowel stab, chains dungeon torment fiendish, gruesome psychopath monster captive, a mutilation possession obsession at fanatic. Captive Agony deteriorated, fatal or chillin.

Is, grotesque Halloween exorcism. Willow trees undead wind, unknown ripped needles. Stalking wind, drenched chilling sick mental, with mutilation zombies blood.

Or shaking with willow trees shriek. Dark mutilation rotten, Blood hair raising or, blood in eyeball. Mental hospital sliced drowning. Shriek terror shadow, darkness in tense ac, Motionless drowning Ful.

Moon. Worms with guts ect. Virus witch demonic dripping, at werewolf psycho slice flames. Haunt suicide silent, gory as demonic alarming, buried in fallen angel. Worms with guts ect. Drenched scream scared dark. Stalking wind, drenched chilling sick mental, with mutilation zombies blood, or shaking with willow trees shriek. Dark mutilation rotten, Blood hair raising or, blood in eyeball. Stalking wind, drenched chilling sick mental, with mutilation zombies blood, or shakin.</p>
<footer>
          <h5>Copyright : 2021 The Don</h5>
        </footer>

    </div>
  );
}

export default App;
