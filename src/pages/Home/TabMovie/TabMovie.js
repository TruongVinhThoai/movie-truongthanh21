import React, { useEffect, useState } from "react";
import { getMovieByTheater } from "../../../services/Api";
import { Tabs } from "antd";
import moment from "moment/moment";

const onChange = (key) => {
  console.log(key);
};
// const items = [
//   {
//     key: "1",
//     label: "Tab 1",
//     children: "Content of Tab Pane 1",
//   },
//   {
//     key: "2",
//     label: "Tab 2",
//     children: "Content of Tab Pane 2",
//   },
//   {
//     key: "3",
//     label: "Tab 3",
//     children: "Content of Tab Pane 3",
//   },
// ];

export default function TabMovie() {
  const [DS_HeThongRap, setDS_HeThongRap] = useState([]);
  useEffect(() => {
    getMovieByTheater()
      .then((res) => {
        console.log(res);
        setDS_HeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDsPhim = (dsPhim) => {
    return dsPhim.map((phim) => {
      return (
        <div id="cumrap" className="flex space-x-5 p-3 items-center">
          <img src={phim.hinhAnh} className="w-20 h-32 object-cover" alt="" />
          <div>
            <p>{phim.tenPhim}</p>
            <div className="grid grid-cols-4 gap-3">
              {phim.lstLichChieuTheoPhim.slice(0, 7).map((lichchieu) => {
                return (
                  <span className="bg-red-500 text-white rounded shadow px-1 py-2">
                    {moment(lichchieu).format("HH:MM - ll")}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  let handleHeThongRap = () => {
    return DS_HeThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img className="w-16" src={heThongRap.logo} alt="" />,
        children: (
          <Tabs
            style={{ height: 500 }}
            tabPosition="left"
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="text-left w-96 whitespace-normal">
                    <p className="text-green-500 font-medium">
                      {cumRap.tenCumRap}
                    </p>
                    <p>{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div style={{ height: 500, overflow: "scroll" }}>
                    {renderDsPhim(cumRap.danhSachPhim)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };

  return (
    <div className="container shadow-3 rounded border-2 border-l-black">
      <Tabs
        style={{ height: 500 }}
        tabPosition="left"
        defaultActiveKey="1"
        items={handleHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
