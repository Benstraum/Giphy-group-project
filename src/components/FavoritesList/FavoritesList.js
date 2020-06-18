import React, { Component } from 'react'; 
import FavoriteItem from '../FavoriteItem/FavoriteItem'; 
import {connect} from 'react-redux'; 


export class FavoritesList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <FavoriteItem />
                    {/* <p>This will be a map of the favorites reducer!</p> */}
                </ul> 
                
            </div>
        );//end return
    }//end render
}//end class

const mapReduxStateToProps = (reduxState) => ({reduxState}); 

export default connect(mapReduxStateToProps)(FavoritesList);