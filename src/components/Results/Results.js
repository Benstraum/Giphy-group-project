
import React, { Component } from 'react';
import ResultsItem from '../ResultsItem/ResultsItem';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

export class Results extends Component {
    fireSwal=()=>{
        Swal.fire('Oops...', 'Something went wrong!', 'error')
    }
    render() {
        console.log(this.props.reduxState)
        return (
            <div> 
                <ul>
                    {this.props.reduxState.giphySearch.map(gif => {
                        return (
                            <ResultsItem key={gif.id} gif={gif} />
                        );
                    })}
                </ul>  
            </div>
        );//end return
    }//end return
}//end class

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default connect(mapReduxStateToProps)(Results);