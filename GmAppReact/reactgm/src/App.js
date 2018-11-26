import React, { Component } from "react";
import styles from "./App.module.css";
const gm = window.gm;

class App extends Component {
  state = {
    searchCatagory: "",
    timeLimit: null,
    searching: true,
    timing: false,
    timeChange: "",
    vin: "pending...",
    lat: null,
    lng: null
  };
  submitSearch = search => {
    console.log(search);
    this.setState(
      {
        searchCatagory: search,
        searching: false,
        timing: true
      },
      () => {
        console.log(this.state.searchCatagory);
      }
    );
  };
  submitTime = time => {
    this.setState(
      {
        timeLimit: time,
        timing: false
      },
      () => {
        console.log(this.state.timeLimit);
      }
    );
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
  handleBack = () => {
    this.setState(
      {
        searching: true,
        timing: false
      },
      () => {
        console.log(this.state.timeLimit);
      }
    );
  };
  timeChange = e => {
    this.setState({
      timeChange: e.target.value
    });
  };
  render() {
    return (
      <div className={styles.main}>
        {this.state.searching === true && (
          <>
            <p className={styles.root}>What are you looking for?</p>
            <div>
              <div>
                <button
                  className={styles.button}
                  onClick={() => this.submitSearch("food")}
                >
                  Food
                </button>
              </div>

              <div>
                <button
                  className={styles.button}
                  style={{ width: "100%", fontFamily: "Raleway" }}
                  onClick={() => this.submitSearch("dessert")}
                >
                  Dessert
                </button>
              </div>

              <div>
                <button
                  className={styles.button}
                  style={{ width: "100%", fontFamily: "Raleway" }}
                  onClick={() => this.submitSearch("coffee")}
                >
                  Coffee
                </button>
              </div>

              <div>
                <button
                  className={styles.button}
                  style={{ width: "100%", fontFamily: "Raleway" }}
                  onClick={() => this.submitSearch("shopping")}
                >
                  Shopping
                </button>
              </div>
              <div>
                <button
                  className={styles.back}
                  style={{ width: "25%", fontFamily: "Raleway" }}
                  onClick={this.handleClose}
                >
                  Exit App
                </button>
              </div>
            </div>
          </>
        )}
        {this.state.timing === true && (
          <>
            <p className={styles.root}>How much time do you have?</p>
            <div>
              <button
                className={styles.button}
                style={{ width: "100%", fontFamily: "Raleway" }}
                onClick={() => this.submitTime(999)}
              >
                No Time Limit
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                style={{ width: "100%", fontFamily: "Raleway" }}
                onClick={() => this.submitTime(15)}
              >
                15 Minutes
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                style={{ width: "100%", fontFamily: "Raleway" }}
                onClick={() => this.submitTime(30)}
              >
                30 Minutes
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                style={{ width: "100%", fontFamily: "Raleway" }}
                onClick={() => this.submitTime(45)}
              >
                45 Minutes
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                style={{ width: "100%", fontFamily: "Raleway" }}
                onClick={() => this.submitTime(60)}
              >
                1 Hour
              </button>
            </div>
            <button
              className={styles.back}
              style={{ width: "25%", fontFamily: "Raleway" }}
              onClick={this.handleBack}
            >
              Back
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
