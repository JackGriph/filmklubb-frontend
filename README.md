# Filmklubb – webbapp

Lista över filmer och serier att se. Markera som sedd, sätt betyg och ladda upp en bild.

Backend: https://github.com/JackGriph/filmklubb-backend

## Krav

- .NET 10 SDK
- Node.js 20 eller senare

Kontrollera att du har dem:

```bash
dotnet --version
node --version
```

## 1. Starta backend

```bash
git clone https://github.com/JackGriph/filmklubb-backend.git
cd filmklubb-backend
dotnet run
```

API:et kör på http://localhost:5071. Databasen skapas automatiskt vid start och fylls
med några filmer, så listan är inte tom.

## 2. Starta webbappen

I ett nytt terminalfönster:

```bash
git clone https://github.com/JackGriph/filmklubb-frontend.git
cd filmklubb-frontend
npm install
npm run dev
```

Öppna http://localhost:5173. Backend måste vara igång.


