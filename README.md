# Anusha Kanamarlapudi — Portfolio

Full-stack portfolio built with **Angular 19** (frontend) and **.NET Core 6** (backend API).

---

## Project Structure

```
anusha-portfolio/
├── frontend/          # Angular 19 app
│   └── src/
│       ├── app/
│       │   ├── components/
│       │   │   ├── navbar/
│       │   │   ├── hero/
│       │   │   ├── about/
│       │   │   ├── experience/
│       │   │   ├── projects/
│       │   │   ├── skills/
│       │   │   ├── certifications/
│       │   │   └── contact/
│       │   ├── models/
│       │   └── services/
│       └── environments/
└── backend/           # .NET Core 6 Web API
    ├── Controllers/
    │   ├── PortfolioController.cs
    │   └── ContactController.cs
    ├── Models/
    │   └── ContactMessage.cs
    └── Program.cs
```

---

## Getting Started

### Frontend (Angular 19)

```bash
cd frontend
npm install
ng serve
# Runs at http://localhost:4200
```

**Build for production:**
```bash
ng build --configuration production
# Output in dist/anusha-portfolio — deploy to Vercel
```

### Backend (.NET Core 6)

```bash
cd backend
dotnet restore
dotnet run
# Runs at https://localhost:7001
# Swagger: https://localhost:7001/swagger
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/portfolio/stats | Returns stats (experience, companies, etc.) |
| GET | /api/portfolio/experiences | Returns work history |
| GET | /api/portfolio/projects | Returns project list |
| POST | /api/contact | Receives contact form submissions |

---

## Deploying to Vercel (Frontend)

1. Push `frontend/` to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Set framework to **Angular**
4. Set build command: `ng build --configuration production`
5. Set output directory: `dist/anusha-portfolio/browser`

## Deploying Backend to Azure

```bash
cd backend
dotnet publish -c Release -o ./publish
# Deploy ./publish folder to Azure App Service (.NET 6)
```

Update `environment.production.ts` with your Azure API URL:
```ts
apiUrl: 'https://your-api.azurewebsites.net/api'
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 19, TypeScript, CSS3 |
| Backend | ASP.NET Core 6, C# |
| Cloud | Microsoft Azure (App Services, Blob Storage) |
| Database | SQL Server |
| DevOps | GitHub, Vercel, Azure CI/CD |
