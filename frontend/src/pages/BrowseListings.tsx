import React, { useState } from 'react';
import '../App.css';

const BrowseListings: React.FC = () => {
  const [category, setCategory] = useState('all');
  const [subcategory, setSubcategory] = useState('all');
  

  const listings = [
    // Praca - IT
    { id: 1, type: 'work', subcategory: 'IT', title: 'Software Developer', location: 'Warszawa', salary: '5000-10000 PLN', requirements: 'React, Node.js, MongoDB', image: 'https://example.com/software-developer.jpg' },
    { id: 2, type: 'work', subcategory: 'IT', title: 'Administrator IT', location: 'Kraków', salary: '6000-9000 PLN', requirements: 'Linux, Windows Server, SQL', image: 'https://example.com/admin.jpg' },
    { id: 3, type: 'work', subcategory: 'IT', title: 'Tester Oprogramowania', location: 'Gdańsk', salary: '5000-7000 PLN', requirements: 'Testowanie manualne, Selenium', image: 'https://example.com/tester.jpg' },
    { id: 4, type: 'work', subcategory: 'IT', title: 'Frontend Developer', location: 'Wrocław', salary: '8000-12000 PLN', requirements: 'HTML, CSS, JavaScript, React', image: 'https://example.com/frontend.jpg' },

    // Praca - Projektowanie
    { id: 5, type: 'work', subcategory: 'projektowanie', title: 'Graphic Designer', location: 'Wrocław', salary: '4000-7000 PLN', requirements: 'Photoshop, Illustrator', image: 'https://example.com/graphic-designer.jpg' },
    { id: 6, type: 'work', subcategory: 'projektowanie', title: 'Projektant Wnętrz', location: 'Warszawa', salary: '5000-8000 PLN', requirements: 'AutoCAD, SketchUp', image: 'https://example.com/interior.jpg' },
    { id: 7, type: 'work', subcategory: 'projektowanie', title: 'Projektant UX/UI', location: 'Kraków', salary: '6000-10000 PLN', requirements: 'Figma, Adobe XD', image: 'https://example.com/ux-ui.jpg' },
    { id: 8, type: 'work', subcategory: 'projektowanie', title: 'Projektant Produktu', location: 'Łódź', salary: '7000-11000 PLN', requirements: 'SolidWorks, AutoCAD', image: 'https://example.com/product-designer.jpg' },

    // Praca - Gastronomia
    { id: 9, type: 'work', subcategory: 'gastronomia', title: 'Kucharz', location: 'Katowice', salary: '3000-5000 PLN', requirements: 'Doświadczenie w kuchni', image: 'https://example.com/chef.jpg' },
    { id: 10, type: 'work', subcategory: 'gastronomia', title: 'Kelner', location: 'Gdańsk', salary: '3000-4500 PLN', requirements: 'Obsługa klienta, znajomość win', image: 'https://example.com/waiter.jpg' },
    { id: 11, type: 'work', subcategory: 'gastronomia', title: 'Barman', location: 'Warszawa', salary: '3500-5000 PLN', requirements: 'Przygotowanie koktajli', image: 'https://example.com/barman.jpg' },
    { id: 12, type: 'work', subcategory: 'gastronomia', title: 'Cukiernik', location: 'Poznań', salary: '4000-6000 PLN', requirements: 'Wypieki, dekoracja ciast', image: 'https://example.com/cukiernik.jpg' },

    // Praca - Budownictwo
    { id: 13, type: 'work', subcategory: 'budownictwo', title: 'Operator Koparki', location: 'Poznań', salary: '6000-8000 PLN', requirements: 'Uprawnienia do obsługi koparki', image: 'https://example.com/koparka.jpg' },
    { id: 14, type: 'work', subcategory: 'budownictwo', title: 'Murator', location: 'Warszawa', salary: '5000-7000 PLN', requirements: 'Doświadczenie w murowaniu', image: 'https://example.com/murator.jpg' },
    { id: 15, type: 'work', subcategory: 'budownictwo', title: 'Inżynier Budownictwa', location: 'Gdańsk', salary: '8000-12000 PLN', requirements: 'Wykształcenie inżynierskie', image: 'https://example.com/inzynier.jpg' },
    { id: 16, type: 'work', subcategory: 'budownictwo', title: 'Elektryk Budowlany', location: 'Wrocław', salary: '6000-9000 PLN', requirements: 'Uprawnienia SEP', image: 'https://example.com/elektryk.jpg' },

    // Praca - Nauczanie
    { id: 17, type: 'work', subcategory: 'nauczanie', title: 'Nauczyciel Matematyki', location: 'Warszawa', salary: '4000-6000 PLN', requirements: 'Doświadczenie w nauczaniu', image: 'https://example.com/nauczyciel.jpg' },
    { id: 18, type: 'work', subcategory: 'nauczanie', title: 'Lektor Angielskiego', location: 'Kraków', salary: '5000-8000 PLN', requirements: 'C1, doświadczenie w nauczaniu', image: 'https://example.com/lektor.jpg' },
    { id: 19, type: 'work', subcategory: 'nauczanie', title: 'Trener Personalny', location: 'Gdańsk', salary: '5000-10000 PLN', requirements: 'Certyfikat trenera', image: 'https://example.com/trener.jpg' },
    { id: 20, type: 'work', subcategory: 'nauczanie', title: 'Nauczyciel WF', location: 'Poznań', salary: '4000-6000 PLN', requirements: 'Uprawnienia pedagogiczne', image: 'https://example.com/wf.jpg' },

    // Praca - Marketing
    { id: 21, type: 'work', subcategory: 'marketing', title: 'Specjalista ds. Marketingu', location: 'Wrocław', salary: '4500-7000 PLN', requirements: 'SEO, Google Ads', image: 'https://example.com/marketing1.jpg' },
    { id: 22, type: 'work', subcategory: 'marketing', title: 'Social Media Manager', location: 'Warszawa', salary: '5000-8000 PLN', requirements: 'Facebook, Instagram, Twitter', image: 'https://example.com/marketing2.jpg' },
    { id: 23, type: 'work', subcategory: 'marketing', title: 'Content Creator', location: 'Gdańsk', salary: '4000-6000 PLN', requirements: 'Copywriting, tworzenie treści', image: 'https://example.com/marketing3.jpg' },
    { id: 24, type: 'work', subcategory: 'marketing', title: 'Brand Manager', location: 'Poznań', salary: '7000-10000 PLN', requirements: 'Budowanie marki, strategia marketingowa', image: 'https://example.com/marketing4.jpg' },

    // Praca - Administracja
    { id: 25, type: 'work', subcategory: 'administracja', title: 'Asystent Biurowy', location: 'Łódź', salary: '3000-5000 PLN', requirements: 'Obsługa klienta, organizacja dokumentów', image: 'https://example.com/biuro1.jpg' },
    { id: 26, type: 'work', subcategory: 'administracja', title: 'Sekretarka', location: 'Warszawa', salary: '3500-5500 PLN', requirements: 'Organizacja biura, kontakt z klientem', image: 'https://example.com/biuro2.jpg' },
    { id: 27, type: 'work', subcategory: 'administracja', title: 'Office Manager', location: 'Kraków', salary: '5000-8000 PLN', requirements: 'Zarządzanie biurem', image: 'https://example.com/biuro3.jpg' },
    { id: 28, type: 'work', subcategory: 'administracja', title: 'Recepcjonistka', location: 'Wrocław', salary: '3000-4500 PLN', requirements: 'Obsługa klienta, organizacja recepcji', image: 'https://example.com/biuro4.jpg' },

    // Praca - Produkcja
    { id: 29, type: 'work', subcategory: 'produkcja', title: 'Pracownik Produkcji', location: 'Katowice', salary: '3500-5000 PLN', requirements: 'Praca na linii produkcyjnej', image: 'https://example.com/produkcja1.jpg' },
    { id: 30, type: 'work', subcategory: 'produkcja', title: 'Operator Maszyn', location: 'Łódź', salary: '4000-6000 PLN', requirements: 'Obsługa maszyn produkcyjnych', image: 'https://example.com/produkcja2.jpg' },
    { id: 31, type: 'work', subcategory: 'produkcja', title: 'Magazynier', location: 'Poznań', salary: '3500-5000 PLN', requirements: 'Obsługa wózka widłowego', image: 'https://example.com/produkcja3.jpg' },
    { id: 32, type: 'work', subcategory: 'produkcja', title: 'Pakowacz', location: 'Gdańsk', salary: '3000-4500 PLN', requirements: 'Pakowanie produktów', image: 'https://example.com/produkcja4.jpg' },

    // Praca - Transport
    { id: 33, type: 'work', subcategory: 'transport', title: 'Kierowca Ciężarówki', location: 'Szczecin', salary: '6000-8000 PLN', requirements: 'Prawo jazdy kategorii C+E', image: 'https://example.com/ciezarowka.jpg' },
    { id: 34, type: 'work', subcategory: 'transport', title: 'Kurier', location: 'Warszawa', salary: '4000-6000 PLN', requirements: 'Prawo jazdy kategorii B', image: 'https://example.com/kurier.jpg' },
    { id: 35, type: 'work', subcategory: 'transport', title: 'Operator Wózka Widłowego', location: 'Kraków', salary: '3500-5000 PLN', requirements: 'Uprawnienia UDT', image: 'https://example.com/wozek.jpg' },
    { id: 36, type: 'work', subcategory: 'transport', title: 'Logistyk', location: 'Poznań', salary: '5000-7000 PLN', requirements: 'Planowanie tras, zarządzanie magazynem', image: 'https://example.com/logistyk.jpg' },

    // Praca - Sprzedaż
    { id: 37, type: 'work', subcategory: 'sprzedaż', title: 'Handlowiec', location: 'Białystok', salary: '4000-6000 PLN', requirements: 'Doświadczenie w sprzedaży', image: 'https://example.com/handlowiec1.jpg' },
    { id: 38, type: 'work', subcategory: 'sprzedaż', title: 'Specjalista ds. Sprzedaży', location: 'Warszawa', salary: '5000-8000 PLN', requirements: 'Umiejętności negocjacyjne', image: 'https://example.com/handlowiec2.jpg' },
    { id: 39, type: 'work', subcategory: 'sprzedaż', title: 'Przedstawiciel Handlowy', location: 'Gdańsk', salary: '4500-7000 PLN', requirements: 'Prawo jazdy, komunikatywność', image: 'https://example.com/handlowiec3.jpg' },
    { id: 40, type: 'work', subcategory: 'sprzedaż', title: 'Konsultant Sprzedaży', location: 'Kraków', salary: '4000-6000 PLN', requirements: 'Obsługa klienta, sprzedaż produktów', image: 'https://example.com/handlowiec4.jpg' },

    // Sprzedaż - Elektronika
    { id: 41, type: 'sales', subcategory: 'elektronika', title: 'Smartphone Samsung', location: 'Warszawa', price: '2500 PLN', condition: 'Nowy', image: 'https://example.com/samsung.jpg' },
    { id: 42, type: 'sales', subcategory: 'elektronika', title: 'Laptop Lenovo', location: 'Kraków', price: '3000 PLN', condition: 'Używany', image: 'https://example.com/lenovo.jpg' },
    { id: 43, type: 'sales', subcategory: 'elektronika', title: 'Telewizor LG', location: 'Poznań', price: '4000 PLN', condition: 'Nowy', image: 'https://example.com/lg.jpg' },
    { id: 44, type: 'sales', subcategory: 'elektronika', title: 'Kamera GoPro', location: 'Gdańsk', price: '1500 PLN', condition: 'Prawie nowa', image: 'https://example.com/gopro.jpg' },

    // Sprzedaż - AGD
    { id: 45, type: 'sales', subcategory: 'AGD', title: 'Pralka Bosch', location: 'Warszawa', price: '2000 PLN', condition: 'Używana', image: 'https://example.com/pralka.jpg' },
    { id: 46, type: 'sales', subcategory: 'AGD', title: 'Odkurzacz Dyson', location: 'Kraków', price: '1500 PLN', condition: 'Prawie nowy', image: 'https://example.com/odkurzacz.jpg' },
    { id: 47, type: 'sales', subcategory: 'AGD', title: 'Kuchenka mikrofalowa', location: 'Gdańsk', price: '500 PLN', condition: 'Nowa', image: 'https://example.com/mikrofalowka.jpg' },
    { id: 48, type: 'sales', subcategory: 'AGD', title: 'Zmywarka Bosch', location: 'Poznań', price: '2500 PLN', condition: 'Używana', image: 'https://example.com/zmywarka.jpg' },

    // Sprzedaż - Meble
    { id: 49, type: 'sales', subcategory: 'meble', title: 'Stół dębowy', location: 'Warszawa', price: '1500 PLN', condition: 'Nowy', image: 'https://example.com/stol.jpg' },
    { id: 50, type: 'sales', subcategory: 'meble', title: 'Komoda IKEA', location: 'Łódź', price: '800 PLN', condition: 'Prawie nowa', image: 'https://example.com/komoda.jpg' },
    { id: 51, type: 'sales', subcategory: 'meble', title: 'Kanapa narożna', location: 'Kraków', price: '2000 PLN', condition: 'Używana', image: 'https://example.com/kanapa.jpg' },
    { id: 52, type: 'sales', subcategory: 'meble', title: 'Łóżko sypialniane', location: 'Poznań', price: '1200 PLN', condition: 'Nowe', image: 'https://example.com/lozko.jpg' },

    // Sprzedaż - Książki
    { id: 53, type: 'sales', subcategory: 'książki', title: 'Seria Harry Potter', location: 'Warszawa', price: '400 PLN', condition: 'Nowe', image: 'https://example.com/harrypotter.jpg' },
    { id: 54, type: 'sales', subcategory: 'książki', title: 'Trylogia Władca Pierścieni', location: 'Gdańsk', price: '300 PLN', condition: 'Prawie nowe', image: 'https://example.com/wladca.jpg' },
    { id: 55, type: 'sales', subcategory: 'książki', title: 'Książki edukacyjne', location: 'Kraków', price: '200 PLN', condition: 'Używane', image: 'https://example.com/edukacyjne.jpg' },
    { id: 56, type: 'sales', subcategory: 'książki', title: 'Powieści kryminalne', location: 'Poznań', price: '250 PLN', condition: 'Nowe', image: 'https://example.com/kryminalne.jpg' },

    // Sprzedaż - Odzież
    { id: 57, type: 'sales', subcategory: 'odzież', title: 'Kurtka zimowa', location: 'Warszawa', price: '300 PLN', condition: 'Nowa', image: 'https://example.com/kurtka.jpg' },
    { id: 58, type: 'sales', subcategory: 'odzież', title: 'Spodnie jeansowe', location: 'Kraków', price: '150 PLN', condition: 'Używane', image: 'https://example.com/spodnie.jpg' },
    { id: 59, type: 'sales', subcategory: 'odzież', title: 'Buty sportowe', location: 'Gdańsk', price: '200 PLN', condition: 'Prawie nowe', image: 'https://example.com/buty.jpg' },
    { id: 60, type: 'sales', subcategory: 'odzież', title: 'Sukienka wieczorowa', location: 'Poznań', price: '400 PLN', condition: 'Nowa', image: 'https://example.com/sukienka.jpg' },

    // Sprzedaż - Sport i Rekreacja
    { id: 61, type: 'sales', subcategory: 'sport i rekreacja', title: 'Piłka nożna', location: 'Warszawa', price: '100 PLN', condition: 'Nowa', image: 'https://example.com/pilka.jpg' },
    { id: 62, type: 'sales', subcategory: 'sport i rekreacja', title: 'Hantle 10kg', location: 'Kraków', price: '200 PLN', condition: 'Używane', image: 'https://example.com/hantle.jpg' },
    { id: 63, type: 'sales', subcategory: 'sport i rekreacja', title: 'Rower górski', location: 'Gdańsk', price: '1200 PLN', condition: 'Używany', image: 'https://example.com/rower.jpg' },
    { id: 64, type: 'sales', subcategory: 'sport i rekreacja', title: 'Namiot turystyczny', location: 'Poznań', price: '500 PLN', condition: 'Prawie nowy', image: 'https://example.com/namiot.jpg' },

    // Sprzedaż - Motoryzacja
    { id: 65, type: 'sales', subcategory: 'motoryzacja', title: 'Samochód Audi A4', location: 'Łódź', price: '50000 PLN', condition: 'Używany', image: 'https://example.com/audi.jpg' },
    { id: 66, type: 'sales', subcategory: 'motoryzacja', title: 'Opony zimowe', location: 'Gdańsk', price: '800 PLN', condition: 'Używane', image: 'https://example.com/opony.jpg' },
    { id: 67, type: 'sales', subcategory: 'motoryzacja', title: 'Motocykl Yamaha', location: 'Warszawa', price: '20000 PLN', condition: 'Używany', image: 'https://example.com/motocykl.jpg' },
    { id: 68, type: 'sales', subcategory: 'motoryzacja', title: 'Akumulator Bosch', location: 'Poznań', price: '300 PLN', condition: 'Nowy', image: 'https://example.com/akumulator.jpg' },

    // Sprzedaż - Zabawki
    { id: 69, type: 'sales', subcategory: 'zabawki', title: 'Lalka Barbie', location: 'Warszawa', price: '100 PLN', condition: 'Nowa', image: 'https://example.com/lalka.jpg' },
    { id: 70, type: 'sales', subcategory: 'zabawki', title: 'Klocki LEGO', location: 'Kraków', price: '300 PLN', condition: 'Nowe', image: 'https://example.com/lego.jpg' },
    { id: 71, type: 'sales', subcategory: 'zabawki', title: 'Pluszowy miś', location: 'Gdańsk', price: '50 PLN', condition: 'Prawie nowy', image: 'https://example.com/mis.jpg' },
    { id: 72, type: 'sales', subcategory: 'zabawki', title: 'Puzzle 1000 elementów', location: 'Poznań', price: '80 PLN', condition: 'Nowe', image: 'https://example.com/puzzle.jpg' },

    // Sprzedaż - Narzędzia
    { id: 73, type: 'sales', subcategory: 'narzędzia', title: 'Wiertarka Bosch', location: 'Warszawa', price: '400 PLN', condition: 'Używana', image: 'https://example.com/wiertarka.jpg' },
    { id: 74, type: 'sales', subcategory: 'narzędzia', title: 'Młotek', location: 'Kraków', price: '50 PLN', condition: 'Nowy', image: 'https://example.com/mlotek.jpg' },
    { id: 75, type: 'sales', subcategory: 'narzędzia', title: 'Piła tarczowa', location: 'Gdańsk', price: '600 PLN', condition: 'Prawie nowa', image: 'https://example.com/pila.jpg' },
    { id: 76, type: 'sales', subcategory: 'narzędzia', title: 'Zestaw kluczy', location: 'Poznań', price: '300 PLN', condition: 'Nowy', image: 'https://example.com/klucze.jpg' },

    // Sprzedaż - Muzyka i Instrumenty
    { id: 77, type: 'sales', subcategory: 'muzyka i instrumenty', title: 'Gitara akustyczna', location: 'Warszawa', price: '800 PLN', condition: 'Używana', image: 'https://example.com/gitara.jpg' },
    { id: 78, type: 'sales', subcategory: 'muzyka i instrumenty', title: 'Keyboard Yamaha', location: 'Kraków', price: '1200 PLN', condition: 'Prawie nowy', image: 'https://example.com/keyboard.jpg' },
    { id: 79, type: 'sales', subcategory: 'muzyka i instrumenty', title: 'Skrzypce', location: 'Gdańsk', price: '1500 PLN', condition: 'Nowe', image: 'https://example.com/skrzypce.jpg' },
    { id: 80, type: 'sales', subcategory: 'muzyka i instrumenty', title: 'Perkusja', location: 'Poznań', price: '3000 PLN', condition: 'Używana', image: 'https://example.com/perkusja.jpg' },

    // Pomoc - Techniczna
    { id: 81, type: 'help', subcategory: 'techniczna', title: 'Naprawa komputerów', location: 'Warszawa', helpType: 'Techniczna', description: 'Diagnoza i naprawa komputerów', image: 'https://example.com/naprawa-komputerow.jpg' },
    { id: 82, type: 'help', subcategory: 'techniczna', title: 'Instalacja oprogramowania', location: 'Kraków', helpType: 'Techniczna', description: 'Pomoc w instalacji i konfiguracji oprogramowania', image: 'https://example.com/instalacja-oprogramowania.jpg' },
    { id: 83, type: 'help', subcategory: 'techniczna', title: 'Naprawa telefonów', location: 'Poznań', helpType: 'Techniczna', description: 'Wymiana wyświetlaczy, baterii, naprawa gniazd', image: 'https://example.com/naprawa-telefonow.jpg' },
    { id: 84, type: 'help', subcategory: 'techniczna', title: 'Serwis RTV', location: 'Wrocław', helpType: 'Techniczna', description: 'Naprawa telewizorów i sprzętu audio', image: 'https://example.com/serwis-rtv.jpg' },

    // Pomoc - Sąsiedzka
    { id: 85, type: 'help', subcategory: 'sąsiedzka', title: 'Pomoc w zakupach', location: 'Łódź', helpType: 'Sąsiedzka', description: 'Pomogę w codziennych zakupach', image: 'https://example.com/zakupy.jpg' },
    { id: 86, type: 'help', subcategory: 'sąsiedzka', title: 'Wyprowadzanie psa', location: 'Gdańsk', helpType: 'Sąsiedzka', description: 'Wyprowadzanie psów na spacer', image: 'https://example.com/wyprowadzanie-psa.jpg' },
    { id: 87, type: 'help', subcategory: 'sąsiedzka', title: 'Pomoc w ogrodzie', location: 'Katowice', helpType: 'Sąsiedzka', description: 'Podlewanie kwiatów, grabienie liści', image: 'https://example.com/ogrod.jpg' },
    { id: 88, type: 'help', subcategory: 'sąsiedzka', title: 'Wsparcie dla seniorów', location: 'Szczecin', helpType: 'Sąsiedzka', description: 'Pomoc w codziennych czynnościach', image: 'https://example.com/wsparcie-seniorow.jpg' },

    // Pomoc - Fizyczna
    { id: 89, type: 'help', subcategory: 'fizyczna', title: 'Pomoc przy przeprowadzce', location: 'Warszawa', helpType: 'Fizyczna', description: 'Przenoszenie mebli i ciężkich przedmiotów', image: 'https://example.com/przeprowadzka.jpg' },
    { id: 90, type: 'help', subcategory: 'fizyczna', title: 'Pomoc w remontach', location: 'Poznań', helpType: 'Fizyczna', description: 'Malowanie, tapetowanie, układanie paneli', image: 'https://example.com/remonty.jpg' },
    { id: 91, type: 'help', subcategory: 'fizyczna', title: 'Prace ogrodowe', location: 'Wrocław', helpType: 'Fizyczna', description: 'Koszenie trawy, przycinanie drzew', image: 'https://example.com/prace-ogrodowe.jpg' },
    { id: 92, type: 'help', subcategory: 'fizyczna', title: 'Pomoc przy budowie', location: 'Kraków', helpType: 'Fizyczna', description: 'Noszenie materiałów budowlanych', image: 'https://example.com/budowa.jpg' },

    // Pomoc - Nauka
    { id: 93, type: 'help', subcategory: 'nauka', title: 'Korepetycje z matematyki', location: 'Warszawa', helpType: 'Nauka', description: 'Pomogę w nauce matematyki na każdym poziomie', image: 'https://example.com/korepetycje-matematyka.jpg' },
    { id: 94, type: 'help', subcategory: 'nauka', title: 'Nauka języka angielskiego', location: 'Łódź', helpType: 'Nauka', description: 'Lekcje języka angielskiego dla dzieci i dorosłych', image: 'https://example.com/nauka-angielskiego.jpg' },
    { id: 95, type: 'help', subcategory: 'nauka', title: 'Nauka gry na gitarze', location: 'Gdańsk', helpType: 'Nauka', description: 'Lekcje gry na gitarze akustycznej i elektrycznej', image: 'https://example.com/nauka-gitary.jpg' },
    { id: 96, type: 'help', subcategory: 'nauka', title: 'Przygotowanie do matury', location: 'Katowice', helpType: 'Nauka', description: 'Przygotowanie do matury z matematyki i fizyki', image: 'https://example.com/przygotowanie-matura.jpg' },

    // Pomoc - Opieka nad dziećmi
    { id: 97, type: 'help', subcategory: 'opieka nad dziećmi', title: 'Opieka nad niemowlętami', location: 'Warszawa', helpType: 'Opieka nad dziećmi', description: 'Opieka nad niemowlętami do 2 lat', image: 'https://example.com/opieka-niemowleta.jpg' },
    { id: 98, type: 'help', subcategory: 'opieka nad dziećmi', title: 'Niania na wieczór', location: 'Kraków', helpType: 'Opieka nad dziećmi', description: 'Opieka nad dziećmi podczas wyjść rodziców', image: 'https://example.com/niania.jpg' },
    { id: 99, type: 'help', subcategory: 'opieka nad dziećmi', title: 'Opieka po szkole', location: 'Poznań', helpType: 'Opieka nad dziećmi', description: 'Pomoc w odrabianiu lekcji i zabawie', image: 'https://example.com/opieka-po-szkole.jpg' },
    { id: 100, type: 'help', subcategory: 'opieka nad dziećmi', title: 'Animator na urodziny', location: 'Wrocław', helpType: 'Opieka nad dziećmi', description: 'Organizacja zabaw i animacji na urodziny', image: 'https://example.com/animator.jpg' },

    // Pomoc - Przeprowadzki
    { id: 101, type: 'help', subcategory: 'przeprowadzki', title: 'Transport mebli', location: 'Warszawa', helpType: 'Przeprowadzki', description: 'Transport dużych mebli, demontaż i montaż', image: 'https://example.com/transport-mebli.jpg' },
    { id: 102, type: 'help', subcategory: 'przeprowadzki', title: 'Pakowanie i rozpakowywanie', location: 'Kraków', helpType: 'Przeprowadzki', description: 'Pomoc w pakowaniu i rozpakowywaniu rzeczy', image: 'https://example.com/pakowanie.jpg' },
    { id: 103, type: 'help', subcategory: 'przeprowadzki', title: 'Przeprowadzki biur', location: 'Poznań', helpType: 'Przeprowadzki', description: 'Profesjonalna pomoc w przeprowadzkach firm i biur', image: 'https://example.com/przeprowadzki-biur.jpg' },
    { id: 104, type: 'help', subcategory: 'przeprowadzki', title: 'Przewóz pianin', location: 'Wrocław', helpType: 'Przeprowadzki', description: 'Transport ciężkich instrumentów muzycznych', image: 'https://example.com/przewoz-pianin.jpg' },

    // Pomoc - Sprzątanie
    { id: 105, type: 'help', subcategory: 'sprzątanie', title: 'Sprzątanie mieszkań', location: 'Warszawa', helpType: 'Sprzątanie', description: 'Sprzątanie po remoncie, mycie okien', image: 'https://example.com/sprzatanie-mieszkan.jpg' },
    { id: 106, type: 'help', subcategory: 'sprzątanie', title: 'Sprzątanie biur', location: 'Kraków', helpType: 'Sprzątanie', description: 'Profesjonalne sprzątanie biur i przestrzeni firmowych', image: 'https://example.com/sprzatanie-biur.jpg' },
    { id: 107, type: 'help', subcategory: 'sprzątanie', title: 'Pranie dywanów', location: 'Poznań', helpType: 'Sprzątanie', description: 'Czyszczenie i pranie dywanów oraz wykładzin', image: 'https://example.com/pranie-dywanow.jpg' },
    { id: 108, type: 'help', subcategory: 'sprzątanie', title: 'Mycie okien', location: 'Wrocław', helpType: 'Sprzątanie', description: 'Profesjonalne mycie okien i przeszkleń', image: 'https://example.com/mycie-okien.jpg' },

    // Pomoc - Ogród
    { id: 109, type: 'help', subcategory: 'ogród', title: 'Koszenie trawy', location: 'Warszawa', helpType: 'Ogród', description: 'Regularne koszenie trawnika', image: 'https://example.com/koszenie-trawy.jpg' },
    { id: 110, type: 'help', subcategory: 'ogród', title: 'Przycinanie drzew', location: 'Kraków', helpType: 'Ogród', description: 'Przycinanie drzew i krzewów', image: 'https://example.com/przycinanie-drzew.jpg' },
    { id: 111, type: 'help', subcategory: 'ogród', title: 'Sadzenie roślin', location: 'Poznań', helpType: 'Ogród', description: 'Sadzenie kwiatów, warzyw i drzewek', image: 'https://example.com/sadzenie-roslin.jpg' },
    { id: 112, type: 'help', subcategory: 'ogród', title: 'Zakładanie ogrodów', location: 'Wrocław', helpType: 'Ogród', description: 'Projektowanie i zakładanie ogrodów', image: 'https://example.com/zakladanie-ogrodow.jpg' },

    // Pomoc - Złota rączka
    { id: 113, type: 'help', subcategory: 'złota rączka', title: 'Naprawa mebli', location: 'Warszawa', helpType: 'Złota rączka', description: 'Montaż, naprawa i renowacja mebli', image: 'https://example.com/naprawa-mebli.jpg' },
    { id: 114, type: 'help', subcategory: 'złota rączka', title: 'Naprawa hydrauliki', location: 'Kraków', helpType: 'Złota rączka', description: 'Usuwanie wycieków, montaż kranów', image: 'https://example.com/hydraulika.jpg' },
    { id: 115, type: 'help', subcategory: 'złota rączka', title: 'Instalacja elektryki', location: 'Poznań', helpType: 'Złota rączka', description: 'Instalacja gniazdek, oświetlenia', image: 'https://example.com/elektryka.jpg' },
    { id: 116, type: 'help', subcategory: 'złota rączka', title: 'Montaż półek i szafek', location: 'Wrocław', helpType: 'Złota rączka', description: 'Montaż półek, szafek i innych elementów wyposażenia', image: 'https://example.com/montaz-polki.jpg' },

    // Pomoc - Transport
    { id: 117, type: 'help', subcategory: 'transport', title: 'Przewóz osób', location: 'Warszawa', helpType: 'Transport', description: 'Przewóz osób na krótkich i długich trasach', image: 'https://example.com/przewoz-osob.jpg' },
    { id: 118, type: 'help', subcategory: 'transport', title: 'Transport paczek', location: 'Kraków', helpType: 'Transport', description: 'Przewóz paczek i przesyłek kurierskich', image: 'https://example.com/transport-paczek.jpg' },
    { id: 119, type: 'help', subcategory: 'transport', title: 'Transport mebli', location: 'Poznań', helpType: 'Transport', description: 'Transport mebli i dużych przedmiotów', image: 'https://example.com/transport-mebli.jpg' },
    { id: 120, type: 'help', subcategory: 'transport', title: 'Usługi kurierskie', location: 'Wrocław', helpType: 'Transport', description: 'Szybkie i bezpieczne usługi kurierskie', image: 'https://example.com/uslugi-kurierskie.jpg' },

];



  const filteredListings = listings.filter(listing => {
    return (category === 'all' || listing.type === category) && (subcategory === 'all' || listing.subcategory === subcategory);
  });

  const subcategories: { [key: string]: string[] } = {
    work: ['all', 'IT', 'projektowanie', 'gastronomia', 'budownictwo', 'nauczanie', 'marketing', 'administracja', 'produkcja', 'transport', 'sprzedaż'],
    sales: ['all', 'elektronika', 'AGD', 'meble', 'książki', 'odzież', 'sport i rekreacja', 'motoryzacja', 'zabawki', 'narzędzia', 'muzyka i instrumenty'],
    help: ['all', 'techniczna', 'sąsiedzka', 'fizyczna', 'nauka' , 'opieka nad dziećmi', 'przeprowadzki', 'sprzątanie', 'ogród', 'złota rączka', 'transport'],
  };
  

  return (
    <div className="browse-listings-container">
      <div className="filter-bar">
        <button onClick={() => { setCategory('all'); setSubcategory('all'); }} className={category === 'all' ? 'active' : ''}>Wszystkie</button>
        <button onClick={() => { setCategory('work'); setSubcategory('all'); }} className={category === 'work' ? 'active' : ''}>Praca</button>
        <button onClick={() => { setCategory('sales'); setSubcategory('all'); }} className={category === 'sales' ? 'active' : ''}>Sprzedaż</button>
        <button onClick={() => { setCategory('help'); setSubcategory('all'); }} className={category === 'help' ? 'active' : ''}>Pomoc</button>
      </div>

      {category !== 'all' && (
        <div className="filter-bar">
          {subcategories[category].map(subcat => (
            <button key={subcat} onClick={() => setSubcategory(subcat)} className={subcategory === subcat ? 'active' : ''}>{subcat === 'all' ? 'Wszystkie' : subcat}</button>
          ))}
        </div>
      )}

      <div className="listings">
        {filteredListings.map(listing => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.title} className="listing-image" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem' }} />
            <h3>{listing.title}</h3>
            <p><strong>Lokalizacja:</strong> {listing.location}</p>
            {listing.salary && <p><strong>Wynagrodzenie:</strong> {listing.salary}</p>}
            {listing.price && <p><strong>Cena:</strong> {listing.price}</p>}
            {listing.condition && <p><strong>Stan:</strong> {listing.condition}</p>}
            {listing.helpType && <p><strong>Typ pomocy:</strong> {listing.helpType}</p>}
            {listing.requirements && <p><strong>Wymagania:</strong> {listing.requirements}</p>}
            {listing.description && <p><strong>Opis:</strong> {listing.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseListings;