import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
// import classes from './addCampsites.css';
import axios from "axios";


class CreateCampsites extends Component {
    constructor() {
        super();

        this.state = {
            location: '',
            overview: '',
			details: '',
			images: null,
            rv_sites: null,
            fire_rings: null,
			pets_allowed: null,
			drinking_water: null,
			toilets: null,

        }
    }
    updateCampsites = (e) => {

        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    }

    fileSelectedHandler = (event) => {
        this.setState({ images: event.target.files[0] })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.images, this.state.images.name);
        axios.post('http://127.0.0.1:8000/api/campsites/', fd)
            .then(res => {
                console.log(res);
            });
    }

    render() {
        return (

            <div className='addCampsitesForm'>
                <div className="add-campsites">
                    <form onSubmit={this.props.addCampsites.bind(this, this.state)}>
                        <div className="campsite-input">
                            Location: <input type="text" name="location" onChange={this.updateCampsites} placeholder='location' /><br />
                        </div>
                        <div className="campsite-input">
                            Overview: <input type="text" name="overview" onChange={this.updateCampsites} placeholder='overview' /><br />
                        </div>
                        <div className="campsite-input">
                            Details: <input type="text" name="details" onChange={this.updateCampsites} placeholder='details' /><br />
                        </div>
                        <div className="campsite-input">
                            RV Sites: <input type="checkbox" name="rv_sites" onChange={this.updateCampsites} placeholder='rv_sites' /><br />
                        </div>
                        <div className="campsite-input">
                        	Fire Rings: <input type="checkbox" name="fire_rings" onChange={this.updateCampsites} placeholder='fire_rings' /><br /><br />
                        </div>
						<div className="campsite-input">
                        	Pets Allowed: <input type="checkbox" name="pets_allowed" onChange={this.updateCampsites} placeholder='pets_allowed' /><br /><br />
                        </div>
						<div className="campsite-input">
                        	Drinking Water: <input type="checkbox" name="drinking_water" onChange={this.updateCampsites} placeholder='drinking_water' /><br /><br />
                        </div>
						<div className="campsite-input">
                        	Toilets: <input type="checkbox" name="toilets" onChange={this.updateCampsites} placeholder='toilets' /><br /><br />
                        </div>
                        <div>
                            <input type="file" onChange={this.fileSelectedHandler} /><br />
                            <Button onClick={this.fileUploadHandler}>Upload</Button>
                        </div>
                        <Button type='Submit' onClick={this.props.toggle}>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateCampsites;
