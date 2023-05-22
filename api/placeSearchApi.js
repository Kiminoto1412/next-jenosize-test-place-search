import axios from "../config/axios";

export function getPlaceSearchByKeyword(keyword) {
  return axios.get(`/jenosize/placeSearch?keyword=${keyword}`);
}
