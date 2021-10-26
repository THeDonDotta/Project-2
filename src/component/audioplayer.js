import React, { Component } from "react"
import Song from './fly-away.mp3'


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
        <h2 style={{
            color: 'white'
            }}>
            Play some music to catch a vibe!</h2>
        <button onClick={this.playAudio}>
            <span>Lofi Vibe</span>
        </button>
        <button onClick={this.pauseAudio}>
            <span>pause</span>
        </button>
        <audio className="audio-element">
            <source src={Song}></source>
        </audio>
        </div>
    )
    }
}
export default AudioFile;