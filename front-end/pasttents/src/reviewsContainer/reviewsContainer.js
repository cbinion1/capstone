import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
// import classes from './Comments.css';

const Reviews = (props) => {

  let apiCampsitesID = 'http://127.0.0.1:8000/api/campsites/' + props.campsitesID;

  const reviewsList = props.reviews.map((review, i) => {
    console.log(review, ' reviews id')
    if (apiCampsitesID === review.campsites) {
      return (

        <Col md='12'>
          <div key={review.id} className='specificReviews'>
            <span>{review.review}</span><br />
            <Button color='danger' onClick={props.deleteReviews.bind(null, review.id)}>Delete</Button>
            <Button color='danger' onClick={props.showReviewsModal.bind(null, review.id)}>Edit</Button>
          </div>
        </Col>


      )
    }
  })


  return (
    <Container>
      <Row>
        {reviewsList}
      </Row>
    </Container>
  )


};


export default Reviews;