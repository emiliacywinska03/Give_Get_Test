// src/pages/ListingDetails.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import listings from '../data/listings';
import '../App.css';

const ListingDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const listing = listings.find(listing => listing.id === parseInt(id || '0'));

    if (!listing) {
        return <div>Ogłoszenie nie zostało znalezione</div>;
    }

    return (
        <div className="listing-details-container">
            <img src={listing.image} alt={listing.title} className="listing-image" />
            <h1>{listing.title}</h1>
            <p><strong>Lokalizacja:</strong> {listing.location}</p>
            {listing.salary && <p><strong>Wynagrodzenie:</strong> {listing.salary}</p>}
            {listing.price && <p><strong>Cena:</strong> {listing.price}</p>}
            {listing.condition && <p><strong>Stan:</strong> {listing.condition}</p>}
            {listing.helpType && <p><strong>Typ pomocy:</strong> {listing.helpType}</p>}
            {listing.requirements && <p><strong>Wymagania:</strong> {listing.requirements}</p>}
            {listing.description && <p><strong>Opis:</strong> {listing.description}</p>}
            <button className="back-button" onClick={() => window.history.back()}>Wróć</button>
        </div>
    );
};

export default ListingDetails;
