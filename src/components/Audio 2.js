import React from 'react';

export default class AudioSimple extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isPlaying: false };
        this.audio = new Audio(this.props.path);
    }
    componentWillUnmount() {
        this.audio.pause()
    }
    render() {
        if(this.state.isPlaying) return;
        this.state.isPlaying = true
        this.audio.play();
        return <></>
    }
}