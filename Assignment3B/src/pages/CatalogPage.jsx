import React, { useState } from "react";
import AlbumArt from "../components/AlbumCards";

function CatalogPage({ albums, onAddToCart}){
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
            <div className="filter-bar">
                {genres.map((cat) => {
                    <button key={cat} className={'filter-pill $selectedGenre === cat ? "active" : ""}'} onClick={() => setSelectedGenre(cat)}>
                        {cat}
                    </button>;
                })}
            </div>

            <div className="album-grid">
                {filteredAlbums.map((album) =>( <AlbumCards key={album.id} product={album} onAddToCart={onAddToCart}/>
            ))}
            </div>
        </div>
    );
}

export default CatalogPage;