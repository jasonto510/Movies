import React from 'react';
import Movies from './Movies.jsx'


class TrendingMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      foundMovies : false,
      movies : [],
    })

    this.getMovies.bind(this);
    this.clickedMovies.bind(this);
  }

  componentDidMount() {
    console.log('hi')
    this.getMovies();
  }

  clickedMovies (event) {
    event.preventDefault();
  }

  getMovies () {
    this.setState({
      foundMovies : true,
      movies : this.props.trending
    })
  }


  render() {
    return (
      <div>
        {this.state.foundMovies ? 
          <div>
            {this.state.movies.map(trending => {
              return <Movies movies={trending}/>
            })}
          </div> 
          : null
        }
      </div>
    )
  }
}

export default TrendingMovies;