import React from 'react';
import keys from './apikeys.jsx';
import $ from 'jquery';
import TrendingMovies from './TrendingMovies.jsx';


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foundTrending : false,
      trendingMovies : []
    };
    this.findMovies = this.findMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    let url = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + keys.movies;
    $.get(url, (query) => {
      var titles = query.results;
      var movies = [];
      for (var i = 0; i < titles.length; i++) {
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


  findMovies(event){
    event.preventDefault();
  }

  searchMovies(event) {
    event.preventDefault();
  }
  render() {
    return(
      <div>
        <div> 
          Here are some popular movies!
          {this.state.foundTrending ? 
            <div>
              <TrendingMovies trending={this.state.trendingMovies}/>
            </div> : null
          }
        </div>
        <div>
            <button onClick ={this.findMovies}> Let's Find a Movie To Watch </button> 
        </div>
        <form>
          <label>
            Let's Find a movie:
            <input type='text' name='name'/>
            <button onClick={this.searchMovies}> Enter </button> 
          </label>
        </form> 
      </div>
    ) 
  }
}

export default HomePage;