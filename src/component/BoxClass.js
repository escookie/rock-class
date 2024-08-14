import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }
  getResult = () => {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      this.result = this.props.result === "win" ? "lose" : "win";
    } else {
      this.result = this.props.result;
    }
  };
  render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2 data-testid="item-name">
          {this.props.item && this.props.item.name}
        </h2>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img ? this.props.item.img : "https://images.velog.io/images/jiwon22/post/81e18d1a-a0c8-4c6d-9f65-6ea4552c6d62/Rock-Paper-Scissors.png"}
          alt={this.props.item ? this.props.item.name : "No image available"}
        />
        <h2>{this.result}</h2>
      </div>
    );
  }
}