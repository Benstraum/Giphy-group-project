import React, { Component } from "react";
import { connect } from "react-redux";
export class FavoriteItem extends Component {
  removeFromFavorites = (id) => {
    console.log("this will be an PUT request");
    this.props.dispatch({
      type: "REMOVE_FAVORITE",
      payload: id,
    });
  }; //end remove

  deleteGiphy = (id) => {
    console.log("this will be a DELETE request");
    this.props.dispatch({
      type: "DELETE_GIPHY",
      payload: id,
    });
    this.props.dispatch({ type: "GET_ALL_FAVORITES" });
  }; //end delete

  state = {
    category: "",
  }; //end

  updateFavorite = (id) => {
    console.log("this will update favorite in DB");
    this.props.dispatch({
      type: "UPDATE_FAVORITE",
      payload: { category: this.state.category, id: id },
    });
    this.props.dispatch({ type: "GET_ALL_FAVORITES" });
  };

  handleChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <img alt={this.props.gif.id} src={this.props.gif.url} />
          <br />
          <select
            value={this.state.category}
            onChange={(event) => this.handleChange(event)}
          >
            <option value="">category</option>
            <option value="1">funny</option>
            <option value="2">cohort</option>
            <option value="3">cartoon</option>
            <option value="4">nsfw</option>
            <option value="5">meme</option>
          </select>
          <button onClick={() => this.deleteGiphy(this.props.gif.id)}>
            Delete Favorite
          </button>
          <button onClick={() => this.updateFavorite(this.props.gif.id)}>
            Update Category
          </button>
        </div>
      </div>
    ); //end return
  } //end render
} //end class

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(FavoriteItem);
