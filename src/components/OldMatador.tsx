import React, { Component } from "react";
import { IMatadorProps } from "../interfaces/MatatorTypes";
import applause0 from "../assets/applause3.mp3";
import applause1 from "../assets/applause1.mp3";
import applause2 from "../assets/applause2.mp3";
import applause3 from "../assets/applause3.mp3";

import "./matador.css";

class OldMatador extends Component<IMatadorProps, { prevApplause: number }> {
  constructor(props: IMatadorProps) {
    super(props);
    this.state = {
      prevApplause: props.applause,
    };
  }

  componentDidMount() {
    document.addEventListener("bullRun", this.handleBullRun);
  }

  componentDidUpdate() {
    const { applause } = this.props;
    const { prevApplause } = this.state;

    if (applause === 3 && prevApplause !== 3) {
      this.setState({ prevApplause: applause });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("bullRun", this.handleBullRun);
  }

  handleBullRun = (e: any) => {
    const { matadorPosition, setMatarodPosition } = this.props;
    if (e.detail.position === matadorPosition) {
      const newMatadorPosition = Math.floor(Math.random() * 8);
      setMatarodPosition(newMatadorPosition);
      console.log(
        `OldMatador is moving from ${matadorPosition} to ${newMatadorPosition}`
      );
    }
  };

  render() {
    const { applause } = this.props;

    return (
      <div>
        I am old matador
        {applause === 0 && (
          <audio src={applause0} controls={true} autoPlay={true} />
        )}
        {applause === 1 && (
          <audio src={applause1} controls={true} autoPlay={true} />
        )}
        {applause === 2 && (
          <audio src={applause2} controls={true} autoPlay={true} />
        )}
        {applause === 3 && (
          <audio src={applause3} controls={true} autoPlay={true} />
        )}
      </div>
    );
  }
}

export default OldMatador;
