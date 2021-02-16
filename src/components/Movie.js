import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css" ;

function Movie({movieCd,rank, movieNm}){ 
    return (
        <div className="movie">
        <Link to={{
            pathname:'/movie/${movieCd}', //클릭을 하면 ~~/movie-detail로 간다
            state:{
                
                rank:rank,
                movieNm:movieNm,
            }
        }}>
    <div className="movie">
        <h5 className="movie__rank">{rank}</h5>
        <h3 className="movie__title">{movieNm}</h3>
    </div>
    </Link>
    </div>
    );
}
   
Movie.propTypes = {
    movieCd: PropTypes.string.isRequired,
    //year: PropTypes.number.isRequired,
    rank:PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired
    //summary: PropTypes.string.isRequired,
    //poster: PropTypes.string.isRequired
  };

  export default Movie;