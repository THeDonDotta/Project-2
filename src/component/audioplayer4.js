import React, { Component } from "react"
import Piano from './Maybe.mp3'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

class Yiruma extends Component {
    playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[3]
    audioEl.play()
    }
    pauseAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[3]
        audioEl.pause()
        }
    

    render() {
    return (
        <div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={this.playAudio}>Classical</Button>
            <Button onClick={this.pauseAudio}>Pause</Button>
            
        </ButtonGroup>
        <audio className="audio-element">
            <source src={Piano}></source>
        </audio>
        </div>
    )
    }
}
export default Yiruma;