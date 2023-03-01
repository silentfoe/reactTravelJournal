import React from 'react'

export default function TravelCard(props) {
    
    return (
        
         
            <div className="contents-container">
                <img className="location-img" src={props.items.imageUrl} />
                <div className="text-container">
                    <div className="location">
                        <img className="drop-pin" src="../images/dropPin.png"/>
                        <h5 className="location-name">{props.items.location}</h5>
                        <a className="location-url" href={props.items.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <div className="main-text">
                        <h1 className="location-title">{props.items.title}</h1>
                        <h6 className="dates">{props.items.startDate}-{props.items.endDate}</h6>
                        <p className="description-text">{props.items.description}</p>
                    </div>
                </div>
            </div>
        
    )
}