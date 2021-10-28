import ParticleBackground from './darkMode'
const AboutMe =() => {


return (
    <div>
        <ParticleBackground />
        <img src="https://i.imgur.com/2qVSzql.png" title="source: imgur.com" className="logo" style={{marginTop:'-500px'}}/>
        <p style={{
            color: 'white',
            paddingLeft: '100px',
            paddingRight: '100px',   
                }}>This app is built for the music lover. If you love exploring new music this is the site for you. Find new songs you've never heard of before and expand your taste. We at Creative Minds have made this playlist so you can express your love of music. We are driven by a culture of collaboration and want to share the culture with the world. </p>
    </div>
)
}
export default AboutMe;