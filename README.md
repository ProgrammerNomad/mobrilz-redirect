# Mobrilz Redirect Page

A modern, animated redirect page that automatically forwards visitors to the main Mobrilz website with engaging visual effects and smooth transitions.

## Features

- ⚡ Instant 5-second auto-redirect to www.mobrilz.com
- 🎨 Modern UI with advanced animations:
  - 3D floating container effect
  - Glowing loader circles
  - Dynamic multicolored particles
  - Wave effect in progress bar
  - Text glow animations
  - Smooth gradient backgrounds
  - Bouncing countdown numbers
- 📱 Fully responsive design
- 🔄 Visual progress indicator and countdown
- ✨ Dynamic particle background effects with color variations
- 🔗 Fallback manual redirect link
- 🌈 Customizable color schemes
- 🎭 Glass-morphism effects

## Project Structure

```plaintext
mobrilz-redirect/
├── index.html    # All-in-one file (HTML, CSS, JS)
└── README.md     # Project documentation
```

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mobrilz-redirect.git
   cd mobrilz-redirect
   ```

2. **Local Development:**
   - Open `index.html` in a web browser to test
   - Use Live Server in VS Code for automatic reloading
   - Chrome DevTools recommended for animation debugging

3. **Deploy to Netlify:**
   ```bash
   # Push to GitHub first
   git add .
   git commit -m "Initial commit"
   git push

   # Then deploy via Netlify UI:
   # 1. Log into Netlify
   # 2. Click "New site from Git"
   # 3. Select your repository
   # 4. Click "Deploy site"
   ```

## Customization

### Adjust Redirect Timing
```html
<!-- In index.html -->
<meta http-equiv="refresh" content="5;url=https://www.mobrilz.com/">
```

```javascript
// In the script section
setTimeout(function() {
    window.location.href = "https://www.mobrilz.com/";
}, 5000);
```

### Modify Colors and Animations
```css
/* In the style section */
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --background-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --animation-duration: 5s;
    --float-intensity: 10px;
    --glow-intensity: 15px;
}
```

### Particle System Configuration
```javascript
// In the script section
const particleConfig = {
    count: 20,
    colors: ['rgba(52, 152, 219, 0.2)', 'rgba(46, 204, 113, 0.2)', 'rgba(231, 76, 60, 0.2)'],
    minSize: 5,
    maxSize: 20
};
```

## Animation Details

- **Container Float**: 6s infinite 3D rotation and translation
- **Loader Circles**: Multiple rotating circles with glow effects
- **Progress Bar**: Linear progress with wave overlay
- **Particles**: Randomized floating elements with color variation
- **Text Effects**: Sliding entrance with glow animation
- **Background**: Smooth gradient position animation
- **Countdown**: Bounce effect on number changes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

Note: Some advanced CSS features like `backdrop-filter` might need vendor prefixes for older browsers.

## Performance Considerations

- Uses CSS transforms for smooth animations
- Implements `will-change` for better performance
- Optimized particle system for minimal impact
- Responsive animations that scale with viewport

## License

MIT License - feel free to use this code for your own projects.

## Author

Created by NomadProgrammer for Mobrilz