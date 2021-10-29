import React, { Component } from "react"
import Chris from './Tennessee-Whiskey.mp3'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

class Staple extends Component {
    playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[2]
    audioEl.play()
    }
    pauseAudio() {
        const audioElTwo = document.getElementsByClassName("audio-element")[2]
        audioElTwo.pause()
        }
    render() {
    return (
        <div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={this.playAudio}>Country</Button>
            <Button onClick={this.pauseAudio}>Pause</Button>
            
        </ButtonGroup>
        <audio className="audio-element">
            <source src={Chris}></source>
        </audio>
        </div>
    )
    }
}
export default Staple;