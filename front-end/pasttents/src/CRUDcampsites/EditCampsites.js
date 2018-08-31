import React from 'react';


const EditCampsites = (props) => {

    return (
        <div>
            <h4> Edit Campsite</h4>
            <form onSubmit={props.closeAndEdit}>
                <label>
                    Edit Campsite:
                    <input type="text" name="location" onChange={props.handleFormChange} value={props.campsitesToEdit.make} placeholder="location" />
                    <input type="text" name="overview" onChange={props.handleFormChange} value={props.campsitesToEdit.model} placeholder="overview" />
                    <input type="text" name="details" onChange={props.handleFormChange} value={props.campsitesToEdit.year} placeholder="details"/>
                    <input type="checkbox" name="rv_sites" onChange={props.handleFormChange} value={props.campsitesToEdit.img_url} placeholder="rv_sites" />
                    <input type="checkbox" name="fire_rings" onChange={props.handleFormChange} value={props.campsitesToEdit.description} placeholder="fire_rings" />
					<input type="checkbox" name="pets_allowed" onChange={props.handleFormChange} value={props.campsitesToEdit.description} placeholder="pets_allowed" />
					<input type="checkbox" name="drinking_water" onChange={props.handleFormChange} value={props.campsitesToEdit.description} placeholder="drinking_water" />
					<input type="checkbox" name="toilets" onChange={props.handleFormChange} value={props.campsitesToEdit.description} placeholder="toilets" />
                </label>
                <input type='Submit' value="Edit Campsite" />
            </form>
        </div>

    )
}

export default EditCampsites;