import React from 'react';

class TrendingMovies extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      foundMovies : false,
      movies : [],
    })

    this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies () {
    console.log(this.props.trending)
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
              return <li> 
                {trending.original_title}
              </li>
            })}
          </div> 
          : null
        }
      </div>
    )
  }
}

export default TrendingMovies;