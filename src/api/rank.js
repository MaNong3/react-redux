import axios from "axios";

export function getCarouselList(argument) {
    return axios.get("/getCarouselList");
}

export function getRankList(argument) {
    return axios.get("/getRankList")
}