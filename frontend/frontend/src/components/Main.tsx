import React from 'react';

const Main: React.FC = () => {
  return (
    <main>
      <section className="about">
        <div className="container about-content">
          <h1 className="about-title">
            Znajdź to, co potrzebujesz, sprzedaj to czego nie potrzebujesz
          </h1>
          <p className="about-description">
            Przeglądaj tysiące ogłoszeń w kategoriach: praca, sprzedaż i usługi.
          </p>
          <div className="about-buttons">
            <a href="/listings/create" className="button-add-listing">Dodaj ogłoszenie</a>
            <a href="/listings" className="button-search-listings">Przeglądaj ogłoszenia</a>
          </div>
        </div>
      </section>

      <section className="categories">
        <h1 className="categories-title">Kategorie</h1>
        <p className="categories-description">
          Przeglądaj ogłoszenia według kategorii, aby znaleźć dokładnie to czego szukasz.
        </p>
        <div className="categories">
          <CategoryCard
            icon="💼"
            title="Praca"
            description="Znajdź pracę lub zatrudnij talenty"
            link="/listings/category/work"
          />
          <CategoryCard
            icon="🛒"
            title="Sprzedaż"
            description="Kupuj i sprzedawaj przedmioty"
            link="/listings/category/sales"
          />
          <CategoryCard
            icon="🤝"
            title="Pomoc"
            description="Oferuj lub poszukuj pomocy"
            link="/listings/category/help"
          />
        </div>
      </section>

      <section className="section featured-section">
        <div className="container section-content">
          <h2 className="section-title">Wyróżnione ogłoszenia</h2>
          <p className="section-description">
            Sprawdź nasze najpopularniejsze ogłoszenia ze wszystkich kategorii.
          </p>
          <div className="tab-list">
            <div className="tab active">Wszystkie</div>
            <div className="tab">Praca</div>
            <div className="tab">Sprzedaż</div>
            <div className="tab">Pomoc</div>
          </div>
        </div>
      </section>
    </main>
  );
};

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, link }) => (
  <div className="category-card">
    <div className="category-icon">{icon}</div>
    <h3 className="category-title">{title}</h3>
    <p className="category-description">{description}</p>
    <a href={link} className="button button-outline">Przeglądaj {title}</a>
  </div>
);

export default Main;
