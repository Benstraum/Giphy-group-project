import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsItem extends Component{
    state = {
        category:''
    }//end 

    addToFavorite = (url) => {
        console.log('this will add to favorite DB')
        this.props.dispatch({ type: 'ADD_FAVORITE', payload:{ url:url, category:this.state}});

        this.setState({
            category:''
        })
    }

    handleChange(event){
        this.setState({
            category:event.target.value
        })
    }

    render(){
        let gifPic =this.props.gif.images.original.url
        return(
            <div>
               <img alt={this.props.gif.title} src= {gifPic}/>
                   <br/>
                   <select onChange={(event)=>this.handleChange}>
                        <option value=""><span aria-label="red heart" role="img">❤️</span></option>
                       <option value="1">funny</option>
                       <option value="2">cohort</option>
                       <option value="3">cartoon</option>
                       <option value="4">nsfw</option>
                       <option value="5">meme</option>
                   </select>
                   <button onClick = {()=>this.addToFavorite(gifPic)}>Save To Favorites</button>
            </div>
            
        );//end return
    }//end render
}//end class 

export default connect()(ResultsItem);