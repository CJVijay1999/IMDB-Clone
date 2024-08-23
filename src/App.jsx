import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let newWatchlist = [...watchlist , movieObj];
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchlist))
    setWatchList(newWatchlist);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie)=>{
       return movie.id != movieObj.id
    })
    setWatchList(filteredWatchlist)
    localStorage.setItem("moviesApp" , JSON.stringify(filteredWatchlist));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchlist={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
