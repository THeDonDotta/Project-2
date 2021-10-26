import React, { Component } from "react"
import Chris from './Tennessee-Whiskey.mp3'


class Staple extends Component {
    playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[2]
    audioEl.play()
    }
    pauseAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[2]
        audioEl.pause()
        }
    

    render() {
    return (
        <div>
        <button onClick={this.playAudio}>
            <span>Country</span>
        </button>
        <button onClick={this.pauseAudio}>
            <span>pause</span>
        </button>
        <audio className="audio-element">
            <source src={Chris}></source>
        </audio>
        </div>
    )
    }
}
export default Staple;