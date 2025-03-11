# Mobrilz Redirect Page

A modern, animated redirect page that automatically forwards visitors to the main Mobrilz website.

## Features

- ⚡ Instant 5-second auto-redirect to www.mobrilz.com
- 🎨 Modern UI with smooth animations
- 📱 Fully responsive design
- 🔄 Visual progress indicator and countdown
- ✨ Dynamic particle background effects
- 🔗 Fallback manual redirect link

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

### Modify Colors
```css
/* In the style section */
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

MIT License - feel free to use this code for your own projects.

## Author

Created by NomadProgrammer for Mobrilz