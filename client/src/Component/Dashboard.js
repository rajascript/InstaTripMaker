import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Action/index";
import Axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCoverPhotos = this.getCoverPhotos.bind(this);
  }
  async getCurrency(countryCode) {
    console.log("curr");
    let res = await Axios.get(
      `https://restcountries.eu/rest/v1/alpha/${countryCode}`
    );
    return res.data.currencies[0];
  }
  async getImage(hotelName, place) {
    let newHotelName = hotelName.split(" ").join("+");
    let data = { hotelName, place };
    let axioData = JSON.stringify({ data });
    console.log("making axio for", axioData);
    let googlePlacesData = await Axios.post("/api/getthumbnails", {
      data: axioData
    });
    console.log("image URl", googlePlacesData);
    return googlePlacesData.data;
  }
  renderNearbyHotels() {
    return (
      <React.Fragment>
        {this.state.hotels.results.map((curr, i) => {
          if (i >= 3) {
            return;
          }
          //remove this for prod.
          return (
            <div>
              <div>
                <img src={curr.coverPhoto} />
              </div>
              <div>
                <div>{curr.property_name}</div>
                <div>
                  {curr.total_price.currency}
                  {curr.total_price.amount}
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
  async getCoverPhotos() {
    for (let i in this.state.hotels.results) {
      let name = this.state.hotels.results[i].property_name;
      let city = this.state.hotels.results[i].location;
      let ans = await this.getImage(name, city);
      console.log("heya i got", ans);
      let newHotel = Object.assign({}, this.state.hotels);
      newHotel.results[i].coverPhoto = ans;
      this.setState({ hotles: newHotel });
      if (i == 3) break;
    }
  }
  componentWillReceiveProps(props) {
    console.log("RECIEVED PROPS");
    this.setState({ hotels: props.hotels });
  }

  async getHotels() {
    console.log("getting hotels");
    // let currency = await this.getCurrency("in");
    navigator.geolocation.getCurrentPosition(async pos => {
      console.log("getting pos");
      let currPos = await pos;
      console.log(currPos);
      let hotels = await this.props.fetchHotels(
        currPos.coords.latitude,
        currPos.coords.longitude,
        "INR"
      );
    });
  }
  render() {
    if (this.state.hotels === undefined || this.state.hotels === null) {
      console.log("setting hotels");
      this.getHotels();
      return <main className="hotel-view">rendering/></main>;
    } else if (
      this.state.hotels.results[0].coverPhoto === undefined ||
      this.state.hotels.results[0].coverPhoto === null
    ) {
      this.getCoverPhotos();
      console.log("setting txt");
      return <main className="hotel-view">settinghotlsphoyo/></main>;
    } else {
      console.log("setting img");
      return <main className="hotel-view">{this.renderNearbyHotels()}</main>;
    }
  }
}
function mapStateToProps({ hotels }) {
  return { hotels };
}
export default connect(mapStateToProps, actions)(Dashboard);
