import React, { useState } from 'react';
import '../App.css';

const CreateListing: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [jobType, setJobType] = useState('');
  const [salary, setSalary] = useState('');
  const [requirements, setRequirements] = useState('');
  const [helpType, setHelpType] = useState('');
  const [isFree, setIsFree] = useState(false);
  const [negotiable, setNegotiable] = useState(false);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isFree) {
      setPrice(e.target.value);
    }
  };

  const handleFreeToggle = () => {
    setIsFree(!isFree);
    if (!isFree) {
      setPrice('0');
    } else {
      setPrice('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const listing = {
      title,
      description,
      category,
      location,
      price: isFree ? '0' : negotiable ? price + ' (do negocjacji)' : price,
      condition,
      jobType,
      salary,
      requirements,
      helpType,
      isFree,
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
          placeholder="Tytuł (max 100 znaków)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
          required
        />
        <textarea
          placeholder="Opis (max 1000 znaków)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          maxLength={1000}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Wybierz typ ogłoszenia</option>
          <option value="sales">Sprzedaż</option>
          <option value="help">Pomoc</option>
          <option value="work">Praca</option>
        </select>
        <input
          type="text"
          placeholder="Lokalizacja (miasto, dzielnica)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        {category === 'sales' && (
          <>
            <input
              type="text"
              placeholder="Stan przedmiotu (np. nowy, używany)"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Cena"
              value={price}
              onChange={handlePriceChange}
              disabled={isFree}
              required={!isFree}
            />
            <label>
              <input type="checkbox" checked={isFree} onChange={handleFreeToggle} /> Za darmo
            </label>
            <label>
              <input type="checkbox" checked={negotiable} onChange={() => setNegotiable(!negotiable)} disabled={isFree} /> Do negocjacji
            </label>
          </>
        )}
        {category === 'help' && (
          <input
            type="text"
            placeholder="Typ pomocy (np. techniczna, sąsiedzka)"
            value={helpType}
            onChange={(e) => setHelpType(e.target.value)}
            required
          />
        )}
        {category === 'work' && (
          <>
            <input
              type="text"
              placeholder="Kategoria stanowiska"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Wymagania"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Wynagrodzenie (np. 3000-5000 PLN, do negocjacji)"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </>
        )}
        <button type="submit">Dodaj ogłoszenie</button>
      </form>
    </main>
  );
};

export default CreateListing;