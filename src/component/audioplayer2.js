import React, { Component } from "react"
import MacMill from './The-End-Is-Near.mp3'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


class AbSoul extends Component {
    playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[1]
    audioEl.play()
    }
    pauseAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[1]
        audioEl.pause()
        }
    

    render() {
    return (
        <div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={this.playAudio}>Rap</Button>
            <Button onClick={this.pauseAudio}>Pause</Button>
            
        </ButtonGroup>
        <audio className="audio-element">
            <source src={MacMill}></source>
        </audio>
        </div>
    )
    }
}
export default AbSoul;