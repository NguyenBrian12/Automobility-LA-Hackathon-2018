import React, { Component } from "react";
import MerchantListMap from "./MerchantListMap";
import styles from "./App.module.css";
const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    lat: null,
    lng: null,
    merchantList: null
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
    gm.info.watchPosition(processPosition, true);
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  showTime = () => {
    this.setState({
      merchantList: [
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752123",
          id: 1,
          zip: "90015",
          waitTime: "5m",
          city: "Los Angeles",
          name: "Illy Espressamente",
          state: "CA",
          country: "US",
          totalTime: "15m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752456",
          id: 2,
          zip: "90015",
          waitTime: "3m",
          city: "Los Angeles",
          name: "Starbucks",
          state: "CA",
          country: "US",
          totalTime: "23m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d7529762",
          id: 3,
          zip: "90015",
          waitTime: "5m",
          city: "Pico Donuts",
          name: "The Original Pantry Cafe",
          state: "CA",
          country: "US",
          totalTime: "30m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752959",
          id: 4,
          zip: "90015",
          waitTime: "2m",
          city: "Los Angeles",
          name: "The Coffee Bean & Tea Leaf",
          state: "CA",
          country: "US",
          totalTime: "20m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752900",
          id: 5,
          zip: "90015",
          waitTime: "10m",
          city: "Los Angeles",
          name: "El Parian Restaurant",
          state: "CA",
          country: "US",
          totalTime: "25m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752911",
          id: 6,
          zip: "90015",
          waitTime: "1m",
          city: "Los Angeles",
          name: "McDonald's",
          state: "CA",
          country: "US",
          totalTime: "9m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752949",
          id: 7,
          zip: "90015",
          waitTime: "7m",
          city: "Los Angeles",
          name: "Groundwork Coffee",
          state: "CA",
          country: "US",
          totalTime: "19m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752955",
          id: 8,
          zip: "90015",
          waitTime: "5m",
          city: "Los Angeles",
          name: "Verve Coffee Roasters",
          state: "CA",
          country: "US",
          totalTime: "21m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752985",
          id: 9,
          zip: "90015",
          waitTime: "5m",
          city: "Los Angeles",
          name: "Allegro Coffee Company",
          state: "CA",
          country: "US",
          totalTime: "25m"
        },
        {
          feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752940",
          id: 10,
          zip: "90015",
          waitTime: "3m",
          city: "Los Angeles",
          name: "Two Guns Esprsso",
          state: "CA",
          country: "US",
          totalTime: "11m"
        }
      ]
    });
  };

  render() {
    const { merchantList } = this.state;
    return (
      <div className={styles.root}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "2em"
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "2em"
          }}
        >
          <button onClick={this.handleClose}>Close</button>
          <button onClick={this.showTime}>View Nearby Locations</button>
        </div>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.lng}</div>
        <div style={{ marginTop: "10px" }}>
          {merchantList && <MerchantListMap merchantList={merchantList} />}
        </div>
      </div>
    );
  }
}

export default App;
