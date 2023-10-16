import axios from "axios";
import { BASE_URL, GOURGID, configHeaders } from "./Config";

export let getDataSlider = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=${GOURGID}`,
    method: "GET",
    headers: configHeaders(),
  });
};
