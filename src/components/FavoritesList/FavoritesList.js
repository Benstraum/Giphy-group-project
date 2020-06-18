import React, { Component } from 'react'; 
import FavoriteItem from '../FavoriteItem/FavoriteItem'; 
import {connect} from 'react-redux'; 


export class FavoritesList extends Component {
    componentDidMount(){
        this.props.dispatch({type: })
    }
    
    render() {
        return (
            <div>
                <ul>
                {this.props.reduxState.giphyState.map(gif =>{
                    return(
                        <FavoriteItem key={gif.id} gif={gif}/>
                    );
                })}
                </ul> 
                
            </div>
        );//end return
    }//end render
}//end class

const mapReduxStateToProps = (reduxState) => ({reduxState}); 

export default connect(mapReduxStateToProps)(FavoritesList);