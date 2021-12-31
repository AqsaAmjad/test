import React, { Component } from "react";
import PropTypes from "prop-types";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
  Polyline,
} from "google-maps-react";
const markersMark = [
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 41.881832, lng: -87.623177 }
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 39.739235, lng: -104.99025 }
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 34.052235, lng: -118.243683 }
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 40.712776, lng: -74.005974 }
  }
];

class test2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapLoaded: false
    };
    this.handleMapIdle = this.handleMapIdle.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
   
  }
  onMarkerClick = (props, marker, e) => {
    this.setState(prevState => ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }));
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // onMarkerMounted = element => {
  //   this.onMarkerClick(element.props, element.marker, element);
  // };

  handleMapIdle = () => {
    this.setState({
      mapLoaded: true
    });
  };

  render() {
    return (
      <div id="googleMap">
        <Map
          onIdle={this.handleMapIdle}
          zoom={6}
          google={this.props.google}
          initialCenter={{
            lat: -6.829,
            lng: 37.6648 
          }}
        >

          <Marker
           label={{
            text: "Hlo world",
            color: "white",
            padding: "12px"
          }}
          title={'aga khan hospitals'}
          position={{lat: -2.5224488, lng: 32.9066927}}
          />
      
         
          <Marker ref={this.onMarkerMounted} onClick={this.onMarkerClick}
          label={{
            text: "H",
            color: "white"
          }}
          title={'aga khan hospitals'}
          position={{lat:-3.3706259201175457, lng:36.690369610531384}}
          /> 
        
          {/* <Marker 
     label={{
      text: "H",
      color: "white"
    }}
    title={'aga khan hospitals'}
    position={{lat: -2.5224488, lng: 32.9066927}} />
          {this.state.mapLoaded && (
   <Marker 
   label={{
    text: "H",
    color: "white"
  }}
  name={'Aga Khan hospital'}
position={{lat:-3.3706259201175457, lng:36.690369610531384}}
   />
)} 
          <Marker
      label={{
        text: "H",
        color: "white"
      }}
      name={'Aga Khan hospital'}
    position={{lat:-3.3706259201175457, lng:36.690369610531384}} />
          <Marker
     label={{
       title : "test",
      text: "H",
      color: "white"
    }}
    title={'aga khan hospitals'}
    position={{lat:-4.8720405681443175, lng:39.62578827284317}} />
     <Marker
      label={{
        text: "H",
        color: "white"
      }}
    title={'aga khan hospitals'}
    position={{lat:-6.042228970755693, lng:38.74688201105314}} />
     <Marker
     label={{
      text: "H",
      color: "white"
    }}
    title={'aga khan hospitals'}
    position={{lat:-6.631863061953028, lng:39.13140350058627}} />
     <Marker
    label={{
      text: "H",
      color: "white"
    }}
    title={'aga khan hospital'}
    name={'aga khan'}
    position={{lat:-6.795527880720598, lng:39.439020692212786}} />
 <Marker
 label={{
  text: "H",
  color: "white"
}}
    title={'aga khan hospitals'}
    position={{lat:-6.740979064013462, lng:39.09844451576915}} />
     <Marker
      label={{
        text: "H",
        color: "white"
      }}
    title={'aga khan hospitals'}
    position={{lat:-6.664600417792295, lng:38.57110075869513}} />
     <Marker
      label={{
        text: "H",
        color: "white"
      }}
    title={'aga khan hospitals'}
    position={{lat:-8.667910852682704, lng:34.07769249529361}} />

      {/* {this.state.mapLoaded && (
         markersMark.map(({ id, name, position }) => (
          <Marker ref={this.onMarkerMounted} onClick={this.onMarkerClick}
          id={id}
          position={position}
          name={name}
          />
          
        ))
       )}
          <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}
         onClose={this.onClose}
          >
            <div>
            <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA-1NLR6JUC3VjgO7J_2wMgsfR8WRafBwg",
})(test2);
