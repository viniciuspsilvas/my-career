# My Career - Professional Development Platform

A comprehensive Next.js application designed to help professionals manage and enhance their career development journey.

## Features

### Resume Management
- Create and edit professional resumes
- Preview resume in real-time
- Generate PDF versions of your resume
- Customizable templates and layouts

### AI-Powered Cover Letter Generator
- Generate personalized cover letters using OpenAI's ChatGPT
- Customize content based on job descriptions
- Save and manage multiple cover letter versions
- Export to PDF format

### Flash Cards Learning System
- Create and manage flash cards for interview preparation
- Categorize cards by topics and difficulty levels
- Interactive learning interface
- Track progress and performance

### Portfolio Management
- Showcase your projects and work experience
- Customizable portfolio layouts
- Integration with GitHub and other platforms
- Responsive design for all devices

### Blog System
- Create and manage professional blog posts
- Markdown support for rich content
- SEO optimization
- Social sharing capabilities

### Additional Tools
- Contact management system
- About page customization
- Admin dashboard for content management
- API integration capabilities

## Tech Stack

- **Framework**: Next.js 15.1.7
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Database**: MongoDB with Mongoose
- **PDF Generation**: Puppeteer
- **AI Integration**: OpenAI API
- **UI Components**: Headless UI, Framer Motion
- **Markdown Editor**: React MD Editor
- **Form Handling**: React Hook Form
- **API Client**: Axios
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites
- Node.js (latest LTS version)
- MongoDB instance
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd my-career
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_api_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

To seed the initial data:
```bash
npx tsx src/scripts/seedProjects.ts
```

## Project Structure

```
my-career/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── portfolio/         # Portfolio management
│   ├── flashcards/        # Flash cards system
│   ├── cover-letter/      # Cover letter generator
│   └── ...                # Other features
├── src/                   # Source code
├── public/                # Static assets
└── db/                    # Database models and connections
```

## Clean Installation

If you need to clean the project and start fresh:
```bash
rm -rf node_modules .next .turbo yarn.lock && npm cache clean --force
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.