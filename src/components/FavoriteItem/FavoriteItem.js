import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 


export class FavoriteItem extends Component {
    removeFromFavorites = () => {
        console.log('this will be an PUT request')
        this.props.dispatch({type: 'REMOVE_FAVORITE', payload: 'the id of THIS giphy' })
    }//end remove

    deleteGiphy = () => {
        console.log('this will be a DELETE request')
        this.props.dispatch({type: 'DELETE_GIPHY', payload: 'the id of THIS giphy' })
    }//end delete

    render() {
        return (
            <div>
                    <h1>{this.props.gif.id}</h1>    
                    <button onClick={this.removeFromFavorites}>Remove from Favorites</button> 
                    <button onClick={this.deleteGiphy}>Delete</button>
            </div>
        );//end return
    }//end render
}//end class

const mapReduxStateToProps = (reduxState) => ({reduxState}); 

export default connect(mapReduxStateToProps)(FavoriteItem);