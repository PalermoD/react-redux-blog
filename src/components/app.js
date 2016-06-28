import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
         React Blog App
         {this.props.children}
      </div>
    );
  }
}