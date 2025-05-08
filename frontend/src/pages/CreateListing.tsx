import React, { useState } from 'react';
import '../App.css';

const CreateListing: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const listing = {
      title,
      description,
      category,
      location,
      price,
    };

    console.log('Ogłoszenie do wysłania:', listing);
    alert('Ogłoszenie zostało zapisane (na razie tylko w konsoli).');
  };

  return (
    <main className="create-listing-container">
      <h1>Dodaj ogłoszenie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Opis"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Wybierz kategorię</option>
          <option value="work">Praca</option>
          <option value="sales">Sprzedaż</option>
          <option value="help">Pomoc</option>
        </select>
        <input
          type="text"
          placeholder="Lokalizacja"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cena (opcjonalna)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Dodaj ogłoszenie</button>
      </form>
    </main>
  );
};

export default CreateListing;
