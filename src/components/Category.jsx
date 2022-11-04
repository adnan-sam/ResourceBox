import React from "react";
import developmentdata from "../data/category1";
import Card from "./Card";

function createCard(developmentdata) {
    return (
        <Card
            src={developmentdata.imglink}
            alt={developmentdata.imgalt}
            title={developmentdata.title}
            description={developmentdata.description}
        />
    );
}

function Category() {
    return (
        <div>
        <h2>Development Data</h2>
            <div className="media-scroller">
                {developmentdata.map(createCard())}
            </div>
        </div>
    );
}

export default Category;