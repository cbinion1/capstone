import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Reviews from '../reviewsContainer/reviewsContainer';
import CRUDreviews from '../CRUDreviews/AddReviews';


const Campsites = (props) => {
  const campsitesList = props.campsites.map((campsite, i) => {
    console.log(campsite, ' campsites id')
    console.log(props.reviews[0], 'this props reviews in campsites');


    return (
      <Col md='12'>


        <div key={campsite.id} className='specificCampsites'>
          <div className="campsites-info-full">
            <div className="campsites-all-details">
              <span className="campsites-location">- {campsite.location} - </span><br />
              <span className="campsites-overview">{campsite.overview}</span><br />
              <span className="campsites-details">{campsite.details}</span><br />
              <span className="campsites-rv_sites">{campsite.rv_sites}</span><br />
			  <span className="campsites-fire_rings">{campsite.fire_rings}</span><br />
			  <span className="campsites-pets_allowed">{campsite.pets_allowed}</span><br />
			  <span className="campsites-drinking_water">{campsite.drinking_water}</span><br />
			  <span className="campsites-toilets">{campsite.toilets}</span><br />
            </div>
            <div className="campsites-image-div">
              <img className="campsites-image" src={campsite.images} />
            </div>
          </div>
          <br /><br /> <br />
          <h4 className="user-reviews">User reviews on {campsite.location}:</h4><br />
          <reviewss campsitesID={campsite.id} reviews={props.reviews} deleteReviews={props.deleteReviews} showReviewsModal={props.showReviewsModal} />
          <div className='createReviewsComp'>
            <CRUDreviews campsitesID={'http://127.0.0.1:8000/api/campsites/' + campsite.id} addReviews={props.addReviews} />
          </div><br />
          <hr />
          <h4 className="update-delete">Update/Delete</h4>
          <Button color='danger' onClick={props.deleteCampsites.bind(null, campsite.id)}>Delete</Button>
          <Button color='danger' onClick={props.showModal.bind(null, campsite.id)}>Edit</Button>
        </div>



      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {campsitesList}
      </Row>
    </Container>
  )

};

export default Campsites;