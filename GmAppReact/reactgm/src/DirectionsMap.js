import React from "react";
import styles from "./App.module.css";

class DirectionsMap extends React.Component {
  reactMapRef = React.createRef();

  state = {
    // latitude: this.props.latitude,
    // longitude: this.props.longitude,
    slatitude: 34.044678,
    slongitude: -118.26612699999998,
    starbucks: "34.044678" + "-118.26612699999998"
  };

  componentDidMount = () => {
    this.directionsService = new window.google.maps.DirectionsService();
    this.directionsDisplay = new window.google.maps.DirectionsRenderer();
    this.initMap();
    console.log(this.state.starbucks);
  };

  initMap = () => {
    const { latitude } = this.props;
    const { longitude } = this.props;
    const uluru = { lat: latitude, lng: longitude };
    console.log(uluru);

    const map = new window.google.maps.Map(this.reactMapRef.current, {
      zoom: 14,
      center: { lat: this.props.latitude, lng: this.props.longitude }
    });
    this.directionsDisplay.setMap(map);
    this.calculateAndDisplayRoute();
  };

  calculateAndDisplayRoute = () => {
    console.log("work");
    this.directionsService.route(
      {
        origin: { lat: this.props.latitude, lng: this.props.longitude }, // Haight.
        destination: { lat: 34.044678, lng: -118.26612699999998 }, // Ocean Beach.
        travelMode: "DRIVING"
      },
      (response, status) => {
        if (status === "OK") {
          this.directionsDisplay.setDirections(response);
        } else {
          console.log("Directions request failed due to " + status);
        }
      }
    );
  };

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.calculateAndDisplayRoute();
    });
  };

  render() {
    return (
      <div className={styles.flexItem1}>
        <div
          ref={this.reactMapRef}
          style={{ width: "100%", height: "100%", backgroundColor: "grey" }}
        />
      </div>
    );
  }
}

export default DirectionsMap;
