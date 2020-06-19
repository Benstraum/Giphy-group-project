import React, { Component } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { connect } from "react-redux";
import '../FavoriteItem/FavoriteItem.css';

export class FavoritesList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ALL_FAVORITES" });
    // console.log(this.props.reduxState.giphyFavorites);
  }
// comment to save???

  render() {
    return (
      <div>
        <ul>
          {this.props.reduxState.giphyFavorites.map((gif, i) => {
            return <FavoriteItem key={i} gif={gif} />;
          })}
        </ul>
      </div>
    ); //end return
  } //end render
} //end class

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(FavoritesList);
