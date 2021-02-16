import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css" ;
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data:{
        boxOfficeResult:{dailyBoxOfficeList}
      }
    } = await axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101");
    this.setState({dailyBoxOfficeList, isLoading: false});
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, dailyBoxOfficeList } = this.state;
    return (
      <section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader__text_">Loading...</span>
          </div>
        ): ( 
          <div className="movies">
            {dailyBoxOfficeList.map(movie=>(
           <Movie 
            key={movie.movieCd}
            movieCd={movie.movieCd} 
            rank={movie.rank} 
            movieNm={movie.movieNm}
            />
          ))}
          </div>
        )}

        </section>  
    
    );
  }
}

export default Home;