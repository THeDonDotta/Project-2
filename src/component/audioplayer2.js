import React, { Component } from "react"
import MacMill from './The-End-Is-Near.mp3'


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
        <button onClick={this.playAudio}>
            <span>Hip Hop</span>
        </button>
        <button onClick={this.pauseAudio}>
            <span>pause</span>
        </button>
        <audio className="audio-element">
            <source src={MacMill}></source>
        </audio>
        </div>
    )
    }
}
export default AbSoul;