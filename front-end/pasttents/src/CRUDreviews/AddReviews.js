import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import classes from './addReviews.css';



class CRUDReviews extends Component {
  constructor() {
    super();

    this.state = {
      body: '',
      rating: '',
    }
  }

  updateReviews = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.addReviews.bind(this, this.state)}>
          <form>
            <textarea className="review-box" type="textarea" name="reviews" onChange={this.updateReviews} placeholder='add review/review' /><br /><br />
          </form>
          <div className="check-box">
            <input type="checkbox" name="campsites" value={this.props.campsitesID} onChange={this.updateReviews} /> &nbsp; Check box to submit a review.<br />
          </div>
          <Button type='Submit'>Review</Button>
          <Button type='reset'>Reset</Button>
        </form>
      </div>

    )
  }
}

 
export default CRUDReviews;