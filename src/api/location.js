import axios from "axios";

export function gerCityList (argument) {
	return axios.get("http://localhost:3000/getCity");
}