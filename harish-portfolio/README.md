# Harish Chawan - Personal Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my work as a tech explorer, media storyteller, and impact creator.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Optimized for all device sizes
- **Interactive**: Smooth scrolling, hover effects, and dynamic content
- **Performance**: Fast loading with optimized assets
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Heroicons, Custom SVGs
- **Fonts**: Inter, JetBrains Mono
- **Build Tool**: Create React App
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
harish-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── pages/
│   │   └── Home.jsx        # Main page layout
│   ├── App.jsx             # App component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Sections

### Hero Section
- Dynamic role switching animation
- Call-to-action buttons
- Smooth scroll indicators

### About Section
- Personal introduction
- Skills showcase with categories
- Statistics counter
- Professional quote

### Projects Section
- **Nidhisakhi**: Loan eligibility & financial awareness platform
- **WasteWorks**: E-waste to sustainable infrastructure solution
- Tech stack badges
- Live demo and GitHub links

### Contact Section
- Interactive contact form
- Social media links
- Availability status
- Direct email contact

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harish/portfolio.git
   cd harish-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main branch

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',    // Dark background
      secondary: '#1e293b',  // Card backgrounds
      accent: '#3b82f6',     // Blue accent
      highlight: '#06b6d4',  // Cyan highlight
    }
  }
}
```

### Content
- Update personal information in each component
- Replace project data in `Projects.jsx`
- Modify social links in `Contact.jsx` and `Footer.jsx`
- Update the resume link in `About.jsx`

### Animations
Customize AOS animations by modifying data attributes:
- `data-aos="fade-up"`
- `data-aos-delay="200"`
- `data-aos-duration="800"`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images and assets
- Lazy loading for animations
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: harish@email.com
- **LinkedIn**: [linkedin.com/in/harish-chawan](https://linkedin.com/in/harish-chawan)
- **GitHub**: [github.com/harish](https://github.com/harish)
- **Instagram**: [instagram.com/harish.chawan](https://instagram.com/harish.chawan)

---

Built with ❤️ by Harish Chawan using React & Tailwind CSS