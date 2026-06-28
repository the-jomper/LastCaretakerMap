# Last Caretaker Map

An interactive map application built with Leaflet.js and Vite that displays locations from `data.json`.

Based on the game ["The Last Caretaker"](https://thelastcaretaker.com/) by [Channel 37](https://www.channel37.co/). This map is not affiliated with Channel 37, and just made by a loving fan.

For your viewing pleasure: https://the1killer.github.io/LastCaretakerMap/

<img width="529" height="326" alt="tlc-map" src="https://github.com/user-attachments/assets/3c27b5f5-8a32-4344-9140-ac96625547b5" />


## Features

- 🗺️ Interactive map with Icons from the game.
- 📋 Sidebar with location list
- 🔍 Click locations to zoom and view details
- 📱 Responsive design for mobile and desktop
- ⚡ Fast development with Vite and HMR

### Future plans/hopes

- 🎨 Add custom markers
- 🔍 Add search functionality
- 📋 Enhance location details
- 🗝️ Add hidden locations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Preview production build:**
   ```bash
   npm run preview -- --host --port 3000
   ```

## Project Structure

```
lastcaretakermap/
├── index.html         # Main HTML file
├── main.js            # JavaScript entry point with Leaflet integration
├── styles.css         # Styling and layout
├── data.json          # Location data
├── package.json       # npm dependencies and scripts
├── vite.config.js     # Vite configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Data Format

The application reads types type images from folder `public/images`. Each image should be:

Format: .png
Size: 512x512 px
Have a unique name

The application reads location types from `src/data/types.json`. Each type should have:

```json
"Type Name": ".png name of type under public/images"
```

The application reads location data from `src/data/locations.json`. Each location should have:

```json
{
  "name": "Location Name",
  "id": "unique-id",
  "description": "Location description",
  "longitude": 0.0,
  "latitude": 0.0,
  "type": "Type name",
  "gameid": "id"
}
```

## Customization

- **Map Style**: Change the tile layer in `main.js` to use different map styles
- **Colors**: Update the gradient colors in `styles.css`
- **Initial View**: Adjust the `setView()` parameters in `main.js`

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast build tool and dev server
- [Leaflet.js](https://leafletjs.com/) - Interactive map library
- [OpenStreetMap](https://www.openstreetmap.org/) - Map tiles
- Vanilla JavaScript (ES6 modules)
- CSS Grid - Modern layout system

## License

This project is BSD-2 licensed and available for personal use.
