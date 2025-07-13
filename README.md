# VJ Builders - Business Portfolio Website

A modern, responsive portfolio website for VJ Builders, showcasing civil engineering and construction services with an elegant design and smooth user experience.

## 🚀 Live Demo

The website is deployed and available at: **[https://ariyha.github.io/Businnes-Portfolio/](https://ariyha.github.io/Businnes-Portfolio/)**

## 🛠️ Tech Stack

### Frontend Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with advanced features
  - CSS Grid & Flexbox for responsive layouts
  - CSS Custom Properties (Variables)
  - CSS Animations & Transitions
  - Glass morphism effects with backdrop-filter
  - Responsive design with media queries
- **Vanilla JavaScript** - Interactive functionality and animations
- **Font Awesome 6.0** - Icon library for UI elements
- **Google Fonts (Nunito)** - Typography

### Design Features
- ✨ **Modern Glass Morphism** navigation with dynamic color themes (Liquid Glass at its peak)
- 🎨 **Dynamic Navigation Bar** that changes colors based on page sections
- 📱 **Fully Responsive Design** optimized for all devices
- 🎭 **Smooth Animations** with CSS transitions and keyframes
- 🖼️ **Image Gallery** for project showcases
- 📧 **Interactive Contact Form** with modal popup
- 🎯 **Scroll-based Animations** and parallax effects
- 🌊 **Animated Background Elements** with floating particles

## 📁 Project Structure

```
business-portfolio/
├── index.html              # Main HTML file
├── design.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── images/                 # Project images
│   ├── bridge.jpg
│   ├── greenfield.jpeg
│   └── riverside.jpg
└── README.md              # Documentation
```

## 🚀 How to Run Locally

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Method 1: Direct File Opening
1. **Clone or Download** the repository
   ```bash
   git clone https://github.com/ariyha/Businnes-Portfolio.git
   cd Businnes-Portfolio
   ```

2. **Open the HTML file** directly in your browser
   - Double-click `index.html`
   - Or right-click and select "Open with" → your preferred browser

### Method 2: Local Web Server (Recommended)
For better development experience and to avoid CORS issues with images:

#### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (with live-server)
```bash
# Install live-server globally
npm install -g live-server

# Run in project directory
live-server
```

#### Using PHP
```bash
php -S localhost:8000
```

3. **Open your browser** and navigate to:
   - `http://localhost:8000`

## 📱 Browser Compatibility

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Features

### Navigation
- **Dynamic Color Themes**: Navigation bar adapts colors based on current section
- **Glass Morphism Effect**: Modern translucent design with backdrop blur
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Active Link Highlighting**: Visual indication of current page section

### Sections
1. **Hero Section**: Eye-catching banner with animated text and floating particles
2. **About Section**: Company information with animated elements
3. **Services Section**: Grid layout showcasing 6 core services
4. **Projects Section**: Portfolio gallery with real project images
5. **Contact Section**: Contact information and interactive form modal

### Interactive Elements
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Animations**: Enhanced user interaction feedback
- **Form Validation**: Client-side validation for contact form
- **Modal Popup**: Professional contact form overlay
- **Scroll Animations**: Elements animate into view on scroll

## 🎯 Performance Features

- **Optimized Images**: Compressed images for faster loading
- **CSS Transitions**: Hardware-accelerated animations
- **Lazy Loading**: Efficient resource loading
- **Minimal Dependencies**: Lightweight external libraries only

## 🔧 Customization

### Colors
The website uses CSS custom properties for easy theme customization:

```css
:root {
    --primary-color: #2c5530;    /* Dark green */
    --secondary-color: #4a7c59;  /* Medium green */
    --accent-color: #7fb069;     /* Light green */
    --light-green: #a7c957;      /* Bright green */
    --cream: #f2f7f2;            /* Background */
}
```

### Content
- Edit `index.html` to modify content
- Replace images in `/images/` folder
- Update contact information in the contact section

### Styling
- Main styles are in `design.css`
- Navigation and responsive styles included
- Easy to modify color schemes and layouts

## 📧 Contact Information

- **Phone**: +91 1231231231
- **Email**: info@vjbuilders.com
- **Address**: 123 Construction Ave, Builder City, CBE 641112

## 📄 License

This project is created for VJ Builders portfolio purposes. All rights reserved.

---

**Built with ❤️ for VJ Builders** | **[View Live Site](https://ariyha.github.io/Businnes-Portfolio/)**
