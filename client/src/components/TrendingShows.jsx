import React from 'react';

class TrendingShows extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      receivedShows : false,
      trendingShows : [],
      description : false
    })
    this.getTrendingShows = this.getTrendingShows.bind(this);
    this.showDescription = this.showDescription.bind(this);
  }

  componentDidMount() {
    this.getTrendingShows()
  }
  
  getTrendingShows() {
    this.setState({
      receivedShows : true,
      trendingShows : this.props.showsTrending
    })
  }

  showDescription() {
    this.setState({
      description : !this.state.description
    })
  }


  render() {
    return (
        <div>
          {this.state.receivedShows ? 
            <div>
              <li onClick={this.showDescription}>{this.state.trendingShows.original_name}</li>
              {this.state.description ? 
                <div> 
                  {console.log(this.state.trendingShows)}
                  {this.state.trendingShows.overview}
                </div> : null
               }
            </div> : null
          }
        </div>
      
    )
  }
}

export default TrendingShows;