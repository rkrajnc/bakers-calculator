# Baker's Calculator

A professional web-based calculator for scaling bread, pizza, and pastry recipes using baker's percentages. Features a warm, baking-themed design and works seamlessly on mobile, tablet, and desktop devices.

## Features

- **Progressive Web App (PWA)**: Install on Android/iOS home screen for app-like experience
- **Offline Support**: Works without internet connection once loaded
- **Responsive Design**: Optimized for mobile phones, tablets, and desktop computers
- **Hydration Calculator**: Calculate water content as percentage of flour weight
- **Poolish Support**: Optional pre-ferment calculations with customizable hydration
- **Multiple Units**: Support for grams, kilograms, ounces, and pounds
- **Real-time Calculations**: Instant updates as you change values
- **Baker's Percentages**: Professional baking calculations for consistent results
- **Warm Color Scheme**: Beautiful brown and cream colors matching the baking theme

## How to Use

1. **Select Unit**: Choose your preferred measurement unit (grams, kg, oz, or lb)

2. **Enter Dough Weight**: Input the total weight of dough you want to make

3. **Set Hydration**: Enter the water percentage (typical: 60-70% for bread, 55-60% for pizza)

4. **Optional Poolish**: Check the box to use poolish and enter its weight and hydration

5. **Adjust Salt & Yeast**: Set the percentage of salt (typical: 2%) and yeast (typical: 0.5-2%)

6. **View Results**: The calculator shows exact amounts for all ingredients, including:
   - Total flour needed
   - Total water needed
   - Additional flour/water (if using poolish)
   - Salt and yeast weights

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

- `index.html` - Main HTML structure with PWA meta tags
- `style.css` - Responsive styling with baking-themed colors
- `script.js` - Calculation logic for baker's percentages
- `manifest.json` - PWA manifest for Android/iOS installation
- `sw.js` - Service worker for offline functionality
- `icon-192.png` - App icon (192x192)
- `icon-512.png` - App icon (512x512)
- `README.md` - This file

## Technologies Used

- **HTML5** - Semantic markup with PWA support
- **CSS3** - Modern responsive design with Grid and Flexbox
- **Vanilla JavaScript** - No dependencies, pure JS
- **Service Workers** - Offline functionality
- **Web App Manifest** - Installable Progressive Web App

## License

Free to use and modify for personal or commercial purposes.

## Disclaimer

This calculator is provided "as is" without warranty of any kind, express or implied. The authors assume no responsibility for errors, inaccuracies, or any consequences arising from the use of this calculator. Users are responsible for verifying all calculations and measurements before use.
