import React from 'react';
import { Button } from 'reactstrap';


const EditReviews = (props) => {

    return (
        <div>
            <h4> Edit Review</h4>
            <form onSubmit={props.closeAndEditReviews}>
                <label>
                    Edit Review:
                    <input type="text" name="reviews" onChange={props.handleReviewsFormChange} value={props.reviewsToEdit.review} />

                </label>
                <Button type='Submit'>Edit Review</Button>
            </form>
        </div>

    )
}

export default EditReviews;