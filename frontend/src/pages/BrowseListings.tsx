// src/pages/BrowseListings.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import listings from '../data/listings';
import '../App.css';

const BrowseListings: React.FC = () => {
    const [category, setCategory] = useState('all');
    const [subcategory, setSubcategory] = useState('all');

    const subcategories: { [key: string]: string[] } = {
        work: ['all', 'IT', 'projektowanie', 'gastronomia', 'budownictwo', 'nauczanie', 'marketing', 'administracja', 'produkcja', 'transport', 'sprzedaż'],
        sales: ['all', 'elektronika', 'AGD', 'meble', 'książki', 'odzież', 'sport i rekreacja', 'motoryzacja', 'zabawki', 'narzędzia', 'muzyka i instrumenty'],
        help: ['all', 'techniczna', 'sąsiedzka', 'fizyczna', 'nauka', 'opieka nad dziećmi', 'przeprowadzki', 'sprzątanie', 'ogród', 'złota rączka', 'transport'],
    };

    const filteredListings = listings.filter(listing => {
        return (category === 'all' || listing.type === category) &&
               (subcategory === 'all' || listing.subcategory === subcategory);
    });

    return (
        <div className="browse-listings-container">
            {/* Główne przyciski kategorii */}
            <div className="filter-bar">
                <button onClick={() => { setCategory('all'); setSubcategory('all'); }} className={category === 'all' ? 'active' : ''}>Wszystkie</button>
                <button onClick={() => { setCategory('work'); setSubcategory('all'); }} className={category === 'work' ? 'active' : ''}>Praca</button>
                <button onClick={() => { setCategory('sales'); setSubcategory('all'); }} className={category === 'sales' ? 'active' : ''}>Sprzedaż</button>
                <button onClick={() => { setCategory('help'); setSubcategory('all'); }} className={category === 'help' ? 'active' : ''}>Pomoc</button>
            </div>

            {/* Podkategorie */}
            {category !== 'all' && (
                <div className="filter-bar subcategory-bar">
                    {subcategories[category].map(subcat => (
                        <button key={subcat} onClick={() => setSubcategory(subcat)} className={subcategory === subcat ? 'active' : ''}>
                            {subcat === 'all' ? 'Wszystkie' : subcat}
                        </button>
                    ))}
                </div>
            )}

            {/* Lista ogłoszeń */}
            <div className="listings">
                {filteredListings.map(listing => (
                    <Link to={`/listings/${listing.id}`} key={listing.id} className="listing-card">
                        <img src={listing.image} alt={listing.title} className="listing-image" />
                        <h3>{listing.title}</h3>
                        <p><strong>Lokalizacja:</strong> {listing.location}</p>
                        {listing.salary && <p><strong>Wynagrodzenie:</strong> {listing.salary}</p>}
                        {listing.price && <p><strong>Cena:</strong> {listing.price}</p>}
                        {listing.condition && <p><strong>Stan:</strong> {listing.condition}</p>}
                        {listing.helpType && <p><strong>Typ pomocy:</strong> {listing.helpType}</p>}
                        {listing.requirements && <p><strong>Wymagania:</strong> {listing.requirements}</p>}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BrowseListings;
