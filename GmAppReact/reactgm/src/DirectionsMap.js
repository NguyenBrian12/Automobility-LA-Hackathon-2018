import React from "react";
import styles from "./App.module.css";

class DirectionsMap extends React.Component {
  reactMapRef = React.createRef();

  componentDidMount = () => {
    this.initMap();
  };
  initMap = () => {
    const { latitude } = this.props;
    const { longitude } = this.props;
    const { merchantList } = this.props;
    const uluru = { lat: latitude, lng: longitude };

    const map = new window.google.maps.Map(this.reactMapRef.current, {
      zoom: 10,
      center: uluru
    });
    var DirectionsService = new window.google.maps.DirectionsSerivce();
    var directionsDisplay = new window.google.maps.DirectionsRenderer();
    const starbucks = new window.google.maps.LatLng(
      34.044678,
      -118.26612699999998
    );

    // conventionCenter Marker
    const conventionCenterMarker = new window.google.maps.Marker({
      position: uluru,
      animation: window.google.maps.Animation.DROP,
      map: map
    });

    // directionsDisplay.setMap(mapOptions);

    // this.calcRoute = () => {
    //   const start = document.querySelectorAll(".start").value;
    //   const end = document.querySelectorAll(".end").value;
    // const request = {
    //   origin: start,
    //   destination: end,
    //   travelMode: "DRIVING"
    // };
    // directionsService.route(request, function(result, status) {
    //   if (status === "OK") {
    //     directionsDisplay.setDirections(result);
    //   }
    // });

    DirectionsService.route(
      {
        origin: uluru,
        destination: starbucks,
        travelMode: "DRIVING"
      },
      (result, status) => {
        if (status === "OK") {
          directionsDisplay.setDirections(result);
        }
      }
    );
    // LA convention center
    const laConventionCenter = new window.google.maps.Map(
      this.reactMapRef.current,
      {
        zoom: 10,
        center: uluru
      }
    );
    const starbucksMarker = new window.google.maps.Marker({
      position: { lat: 34.044678, lng: -118.26612699999998 },
      map: map,
      animation: window.google.maps.Animation.DROP
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("n" + name + " v" + value);
  };
  render() {
    return (
      <div className={styles.flexItem1}>
        <div ref={this.reactMapRef} />
        <div>
          <span>Start:</span>
          <select className="start" onChange={this.handleChange}>
            <option name="start" value={this.state.start}>
              Starbucks
            </option>
          </select>
        </div>
        <div>
          <span>End:</span>
          <select className="end" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default DirectionsMap;
