import React, { Component } from "react";
import styles from "./App.module.css";
const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    lat: null,
    lng: null
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });

    const processPosition = position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      this.setState({ lat, lng });
    };
    gm.info.getCurrentPosition(processPosition, true);
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <div className={styles.root}>
        <div>VIN: {this.state.vin}</div>
        <button onClick={this.handleClose}>Close</button>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.lng}</div>
      </div>
    );
  }
}

export default App;
