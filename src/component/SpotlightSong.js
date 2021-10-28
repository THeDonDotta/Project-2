import React, { Component } from "react"
import Tash from './JUNGLE.mp3'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


class Sultana extends Component {
    playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[4]
    audioEl.play()
    }
    pauseAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[4]
        audioEl.pause()
        }
    render() {
    return (
        <div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={this.playAudio}>Tash Sultana: Jungle</Button>
            <Button onClick={this.pauseAudio}>Pause</Button>
            
        </ButtonGroup>
        <audio className="audio-element">
            <source src={Tash}></source>
        </audio>
        </div>
    )
    }
}
export default Sultana;