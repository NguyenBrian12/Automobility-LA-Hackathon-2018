import React, { Component } from "react";
import MerchantListMap from "./MerchantListMap";
import styles from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const gm = window.gm;

class App extends Component {
  state = {
    searchCatagory: "",
    timeLimit: null,
    searching: true,
    timing: false,
    timeChange: "",
    vin: "pending...",
    latitude: null,
    longitude: null,
    merchantList: false
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
        timing: false,
        merchantList: true
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
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Lat:" + latitude);
      console.log("long:" + longitude);
      this.setState({ latitude: latitude, longitude: longitude });
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
  handleBackFromResult = () => {
    this.setState(
      {
        timeLimit: null,
        timing: true
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

  showTime = () => {
    this.setState({});
  };

  handlePopulateRoute = () => {};
  render() {
    const { merchantList, latitude, longitude } = this.state;
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
                  <FontAwesomeIcon icon={faUtensils} /> Food
                </button>
              </div>
              <div>
                <button
                  className={styles.button}
                  onClick={() => this.submitSearch("coffee")}
                >
                  <FontAwesomeIcon icon={faCoffee} /> Coffee
                </button>
              </div>

              <div>
                <button
                  className={styles.button}
                  onClick={() => this.submitSearch("groceries")}
                >
                  <FontAwesomeIcon icon={faShoppingBag} /> Groceries
                </button>
              </div>
              <div>
                <button className={styles.back} onClick={this.handleClose}>
                  <FontAwesomeIcon icon={faTimesCircle} /> Exit
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
                onClick={() => this.submitTime(15)}
              >
                15 Minutes
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                onClick={() => this.submitTime(30)}
              >
                30 Minutes
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                onClick={() => this.submitTime(45)}
              >
                45 Minutes
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                onClick={() => this.submitTime(60)}
              >
                1 Hour
              </button>
            </div>
            <div>
              <button
                className={styles.button}
                onClick={() => this.submitTime(999)}
              >
                No Time Limit
              </button>
            </div>
            <button className={styles.back} onClick={this.handleBack}>
              <FontAwesomeIcon icon={faBackspace} /> Back
            </button>
          </>
        )}
        {this.state.timeLimit && this.state.searchCatagory && (
          <div>
            {merchantList && (
              <MerchantListMap
                merchantList={merchantList}
                latitude={latitude}
                longitude={longitude}
              />
            )}
            <button
              className={styles.back}
              style={{
                width: "25%",
                fontFamily: "Raleway",
                marginBottom: "5px"
              }}
              onClick={this.handleBackFromResult}
            >
              <FontAwesomeIcon icon={faBackspace} /> Back
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
