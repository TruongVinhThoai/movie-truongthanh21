import React from "react";
import Slider from "./Slider/Slider";
import ListMovie from "./ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";

export default function Home() {
  return (
    <div>
      <Slider />
      <ListMovie />
      <TabMovie />
    </div>
  );
}
