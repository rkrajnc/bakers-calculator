# Baker's Calculator

A professional web-based calculator for scaling bread, pizza, and pastry recipes using baker's percentages. Features a warm, baking-themed design with an intuitive interface, recipe presets, and the ability to save your own custom recipes. Works seamlessly on mobile, tablet, and desktop devices.

## Features

### Core Functionality
- **Progressive Web App (PWA)**: Install on Android/iOS home screen for app-like experience
- **Offline Support**: Works without internet connection once loaded
- **Responsive Design**: Optimized for mobile phones, tablets, and desktop computers
- **Hydration Calculator**: Calculate water content as percentage of flour weight
- **Poolish Support**: Optional pre-ferment calculations with customizable hydration
- **Multiple Units**: Support for grams (g), kilograms (kg), ounces (oz), and pounds (lb)
- **Real-time Calculations**: Instant updates as you change values with visual unit indicators
- **Baker's Percentages**: Professional baking calculations for consistent results

### Recipe Management
- **Quick Recipe Presets**: 6 built-in recipes to get started quickly:
  - Classic Bread (65% hydration, traditional loaf)
  - 3x Pizza - 270g each (70% hydration, with poolish)
  - No-Knead Bread (70% hydration, minimal yeast)
  - Sourdough (75% hydration, no commercial yeast)
  - Focaccia (80% hydration, high moisture)
  - Baguette (68% hydration, with poolish)
- **Save Custom Recipes**: Save your own recipes to browser localStorage
- **Recipe Persistence**: Saved recipes work offline and persist across sessions
- **Easy Recipe Management**: Load saved recipes with one click, delete unwanted recipes

### User Interface
- **Professional Icon**: Custom bread-themed icon in the header
- **Unit Indicators**: Visual weight unit symbols (g, kg, oz, lb) next to input fields
- **Percentage Symbols**: Clear percentage indicators for hydration, salt, and yeast
- **Warm Color Scheme**: Beautiful brown and cream colors matching the baking theme
- **Hover Effects**: Interactive buttons with smooth animations

## How to Use

### Quick Start with Presets
1. **Choose a Recipe**: Click one of the Quick Recipe links (e.g., "Classic Bread" or "3x Pizza")
2. **Adjust if Needed**: Modify any values to suit your needs
3. **View Results**: See the calculated ingredient amounts immediately

### Manual Setup
1. **Select Unit**: Choose your preferred measurement unit (grams, kg, oz, or lb)
   - Unit symbols automatically update throughout the form

2. **Enter Dough Weight**: Input the total weight of dough you want to make
   - The unit symbol appears next to the input field

3. **Set Hydration**: Enter the water percentage (typical: 60-70% for bread, 70-80% for pizza)
   - Shown with a % symbol for clarity

4. **Optional Poolish**:
   - Check the "Use poolish" box to enable pre-ferment
   - Enter poolish weight and hydration percentage
   - Great for improved flavor and texture

5. **Adjust Salt & Yeast**:
   - Set salt percentage (typical: 2%)
   - Set yeast percentage (typical: 0.5-2% for regular bread, 0.25% for no-knead)
   - Both shown as percentages of flour weight

6. **View Results**: The calculator shows exact amounts for all ingredients:
   - Total flour needed
   - Total water needed
   - Additional flour/water (if using poolish)
   - Salt and yeast weights
   - All amounts shown in your selected unit

### Saving Custom Recipes
1. **Adjust Settings**: Set up your recipe with desired values
2. **Name Your Recipe**: Enter a descriptive name in the "Recipe name" field
3. **Click Save Recipe**: Your recipe is saved to browser storage
4. **Load Anytime**: Your saved recipes appear in "My Saved Recipes"
5. **Delete if Needed**: Click the × button next to any saved recipe to remove it

## Baker's Percentages Explained

Baker's percentage is a notation method used by bakers to express ingredient quantities as a percentage of the total flour weight. Flour is always 100%, and all other ingredients are expressed as a percentage relative to the flour.

Example:
- Flour: 100%
- Water: 65% (65% of the flour weight)
- Salt: 2% (2% of the flour weight)
- Yeast: 1% (1% of the flour weight)

## Installation on Mobile Device

### Android (Chrome/Edge)
1. Open the calculator in Chrome or Edge browser
2. Tap the menu button (three dots)
3. Select "Add to Home screen" or "Install app"
4. The calculator will appear on your home screen like a native app
5. Launch it anytime - works offline after first load!

### iOS (Safari)
1. Open the calculator in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it and tap "Add"
5. The app icon will appear on your home screen

## Files

- `index.html` - Main HTML structure with PWA meta tags and recipe sections
- `style.css` - Responsive styling with baking-themed colors and animations
- `script.js` - Calculation logic for baker's percentages and recipe management
- `manifest.json` - PWA manifest for Android/iOS installation
- `sw.js` - Service worker for offline functionality
- `icon.svg` - App icon in SVG format (used in header)
- `icon-192.png` - App icon (192x192) for PWA
- `icon-512.png` - App icon (512x512) for PWA
- `README.md` - This file

## Technologies Used

- **HTML5** - Semantic markup with PWA support
- **CSS3** - Modern responsive design with Grid and Flexbox
- **Vanilla JavaScript** - No dependencies, pure JS
- **LocalStorage API** - Client-side recipe storage that persists across sessions
- **Service Workers** - Offline functionality
- **Web App Manifest** - Installable Progressive Web App

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (all recent versions)
- **Mobile**: iOS Safari 11+, Chrome for Android
- **LocalStorage**: Supported in all modern browsers
- **PWA Features**: Full support in Chrome/Edge, partial support in Safari

## License

Free to use and modify for personal or commercial purposes.

## Disclaimer

This calculator is provided "as is" without warranty of any kind, express or implied. The authors assume no responsibility for errors, inaccuracies, or any consequences arising from the use of this calculator. Users are responsible for verifying all calculations and measurements before use.
