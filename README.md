# Muskan Kushwaha - Portfolio Website

A professional portfolio website showcasing expertise in backend development, DevOps, and full-stack technologies. Built with modern web technologies and featuring a sleek neon cyan and dark navy design theme.

## 🚀 Live Demo

Visit the live portfolio: [Your Render URL will appear here after deployment]

## 🎯 Features

- **Animated Hero Section**: Dynamic typewriter effect cycling through different developer roles
- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional Showcase**: 
  - 4+ major projects including TaskTrackerPro and Book Review API
  - 10+ certifications from AWS, Google Cloud, Microsoft Azure
  - Technical skills across multiple domains
- **Modern UI/UX**: Smooth animations, hover effects, and professional layout
- **Contact Integration**: Direct links to LinkedIn, GitHub, and email
- **Database Ready**: PostgreSQL integration for future enhancements

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Wouter** for routing
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vite** for build tooling

### Backend
- **Node.js** with Express
- **PostgreSQL** database
- **Drizzle ORM** for database management
- **TypeScript** for type safety

### Deployment
- **Render** for hosting
- **PostgreSQL** managed database
- **CI/CD** ready with automatic deployments

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── db.ts             # Database configuration
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data access layer
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schemas and validation
├── render.yaml          # Render deployment configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- PostgreSQL database
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd muskan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   ```

4. **Run database migrations**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5000`

## 🌐 Deployment on Render

### Automatic Deployment

1. **Fork this repository** to your GitHub account

2. **Create a new Web Service** on Render:
   - Connect your GitHub repository
   - Select "Existing repository"
   - Choose your forked repository

3. **Configure the service**:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 20

4. **Create a PostgreSQL database**:
   - Add a new PostgreSQL database in Render
   - Copy the connection string

5. **Set environment variables**:
   - `NODE_ENV`: `production`
   - `DATABASE_URL`: Your PostgreSQL connection string

6. **Deploy**: Render will automatically build and deploy your application

### Manual Deployment Using render.yaml

The project includes a `render.yaml` file for automated deployments:

```yaml
services:
  - type: web
    name: muskan-portfolio
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: muskan-portfolio-db
          property: connectionString

databases:
  - name: muskan-portfolio-db
    databaseName: portfolio
    user: portfolio_user
```

## 📱 Components Overview

### Hero Section
- Animated typewriter effect for name
- Role cycling animation (Software Developer → Full Stack Developer → Backend Developer → DevOps Engineer)
- Professional profile image with neon glow effect

### Projects Section
- **TaskTrackerPro**: Angular 19 + Python Flask task management application
- **Book Review API**: Node.js + Express.js + MongoDB RESTful API
- **COVID-19 Predictor**: AI/ML model for healthcare diagnosis
- **Hospital Management System**: Full-stack healthcare solution

### Skills Section
- Programming Languages: Java, Python, JavaScript, SQL
- Frameworks: Spring Boot, Express.js, REST APIs, Hibernate
- Cloud & Infrastructure: AWS, GCP, Docker, CI/CD
- Databases: PostgreSQL, MySQL, MongoDB, Oracle

### Certifications
- AWS Cloud Solutions Architect (Coursera)
- Azure Fundamentals (Microsoft)
- Computer Vision Specialization (Coursera)
- Google Cloud Programs
- HackerRank Java Programming (5-Star)

## 🎨 Design System

### Color Palette
- **Background**: #0F172A (Dark Navy)
- **Primary**: #22D3EE (Neon Cyan)
- **Secondary**: #64748B (Cool Gray)
- **Accent**: #F4F4F4 (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📞 Contact Information

- **Email**: kushwahamuskan97@gmail.com
- **Phone**: +91-9568365450
- **Location**: Bengaluru, Karnataka, India
- **LinkedIn**: [muskan-kushwaha-4a11551ba](https://www.linkedin.com/in/muskan-kushwaha-4a11551ba/)
- **GitHub**: [Muskan3909](https://github.com/Muskan3909)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:

1. Open an issue for bug reports or feature suggestions
2. Submit a pull request for improvements
3. Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons by Lucide React
- Images from Unsplash
- Fonts by Google Fonts

---

**Built with ❤️ by Muskan Kushwaha**

*B.E. Computer Science Graduate | Backend Developer | DevOps Engineer*