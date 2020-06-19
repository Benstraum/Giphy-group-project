import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardActions, CardActionArea, CardContent, Grid, FormControl, MenuItem, Select } from '@material-ui/core/';


class ResultsItem extends Component {
    state = {
        category: ''
    }//end 

    addToFavorite = (url) => {
        console.log('this will add to favorite DB')
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: { url: url, category: this.state.category } });
    }

    handleChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    render() {
        let gifPic = this.props.gif.images.original.url
        let gifImage = (<img alt={this.props.gif.title} src={gifPic} />)
        return (
            <div>
                <div className="gifCards">
                    <Card variant="outlined">
                        <div>
                            {gifImage}
                        </div>
                        <FormControl variant="outlined" >
                            <Select style={{ height: 40, width: 150, border: '2px solid blue'}} value={this.state.category} onChange={(event) => this.handleChange(event)}>
                                <MenuItem value=""><em>Select Category</em></MenuItem>
                                <MenuItem value="1">Funny</MenuItem>
                                <MenuItem value="2">Cohort</MenuItem>
                                <MenuItem value="3">Cartoon</MenuItem>
                                <MenuItem value="4">NSFW</MenuItem>
                                <MenuItem value="5">meme</MenuItem>
                            </Select>
                        <CardActions>
                        <Button variant="contained" color="primary" onClick={() => this.addToFavorite(gifPic)} size="small">Save To Favorites</Button>
                        </CardActions>
                        </FormControl>
                    </Card>
                </div>
            </div>

        );//end return
    }//end render
}//end class 

export default connect()(ResultsItem);