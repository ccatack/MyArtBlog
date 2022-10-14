import React from "react";
import sprites from "../data/sprites.js"

export default function SpritePage() {

    const images = sprites.map(item => {
        return (
            <div key={item.id}>
                <img src={item.image}></img>
                <h2>{item.name}</h2>
            </div>
        )
    })

    return (
        <section className="sprite-section">
            {images}
        </section>
    )
}