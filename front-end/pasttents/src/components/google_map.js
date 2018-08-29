import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 39.7392,
            lng: -104.9903
        },
        zoom: 8
    };

    render() {
        return (
            <div style={{ height: '75vh', width: '75%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD2QCXXCQ-c2-vxsYBA2zXo1vI0Sgh12QE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;


