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
        <div className='box-in-1'>
          <h1>{this.props.title}</h1>
          <h2 data-testid="item-name"> {this.props.item && this.props.item.name} </h2>
        </div>
        <div className='box-in-2'>
          <img
            className="item-img"
            src={this.props.item && this.props.item.img ? this.props.item.img : "https://www.menupan.com/Event/2013/01_rps/img/rps_all.gif"}
            alt={this.props.item ? this.props.item.name : "No image available"}
          />
        </div>
        <div className="box-in-3"><h2>{this.result}</h2></div>
      </div>
    );
  }
}