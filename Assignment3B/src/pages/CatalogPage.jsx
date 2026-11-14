import React, { useState } from "react";
import AlbumArt from "../assets/albums";

function CatalogPage({ products, onAddToCart}){
    const genres =["All","Jazz","Electronic","Rock","Classical"];
    const [selectedGenre, setSelectedGenre] = useState("All");

    const validAlbums = albums || [];

    const filteredAlbums = selectedAlbum === "All" ? validAlbums : validAlbums.filter((p) => p.genre === selectedGenre);


    return(
        <div className="catalog-container">
            <header className="catalog-hero">
                <h1>All Albums All The Time!</h1>
                <p>
                    Shop from our wide and fine selection of Albums
                </p>
            </header>
        </div>
    )
}