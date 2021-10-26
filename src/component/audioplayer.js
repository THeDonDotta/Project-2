import React, { Component } from "react"
import Song from './fly-away.mp3'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

class AudioFile extends Component {
    playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    }
    pauseAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.pause()
        }
    

    render() {
    return (
        <div> 
            
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={this.playAudio}>Lofi Vibe</Button>
            <Button onClick={this.pauseAudio}>Pause</Button>
            
        </ButtonGroup> 
        <audio className="audio-element">
            <source src={Song}></source>
        </audio>
        </div>
    )
    }
}
export default AudioFile;