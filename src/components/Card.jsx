import React from "react";

function Card(props) {
    return (
        <div className="category">
            <div className="categoryimg">
                <img className="categoryimg"
                    src={props.imgsrc}
                    alt={props.imgalt}
                />
            </div>
            <div className="categorytext">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <button className="button">Read More</button>
            </div>
        </div>
    );
}

export default Card;