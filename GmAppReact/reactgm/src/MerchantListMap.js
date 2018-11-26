import React from "react";

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
        totalTime: 12
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
        totalTime: 15
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d7529762",
        id: 3,
        zip: "90015",
        waitTime: 5,
        city: "Pico Donuts",
        name: "The Original Pantry Cafe",
        state: "CA",
        country: "US",
        distanceTo: 3,
        distanceFrom: 5,
        totalTime: 13
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
        totalTime: 12
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752900",
        id: 5,
        zip: "90015",
        waitTime: 5,
        city: "Los Angeles",
        name: "El Parian Restaurant",
        state: "CA",
        country: "US",
        distanceTo: 1,
        distanceFrom: 2,
        totalTime: 8
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
        totalTime: 13
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
        totalTime: 25
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752955",
        id: 8,
        zip: "90015",
        waitTime: 5,
        city: "Los Angeles",
        name: "Verve Coffee Roasters",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 6,
        totalTime: 17
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752985",
        id: 9,
        zip: "90015",
        waitTime: 2,
        city: "Los Angeles",
        name: "Allegro Coffee Company",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 5,
        totalTime: 13
      },
      {
        feedbackCorrelationID: "0b6f2d2d-3ac4-4e4c-a0b4-4f1b5d752940",
        id: 10,
        zip: "90015",
        waitTime: 4,
        city: "Los Angeles",
        name: "Two Guns Esprsso",
        state: "CA",
        country: "US",
        distanceTo: 6,
        distanceFrom: 5,
        totalTime: 15
      }
    ]
  };
  render() {
    const { merchantList } = this.state;
    console.log(merchantList);
    return (
      <>
        {merchantList.length > 0 ? (
          <>
            {merchantList.map(merchant => (
              <div
                key={merchant.id}
                style={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ color: "white" }}>
                  <strong style={{ color: "#7395AE" }}>{merchant.name}</strong>{" "}
                  <div>Wait Time: {merchant.waitTime}m.</div>
                  <div>Total Time: {merchant.totalTime}m</div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div />
        )}
      </>
    );
  }
}

export default MerchantListMap;
