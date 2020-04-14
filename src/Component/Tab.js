import React, { Component } from "react";
import {Tabs, Tab } from "@material-ui/core";


export class CustomTab extends Component {
  constructor() {
    super();
    this.state = { selected: 0 };
  }

  onChangeHandler = (event, newValue) => this.setState({selected: newValue});

  render() {
    return (
      <Tabs
        value={this.state.selected}
        onChange={this.onChangeHandler}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Istruzione"></Tab>
        <Tab label="Carriera"></Tab>
        <Tab label="Capacità"></Tab>
      </Tabs>
    );
  }
}

export default CustomTab;
