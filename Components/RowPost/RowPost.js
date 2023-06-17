import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube';
import { imageURL ,APIkey} from "../../constants/constants";
import "./RowPost.css";
import axios from "../../axios";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [URLid,setURLId] = useState('');
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert('Network Error')
      });
  }, [props.url]);

  if (!movies || movies.length === 0) {
    return null; // or render a loading indicator
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
    console.log(id);
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${APIkey}`).then((response) => {
      if (response.data.results.length!==0) {
        setURLId(response.data.results[0])
      }else{
        console.log("Array empty");
      }
    }).catch((err) => {
      
    });
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={()=>handleMovie(obj.id)}
            alt="poster"
            src={`${imageURL}${obj.backdrop_path}`}
            className={props.isSmall ? "smallPoster" : "poster-image"}
            key={obj.id}
          />
        ))}
      </div>
      { URLid && <Youtube opts={opts} videoId={URLid.key}/>}
    </div>
  );
}


export default RowPost;
