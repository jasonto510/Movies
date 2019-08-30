import React from 'react';
import keys from './apikeys.jsx';
import $ from 'jquery';
import TrendingMovies from './TrendingMovies.jsx';
import TrendingShows from './TrendingShows.jsx';
import SearchedMovies from './SearchedMovies.jsx';


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foundTrending : false,
      foundShows : false,
      trendingMovies : [],
      trendingShows : [],
      movieSearch : '',
      searchedMovies : [],
      search : false
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.getTrendingShows = this.getTrendingShows.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getTrendingMovies();
    this.getTrendingShows();
  }

  getTrendingMovies() {
    let url = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + keys.movies;
    $.get(url, (query) => {
      let titles = query.results;
      let movies = [];
      for (let i = 0; i < titles.length; i++) {
        if (titles[i].original_title) {
          movies.push(titles[i]);
        }
      }
      this.setState ({
        foundTrending : true,
        trendingMovies : movies
      })
    })
  }

  getTrendingShows() {
    let url = 'https://api.themoviedb.org/3/tv/popular?api_key=' + keys.movies;
    $.get(url, (popularShows) => {
      let titles = popularShows.results;
      this.setState({
        trendingShows : titles,
        foundShows : true
      })
    })
  }

  getMovies(event) {
    event.preventDefault();
    this.setState({
      movieSearch : event.target.value
    })
  }

  searchMovies(event) {
    event.preventDefault();
    console.log('clicked')
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=' + keys.movies + '&language=en-US&query=' + this.state.movieSearch + '&page=1';
    $.get(url, (movies) => {
      console.log(movies.results)
      this.setState({
        searchedMovies : movies.results,
        search : true
      })
    })
  }


  render() {
    return(
      <div>
        <form>
          <label>
            <div>Let's find a movie to watch!</div>
            <input type='text'onChange={this.getMovies} placeholder='Search...'/>
            <button onClick={this.searchMovies}> Enter </button> 
          </label>
        </form>
          {this.state.search ?  
            <div>
            {this.state.searchedMovies.map(movies => {
              <SearchedMovies movies = {movies}/>
            })}
            </div> : null
          }

        <div> 
          Here are some popular movies!
          {this.state.foundTrending ? 
            <div>
              <TrendingMovies trending={this.state.trendingMovies}/>
            </div> : null
          }
          Here are some popular shows! 
          {this.state.foundShows ? 
            <div>
              {this.state.trendingShows.map(shows => {
                return <TrendingShows showsTrending = {shows} />
              })}
            </div> : null
          }
        </div>
      </div>
    ) 
  }
}

export default HomePage;