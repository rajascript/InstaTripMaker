import axios from "axios";
import { FETCH_HOTELS } from "./types";
export const fetchHotels = (latt, long, curr) => {
  return async dispatch => {
    console.log("axio");
    console.log(latt, long, curr);
    const res = await axios.get(
      `https://api.sandbox.amadeus.com/v1.2/hotels/search-circle?apikey=nzo4YoJhvDb6tZISW8XnA8T8JzX6QLAh&latitude=${latt}&longitude=${long}&radius=42&check_in=2018-06-15&check_out=2018-06-16&currency=${curr}`
    );
    console.log(res);
    dispatch({
      type: FETCH_HOTELS,
      payload: res.data
    });
  };
};
