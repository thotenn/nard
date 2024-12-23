# 🚀 Modern Full-Stack Project Template

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Astro](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)](https://astro.build/)

A modern and scalable solution that integrates a robust NestJS backend with PostgreSQL, a React admin panel, and a public frontend built with Astro.

## 📋 Project Structure

```
├── packages/
│   ├── backend/     # NestJS API + PostgreSQL
│   ├── admin/       # Admin Dashboard (React)
│   └── frontend/    # Public Website (Astro)
```

## 🛠️ Prerequisites

- Node.js (v16 or higher)
- Yarn
- Docker and Docker Compose (optional)
- PostgreSQL (if not using Docker)

## 🚀 Quick Start

### 1. Environment Setup

First, copy the environment variables file:

```bash
cp .env.template .env
```

Then, edit the `.env` file with your specific configurations.

### 2. Installation and Running

#### Option A: Using Docker (Recommended)

```bash
docker-compose up
```

#### Option B: Local Development

Run the entire project:
```bash
yarn dev
```

### 3. Running Individual Projects

```bash
# Backend (NestJS + PostgreSQL)
yarn workspace backend dev

# Admin Dashboard (React)
yarn workspace admin dev

# Public Frontend (Astro)
yarn workspace frontend dev
```

## 📍 Default Ports

- Backend: `http://localhost:3000`
- Admin Panel: `http://localhost:5173`
- Frontend: `http://localhost:4321`

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add: some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ using modern technologies
</p>