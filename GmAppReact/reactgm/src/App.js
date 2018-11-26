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
      <div className={styles.containerBoosted}>
        {/* <div>VIN: {this.state.vin}</div> */}
        {/* --this is where the console display will go */}

        <div className={styles.flexItem1}>Left</div>
        <div className={styles.rightContainer}>
          <div className={styles.flexItem2}>hello</div>
          <div className={styles.flexItem2}>Item 1</div>
          <div className={styles.flexItem2}>Item 2</div>
        </div>
      </div>
    );
  }
}

export default App;
