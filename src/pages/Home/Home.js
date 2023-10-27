import React from "react";
import Slider from "./Slider/Slider";
import ListMovie from "./ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import Search from "../../components/Search";

export default function Home() {
  return (
    <div>
      <Slider />
      <Search />
      <ListMovie />
      <TabMovie />
    </div>
  );
}
