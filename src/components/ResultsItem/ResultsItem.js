import React, { Component } from 'react';
import { connect } from '../../../server/modules/pool';

class ResultsItem extends Component{
    state = {
        url:'',
        category:''
    }//end 

    addToFavorite = () => {
        console.log('this will add to favorite DB')
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: this.state });
    }

    render(){
        return(
            <div>
                {/* <img src{this.props.gif} /> */}
                <button onClick={this.addToFavorite}>Add to Favorites</button>
            </div>
            
        );//end return
    }//end render
}//end class 

export default connect()(ResultsItem);