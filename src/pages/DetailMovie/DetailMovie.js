import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  getDetailMovie,
  getInfoMovie,
  getMovieByTheater,
} from "../../services/Api";
import { Progress, Tabs } from "antd";
import moment from "moment/moment";

const onChange = (key) => {
  console.log(key);
};

export default function DetailMovie() {
  // useParams =>lay id tu url
  let params = useParams();
  console.log("🚀 ~ file: DetailMovie.js:7 ~ DetailMovie ~ params:", params);
  const [detail, setDetail] = useState({});
  useEffect(() => {
    //Goi api lay chi tiet phim dua tren id
    getDetailMovie(params.id)
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [DS_HeThongRapMovie, setDS_HeThongRapMovie] = useState([]);
  console.log(
    "🚀 ~ file: DetailMovie.js:49 ~ DetailMovie ~ DS_HeThongRapMovie:",
    DS_HeThongRapMovie
  );
  useEffect(() => {
    getInfoMovie(params.id)
      .then((res) => {
        console.log(res);
        setDS_HeThongRapMovie(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDsPhim = (dsPhim) => {
    return dsPhim.map((phim) => {
      return (
        <div id="cumrap" className="flex space-x-5 p-3 items-center">
          {/* <img src={phim.hinhAnh} className="w-20 h-32 object-cover" alt="" /> */}
          <div>
            <p>{phim.tenRap}</p>
            <div className="grid grid-cols-4 gap-3">
              {/* {phim.lstLichChieuTheoPhim.slice(0, 7).map((lichchieu) => { */}
              {/* // return ( */}
              <NavLink to={`/checkout/${phim.maLichChieu}`}>
                <span className="bg-red-500 text-white rounded shadow px-1 py-2">
                  {moment(phim.ngayChieuGioChieu).format("HH:MM - ll")}
                </span>
              </NavLink>

              <span>Thời lượng: {phim.thoiLuong} phút</span>
              {/* ); */}
              {/* })} */}
            </div>
          </div>
        </div>
      );
    });
  };

  let handleHeThongRap = () => {
    return DS_HeThongRapMovie.map((heThongRap, index) => {
      return {
        key: index,
        label: <img className="w-16" src={heThongRap.logo} alt="" />,
        children: (
          <Tabs
            style={{ height: 500 }}
            tabPosition="left"
            items={heThongRap.cumRapChieu.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="text-left w-96 whitespace-normal">
                    <img src={cumRap.hinhAnh} alt="" />
                    <p className="text-green-500 font-medium">
                      {cumRap.tenCumRap}
                    </p>
                    <p>{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div style={{ height: 380, overflow: "scroll" }}>
                    {renderDsPhim(cumRap.lichChieuPhim)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };

  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: (
        <Tabs
          style={{ height: 500 }}
          tabPosition="left"
          defaultActiveKey="1"
          items={handleHeThongRap()}
          onChange={onChange}
        />
      ),
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    // <div className="container flex justify-between items-center">
    // <img className="w-1/3 aspect-square" src={detail.hinhAnh} alt="" />
    //   <Progress
    //     size={350}
    //     format={(value) => (
    //       <span className="text-red-500 font-medium animate-pulse block">
    //         {value / 10} Diem
    //       </span>
    //     )}
    //     strokeColor={"red"}
    //     strokeWidth={20}
    //     className="animate-bounce"
    //     type="circle"
    //     percent={detail.danhGia * 10}
    //   />
    // </div>
    <div>
      <div className="relative w-full h-[500px]">
        <div className="top-0 left-0 right-0 bottom-0 absolute bg-gradient-to-t"></div>
        <div
          style={{
            backgroundImage: `url(${detail.hinhAnh})`,
          }}
          className="top-0 left-0 right-0 bottom-0 absolute bg-cover bg-no-repeat bg-center blur-md"
        ></div>
        <div className="top-1/2 left-1/2 text-white w-full h-[320px] flex absolute max-w-[1080px] items-center justify-center -translate-x-1/2 -translate-y-1/2">
          <div className="w-2/4 relative bg-cover bg-center bg-no-repeat">
            <img className="w-full h-auto" src={detail.hinhAnh} alt="Image defail movie" />
          </div>
          <div className="px-3 md:text-lg text-sm">
            <p>{detail.ngayKhoiChieu}</p>
            <p>{detail.tenPhim}</p>
            <p>{detail.moTa}</p>
            <button class="bg-transparent transition hover:bg-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
              Book
            </button>
          </div>
          <div>
            {" "}
            <Progress
              size={200}
              format={(value) => (
                <span className="text-red-500 font-medium animate-pulse block">
                  {value / 10} Diem
                </span>
              )}
              strokeColor={"red"}
              strokeWidth={20}
              type="circle"
              percent={detail.danhGia * 10}
            />
          </div>
        </div>
      </div>
      <div className="container shadow-3 rounded border-2 border-l-black">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          size="large"
          centered
          tabBarGutter={100}
        />
      </div>
    </div>
  );
}

//progress antd
