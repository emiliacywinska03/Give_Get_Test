import React, { useState } from 'react';

const CreateListing: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Tu dodamy wysyłkę do backendu w przyszłości
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
    <main className="container" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem' }}>Dodaj ogłoszenie</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
        <button type="submit" className="button-add-listing">Dodaj ogłoszenie</button>
      </form>
    </main>
  );
};

export default CreateListing;
