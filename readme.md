# MCQ Hub - React Vite Application

A simple single-page React application built with Vite for displaying Multiple Choice Questions with Google Drive links.

## Features

- **Sticky Navbar** - Navigation bar that stays at the top when scrolling
- **Hero Banner** - Hero section with placeholder for image
- **Number Boxes Grid** - Grid of numbered boxes linking to Google Drive documents
- **Footer** - Footer with social media links (LinkedIn, Instagram, Facebook)
- **Responsive Design** - Mobile-friendly layout
- **Easy to Update** - Simple configuration for adding new boxes

## Project Structure

```
client/
src/
  components/
    - Navbar.jsx      # Sticky navigation component
    - Hero.jsx        # Hero banner section
    - NumberBoxes.jsx # Grid of number boxes with Google Drive links
    - Footer.jsx      # Footer with social links
  - App.jsx           # Main application component
  - App.css           # Global styles
  - main.jsx          # Entry point
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Adding New Number Boxes

To add new number boxes, edit the `boxes` array in `src/components/NumberBoxes.jsx`:

```javascript
const boxes = [
  { id: 1, number: '01', driveUrl: 'https://drive.google.com/your-link-1' },
  { id: 2, number: '02', driveUrl: 'https://drive.google.com/your-link-2' },
  // Add more boxes here
  { id: 25, number: '25', driveUrl: 'https://drive.google.com/your-link-25' },
];
```

Simply add new objects to the array with:
- `id`: Unique identifier
- `number`: Display number/text for the box
- `driveUrl`: Google Drive link

### Updating Hero Image

Replace the placeholder text in `src/components/Hero.jsx` with your image:

```jsx
// Replace this:
<div className="hero-image-placeholder">
  Add your image here
</div>

// With this:
<img src="/path/to/your/image.jpg" alt="Hero" className="hero-image" />
```

### Updating Social Links

Update the social media links in `src/components/Footer.jsx`:

```jsx
<a href="https://www.linkedin.com/in/your-profile">LinkedIn</a>
<a href="https://www.instagram.com/your-profile">Instagram</a>
<a href="https://www.facebook.com/your-profile">Facebook</a>
```

## Styling

The application uses CSS with a brown/beige color scheme matching the design reference:

- Background: Light beige (`#f5f5dc`)
- Boxes/Navbar/Footer: Brown (`#8b4513`)
- Hover effects: Lighter brown (`#a0522d`)
- Accent: Gold (`#ffd700`)

## Build and Deploy

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling (no external CSS framework)

## License

© 2024 MCQ Hub. All rights reserved.