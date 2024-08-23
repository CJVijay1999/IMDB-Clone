import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w[190px] bg-center bg-cover rounded-xl hover:scale-110 duration-100 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-700/55">
          {" "}
          &#10060;{" "}
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-700/55">
          &#128509;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 flex flex-col">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
