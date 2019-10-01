import React, { Component } from "react";
import ColorService from '../service/color';
import Burger from './burger'

class Background extends Component {
  constructor(props){
    super(props);
    this.state = {color: '#ffffff', open: false};
  }

  componentWillMount() {
    this.setState({color: ColorService.getColor()});
  }

  handleClick(){
    this.setState({
      open: !this.state.open
    });
  }

  render(){
    return (
      <div style = {{ overflow: 'scroll', height: '100vh', width: '100%', backgroundColor: this.state.color }}>
        <Burger isOpen={this.state.open} menuClicked={this.handleClick.bind(this)}></Burger>
        {this.props.children}
      </div>
    );
  }
}

export default Background;
