import React, { Component } from "react"
import Piano from './Maybe.mp3'


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
        <button onClick={this.playAudio}>
            <span>Classical</span>
        </button>
        <button onClick={this.pauseAudio}>
            <span>pause</span>
        </button>
        <audio className="audio-element">
            <source src={Piano}></source>
        </audio>
        </div>
    )
    }
}
export default Yiruma;