import { Button } from "antd";
import React, { memo, useEffect } from "react";
import SelectCustom from "../Select";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchShowtimeData,
  setMovie,
  setShowtime,
  setShowtimeDate,
  setTheaterId,
} from "../../redux/searchSlice";

const SearchSection = () => {
  const dispatch = useDispatch();
  const { movieList, loading, showtimeData, movie, showtime } = useSelector(
    (state) => state.searchSlice
  );

  const handleSelectMovie = (selectedValue) => {
    dispatch(setMovie(selectedValue.value))
  };

  const handleSelectTheater = (selectedOption) => {
    dispatch(setTheaterId(selectedOption.value));
  };

  const handleSelectShowtimeDate = (selectedOption) => {
    dispatch(setShowtimeDate(selectedOption.value));
  };

  const handleSelectShowtime = (selectedOption) => {
    dispatch(setShowtime(selectedOption.value));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movie) {
      dispatch(fetchShowtimeData({ id: movie }));
    }
  }, [dispatch, movie]);

  if (loading === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <section className="search-sec">
      <div className="container mx-auto">
        <form action="#" method="post" noValidate="novalidate">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <SelectCustom
                className="form-select search-slt"
                isShowSearch
                data={movieList}
                onSelect={handleSelectMovie}
                isMovieSelect
                placeholder="Tìm phim..."
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <SelectCustom
                className="form-select search-slt"
                data={showtimeData?.heThongRapChieu}
                onSelect={handleSelectTheater}
                isTheaterSelect
                placeholder="Rạp"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
              <SelectCustom
                className="form-select search-slt"
                data={showtimeData?.heThongRapChieu}
                onSelect={handleSelectShowtimeDate}
                isShowTimeSelect
                placeholder="Ngày xem"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2">
              <SelectCustom
                className="form-select search-slt"
                placeholder="Suất chiếu"
                data={showtimeData?.heThongRapChieu}
                onSelect={handleSelectShowtime}
              />
            </div>
            <div className="w-full sm:w-full md:w-1/4 lg:w-1/6 p-2">
              <Button type="button" className="wrn-btn">
                Mua Ve Ngay
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default memo(SearchSection);
