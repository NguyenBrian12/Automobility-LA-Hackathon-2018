import React from "react";

class MerchantListMap extends React.Component {
  render() {
    const { merchantList } = this.props;
    console.log(merchantList);
    return (
      <>
        {merchantList.length > 0 ? (
          <>
            {merchantList.map(merchant => (
              <div
                key={merchant.id}
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div>
                  <strong style={{ color: "#7395AE" }}>{merchant.name}</strong>{" "}
                  <div>Wait Time: {merchant.waitTime}.</div>
                  <div>Total Time: {merchant.totalTime}</div>
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
