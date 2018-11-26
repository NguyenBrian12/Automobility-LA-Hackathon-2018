import React from "react";

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

    // const directionsService = new window.google.maps.DirectionsSerivce();
    // const directionsDisplay = new window.google.maps.DirectionsRenderer();
    const starbucks = new window.google.maps.LatLng(
      34.044678,
      -118.26612699999998
    );
    const mapOptions = {
      zoom: 10,
      center: starbucks
    };
    const map = new window.google.maps.Map(
      this.reactMapRef.current,
      mapOptions
    );

    // conventionCenter Marker
    const conventionCenter = new window.google.maps.Marker({
      position: uluru,
      animation: window.google.maps.Animation.DROP,
      map: map
    });

    // directionsDisplay.setMap(map);

    // this.calcRoute = () => {
    //   const start = document.querySelectorAll(".example").value;
    //   const end = document.querySelectorAll(".end").value;
    //   const request = {
    //     origin: start,
    //     destination: end,
    //     travelMode: "DRIVING"
    //   };
    //   directionsService.route(request, function(result, status) {
    //     if (status === "OK") {
    //       directionsDisplay.setDirections(result);
    //     }
    //   });
    // };
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

  render() {
    return (
      <>
        <div
          style={{ width: "100%", height: "400px", backgroundColor: "grey" }}
          ref={this.reactMapRef}
        />
        <div>
          <strong>Start:</strong>
          <select className="start" onChange={this.calcRoute}>
            <option value="starbucks">Starbucks</option>
          </select>
        </div>
        <div>
          <strong>
            <select className="end" onChange={this.calcRoute} />
          </strong>
        </div>
      </>
    );
  }
}

export default DirectionsMap;
