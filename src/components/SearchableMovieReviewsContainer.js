import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = () => {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>')
        .then(response => response.json())
        .then(reviewData => this.setState({ reviews: reviewData.reviews }))
    }

        render() {
            return(
                <div>
                        <form onSubmit={this.handleSubmit}>

                        </form>
                        this.state.reviews
                </div>
            )
        }

    }
