import React, { useEffect, useState } from "react";

import genreids from '../Utility/genre'


function WatchList({ watchlist , handleRemoveFromWatchList , setWatchlist}) {
  const [search, setSearch] = useState("");
  const [genreList , setGenreList] = useState (['All Genres'])
  const [currGenre , setCurrGenre] = useState('All Genres')
  
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre)
  }
  let sortIncreasing = ()=> {
    let sortedIncreasing = watchlist.sort((movieA , movieB)=> {
      return movieA.vote_average - movieB.vote_average
    })
    
    setWatchlist([...sortedIncreasing])
  }


  let sortDecreasing = ()=> {
   let sortedDecreasing = watchlist.sort((movieA , movieB)=> {
      return movieB.vote_average - movieA.vote_average
    })

    setWatchlist([...sortedDecreasing])
  }

  useEffect(()=> {
     let temp = watchlist.map((movieObj)=> {
      return genreids[movieObj.genre_ids[0]]
     })
     temp = [...new Set(temp)]
     setGenreList(['All Genres' , ...temp])
  } , [watchlist])

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre)=> {
           return <div onClick={()=> handleFilter(genre)} className={currGenre==genre?"flex justify-center h-[3rem] w-[8rem] bg-blue-500 rounded-xl text-white font-bold items-center mx-3" : "flex justify-center h-[3rem] w-[8rem] bg-gray-500 rounded-xl text-white font-bold items-center mx-4"}>
           {genre}
         </div>
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-300 outline-none px-4"
          type="text"
          placeholder="Searct for Movie"
        />
      </div>

      <div className="overflow-hidden rounder-lg border border-gray-300 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-4">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecreasing} className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>

            </tr>

          </thead>

          <tbody>
            {watchlist.filter((movieObj)=> {
              if(currGenre ==='All Genres') {
                return true
              } else {
                return genreids[movieObj.genre_ids[0]] ===currGenre;
              }
            }).filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[5rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;

("https://image.tmdb.org/t/p/original/${movie poster_path}");
