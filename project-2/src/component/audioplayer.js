import React, { Component } from "react"
import Song from './fly-away.mp3'


class AudioFile extends Component {
    playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
    }

    render() {
    return (
        <div>
        <h2 style={{
            color: 'white'
            }}>
            Play some music to catch the vibe!</h2>
        <button onClick={this.playAudio}>
            <span>Play Audio</span>
        </button>
        <audio className="audio-element">
            <source src={Song}></source>
        </audio>
        </div>
    )
    }
}
export default AudioFile;