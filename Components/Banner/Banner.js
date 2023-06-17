import React, { useEffect, useState } from "react";
import { APIkey, imageURL } from "../../constants/constants";
import axios from "../../axios";
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${APIkey}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0    ]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!movie) {
    return null; // Add a loading state or return placeholder content while waiting for the API response
  }

  return (
    <div style={{ backgroundImage: `url(${imageURL + movie.backdrop_path})` }} className="banner">
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <div className="banner-buttons">
          <button className="buttons">Play</button>
          <button className="buttons">My List</button>
        </div>
        <h1 className="description">
          {movie.overview}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
