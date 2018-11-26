import React from "react";

class GoogleMap extends React.Component {
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
      zoom: 14,
      center: uluru
    });
    const marker = new window.google.maps.Marker({
      position: uluru,
      animation: window.google.maps.Animation.DROP,
      map: map
    });
    merchantList.map(item => {
      const markers = new window.google.maps.Marker({
        position: { lat: item.latitude, lng: item.longitude },
        map: map,
        animation: window.google.maps.Animation.DROP
      });
      console.log(item);
    });
  };

  render() {
    return (
      <>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "grey" }}
          ref={this.reactMapRef}
        />
      </>
    );
  }
}

export default GoogleMap;
