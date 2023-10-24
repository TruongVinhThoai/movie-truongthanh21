import axios from "axios";
import { BASE_URL, GOURGID, configHeaders, https } from "./Config";
import { ThongTinDatVe } from "../_core/model/ThongTinDatVe";

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

export let getMovieByTheater = () => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GOURGID}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getDetailMovie = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getInfoMovie = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getDetailBooking = {
  // Lay chi tiet phong ve
  getDetail: (id) => {
    return https.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  },
  setBooking: (values = new ThongTinDatVe()) => {
    return https.post(`/QuanLyDatVe/DatVe`, values);
  },
};

export let userServ = {
  getInfoUser: () => {
    return https.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
};
