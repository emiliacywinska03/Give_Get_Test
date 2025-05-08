import React, { useState } from 'react';
import '../App.css';

const LoginAndRegister: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const securityQuestions = [
    "Jaki jest Twój ulubiony kolor?",
    "Jakie jest imię Twojego pierwszego zwierzaka?",
    "W jakim mieście się urodziłeś/aś?",
    "Jak nazywała się Twoja pierwsza szkoła?"
  ];

  const validateUsername = (username: string) => /^[a-zA-Z0-9_-]{3,30}$/.test(username);
  const validateEmail = (email: string) => /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePassword = (password: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
  const validateFullName = (name: string) => /^([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,79})(\s[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,79})?$/.test(name);
  const validateSecurityAnswer = (answer: string) => answer.length >= 3 && answer.length <= 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegistering) {
      if (!validateUsername(username)) {
        setErrorMessage("Nazwa użytkownika musi mieć 3-30 znaków i może zawierać tylko litery, cyfry, myślniki i podkreślenia.");
        return;
      }

      if (!validateEmail(email)) {
        setErrorMessage("Podaj prawidłowy adres e-mail.");
        return;
      }

      if (!validatePassword(password)) {
        setErrorMessage("Hasło musi mieć co najmniej 8 znaków, w tym jedną dużą literę, jedną małą literę, jedną cyfrę i jeden znak specjalny.");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Hasła muszą się zgadzać!");
        return;
      }

      if (!securityQuestion) {
        setErrorMessage("Wybierz pytanie weryfikacyjne.");
        return;
      }

      if (!validateSecurityAnswer(securityAnswer)) {
        setErrorMessage("Odpowiedź na pytanie weryfikacyjne musi mieć 3-100 znaków.");
        return;
      }

      if (fullName && !validateFullName(fullName)) {
        setErrorMessage("Imię i nazwisko może mieć maksymalnie 80 znaków i musi zaczynać się wielką literą.");
        return;
      }

      setErrorMessage("");
      console.log('Rejestracja:', { username, email, password, securityQuestion, securityAnswer, fullName });
      alert('Rejestracja zakończona pomyślnie (na razie tylko w konsoli).');
    } else {
      if (!validateEmail(identifier) && !validateUsername(identifier)) {
        setErrorMessage("Podaj prawidłową nazwę użytkownika lub adres e-mail.");
        return;
      }

      if (!validatePassword(password)) {
        setErrorMessage("Nieprawidłowe hasło.");
        return;
      }

      setErrorMessage("");
      console.log('Login:', { identifier, password });
      alert('Logowanie zakończone pomyślnie (na razie tylko w konsoli).');
    }
  };

  return (
    <div className="auth-container">
      <h1>{isRegistering ? 'Rejestracja' : 'Logowanie'}</h1>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input type="text" placeholder="Nazwa użytkownika" value={username} onChange={(e) => setUsername(e.target.value)} required />
        )}
        {isRegistering && (
          <input type="email" placeholder="Adres e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        )}
        {!isRegistering && (
          <input type="text" placeholder="Nazwa użytkownika lub adres e-mail" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
        )}
        <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {isRegistering && (
          <input type="password" placeholder="Potwierdź hasło" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        )}
        {isRegistering && (
          <select value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)} required>
            <option value="">Wybierz pytanie weryfikacyjne</option>
            {securityQuestions.map((question, index) => (
              <option key={index} value={question}>{question}</option>
            ))}
          </select>
        )}
        {isRegistering && (
          <input type="text" placeholder="Odpowiedź na pytanie weryfikacyjne" value={securityAnswer} onChange={(e) => setSecurityAnswer(e.target.value)} required />
        )}
        {isRegistering && (
          <input type="text" placeholder="Imię i nazwisko (opcjonalne)" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="button-add-listing">{isRegistering ? 'Zarejestruj się' : 'Zaloguj się'}</button>
      </form>
      <button className="toggle-button" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
      </button>
    </div>
  );
};

export default LoginAndRegister;