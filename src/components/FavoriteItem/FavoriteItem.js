import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  NativeSelect,
  Paper,
  Grid,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import Swal from 'sweetalert2';
import "../FavoriteItem/FavoriteItem.css";
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
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'That gif was deleted.',
            'success',
            this.props.dispatch({
                type: "DELETE_GIPHY",
                payload: id,
              }),
              this.props.dispatch({ type: "GET_ALL_FAVORITES" }),
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your gif is safe :)',
            'error'
          )
        }
      })
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
      <Paper elevation={5}>
        <div>
          <div>
            <section className="favouriteGif">
              <img alt={this.props.gif.id} src={this.props.gif.url} />
            </section>
            <br />
            <section className="categoryBox">
              <FormControl type="variant-outlined">
                <Select
                  style={{height: 50, width: 150}}
                  className="dropdown"
                  value={this.state.category}
                  onChange={(event) => this.handleChange(event)}
                >
                  <MenuItem value="">category</MenuItem>
                  <MenuItem value="1">funny</MenuItem>
                  <MenuItem value="2">cohort</MenuItem>
                  <MenuItem value="3">cartoon</MenuItem>
                  <MenuItem value="4">nsfw</MenuItem>
                  <MenuItem value="5">meme</MenuItem>
                </Select>
              </FormControl>
            </section>
            <section className="buttons">
              <Button
                className="blue"
                color="primary"
                variant="contained"
                onClick={() => this.updateFavorite(this.props.gif.id)}
              >
                Update Category
              </Button>
              <Button
                className="red"
                color="secondary"
                variant="contained"
                onClick={() => this.deleteGiphy(this.props.gif.id)}
              >
                Delete Favorite
              </Button>
            </section>
          </div>
        </div>
      </Paper>
    ); //end return
  } //end render
} //end class

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(FavoriteItem);
