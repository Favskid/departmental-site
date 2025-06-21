# Departmental Site

A modern, responsive website for the Computer Science Department.

## Features

- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Contact form with EmailJS integration
- Photo gallery
- Administration information
- Research and foundation details

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd departmental-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS configuration:
```bash
# Copy the template file
cp src/config/emailjs.template.js src/config/emailjs.js

# Edit the file with your EmailJS credentials
# Follow the instructions in EMAILJS_SETUP.md
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## EmailJS Setup

The contact form uses EmailJS to send emails. Follow the detailed setup guide in `EMAILJS_SETUP.md` to configure your email service.

**Important**: Never commit your `src/config/emailjs.js` file to Git as it contains sensitive credentials. The file is already added to `.gitignore`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Router DOM
- EmailJS
- React Icons

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Images and static files
├── config/        # Configuration files (not committed to Git)
└── main.jsx       # App entry point
```

## Deployment

The site is configured for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
