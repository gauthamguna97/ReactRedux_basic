import React from "react";
import { Component } from "react";
import InViewMonitor from 'react-inview-monitor';
import List from "../containers/list.js";
import ActiveVertical from "../containers/active_vertical.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { videoSrc } = this.props;
    return (
        <InViewMonitor
          childPropsInView={{isPlaying: true}}
          toggleChildPropsOnInView={true}
          intoViewMargin='-100px' // large value just to demonstrate that it starts/stops
          >
          <video width="400" controls>
            <source src="home/justdial/Documents/WhatsApp Video 2019-01-07 at 2.04.14 PM.mp4" type="video/mp4" />
          </video>
        </InViewMonitor>
    );
  }
}
