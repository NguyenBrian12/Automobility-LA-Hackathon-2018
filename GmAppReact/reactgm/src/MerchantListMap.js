import React from "react";
import styles from "./App.module.css";
import GoogleMap from "./GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import DirectionsMap from "./DirectionsMap";

class MerchantListMap extends React.Component {
  state = {
    merchantList: [
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752123",
        id: 1,
        zip: "90015",
        waitTime: 3,
        city: "Los Angeles",
        name: "Illy Espressamente",
        state: "CA",
        country: "US",
        distanceTo: 3,
        distanceFrom: 6,
        totalTime: 8,
        latitude: 34.045152,
        longitude: -118.266669
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752456",
        id: 2,
        zip: "90015",
        waitTime: 3,
        city: "Los Angeles",
        name: "Starbucks",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 6,
        totalTime: 10,
        latitude: 34.044678,
        longitude: -118.26612699999998
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d7529762",
        id: 3,
        zip: "90015",
        waitTime: 5,
        city: "Los Angeles",
        name: "The Original Pantry Cafe",
        state: "CA",
        country: "US",
        distanceTo: 3,
        distanceFrom: 5,
        totalTime: 15,
        latitude: 34.0463704,
        longitude: -118.26291579999997
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752959",
        id: 4,
        zip: "90015",
        waitTime: 2,
        city: "Los Angeles",
        name: "The Coffee Bean & Tea Leaf",
        state: "CA",
        country: "US",
        distanceTo: 4,
        distanceFrom: 6,
        totalTime: 18,
        latitude: 34.039327,
        longitude: -118.25587300000001
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752900",
        id: 5,
        zip: "90015",
        waitTime: 5,
        city: "Los Angeles",
        name: "Pico Donuts",
        state: "CA",
        country: "US",
        distanceTo: 1,
        distanceFrom: 2,
        totalTime: 20,
        latitude: 34.0449338,
        longitude: -118.27665000000002
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752911",
        id: 6,
        zip: "90017",
        waitTime: 2,
        city: "Los Angeles",
        name: "Philz Coffee",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 5,
        totalTime: 22,
        latitude: 34.04654379999999,
        longitude: -118.25928829999998
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752949",
        id: 7,
        zip: "90015",
        waitTime: 7,
        city: "Los Angeles",
        name: "Groundwork Coffee",
        state: "CA",
        country: "US",
        distanceTo: 10,
        distanceFrom: 8,
        totalTime: 25,
        latitude: 34.0423977,
        longitude: -118.26932060000001
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752955",
        id: 8,
        zip: "90014",
        waitTime: 5,
        city: "Los Angeles",
        name: "Verve Coffee Roasters",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 6,
        totalTime: 30,
        latitude: 34.0425093,
        longitude: -118.25468869999997
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752985",
        id: 9,
        zip: "90017",
        waitTime: 30,
        city: "Los Angeles",
        name: "Allegro Coffee Company",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 5,
        totalTime: 60,
        latitude: 34.0462157,
        longitude: -118.2572839
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752940",
        id: 10,
        zip: "90017",
        waitTime: 30,
        city: "Los Angeles",
        name: "Two Guns Espresso",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 5,
        totalTime: 75,
        latitude: 34.0504452,
        longitude: -118.25951229999998
      }
    ],
    show: true,
    directions: false,
    showShops: true,
    letsGo: false,
    img: false
  };

  goToShop = merchant => {
    console.log("Let's go to " + merchant.name);
    this.setState({
      show: false,
      directions: true,
      showShops: false,
      letsGo: true
    });
  };

  showImg = () => {
    this.setState({ directions: false, img: true, letsGo: false });
    this.props.hideBack();
  };

  render() {
    const {
      merchantList,
      directions,
      show,
      showShops,
      letsGo,
      img
    } = this.state;
    const { latitude, longitude } = this.props;
    console.log("dir", directions, latitude, longitude);
    console.log(this.props.timeLimit);
    return (
      <div className={styles.containerBoosted}>
        {show && (
          <div className={styles.flexItem1}>
            <GoogleMap
              latitude={latitude}
              longitude={longitude}
              merchantList={merchantList}
            />
          </div>
        )}
        {img && (
          <div className={styles.flexItem1}>
            {" "}
            <img
              style={{ height: "60vh", width: "173vh" }}
              src="https://i.imgur.com/P7qv5jl.png"
            />
          </div>
        )}
        {this.state.directions && (
          <DirectionsMap
            merchantList={merchantList}
            latitude={latitude}
            longitude={longitude}
          />
        )}
        {letsGo && (
          <div
            className={styles.button}
            style={{
              width: "50%",
              height: "25%",
              fontFamily: "Raleway",
              marginBottom: "5px"
            }}
            onClick={this.showImg}
          >
            <FontAwesomeIcon icon={faArrowCircleRight} /> Let's Go!
          </div>
        )}

        {showShops && (
          <div className={styles.flexItem2}>
            {merchantList.length > 0 ? (
              <div>
                {merchantList
                  .filter(
                    merchant => merchant.totalTime <= this.props.timeLimit
                  )
                  .map(merchant => (
                    <div
                      key={merchant.id}
                      className={styles.rightContainer}
                      onClick={() => this.goToShop(merchant)}
                    >
                      <div>{merchant.name}</div>
                      <div>
                        {" "}
                        Wait <FontAwesomeIcon icon={faClock} />:{" "}
                        {merchant.waitTime}
                        mins{" "}
                      </div>{" "}
                      <div>
                        Total <FontAwesomeIcon icon={faClock} />:{" "}
                        {merchant.totalTime}mins
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div>{null}</div>
            )}
          </div>
        )}
        <div />
      </div>
    );
  }
}

export default MerchantListMap;
