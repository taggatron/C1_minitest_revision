# Chemistry C1 Mini-Test Revision Flashcards

An interactive web application for studying Chemistry C1 mini-test topics through digital flashcards.

## Features

- **16 Chemistry Questions**: Coverage of key C1 topics including:
  - Structure of the atom (sub-atomic particles, nucleus)
  - Development of atomic models (Bohr model)
  - Atomic size and isotopes
  - Arrangement of elements in the Periodic Table
  - Group patterns and ion formation (Groups 1 and 6)
  - Covalent bonding and structure (diamond, graphite, chlorine)
  - Metals vs non-metals and conductivity
  - Changes of state and particle explanations

- **Interactive Flashcards**: 
  - Click any card to flip between question and answer
  - Smooth 3D flip animations
  - Color-coded design (blue front, gradient blue back)
  - Hover effects for better user experience

- **Responsive Design**: 
  - Works on desktop, tablet, and mobile devices
  - Grid layout automatically adjusts to screen size
  - Staggered loading animations

- **Reset Functionality**: 
  - "Reset All Cards" button to flip all cards back to questions
  - Perfect for starting a new study session

## How to Use

### Method 1: Local Web Server (Recommended)
1. Open Terminal/Command Prompt
2. Navigate to the project folder:
  ```bash
  cd "/Users/macbookname/C1_minitest_revision"
  ```
3. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser and go to: `http://localhost:8000`

### Method 2: Direct File Opening
1. Double-click the `index.html` file
2. It should open in your default web browser

## Study Tips

1. **First Pass**: Read through all questions first to identify knowledge gaps
2. **Active Testing**: Click cards to test yourself before revealing answers
3. **Spaced Repetition**: Focus more time on questions you find difficult
4. **Reset and Retry**: Use the reset button to test yourself multiple times
5. **Mobile Study**: The app works great on phones for studying on the go

## File Structure

```
C1_minitest_revision/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # JavaScript functionality and flashcard data
└── README.md       # This documentation file
```

## Question Topics Covered

1. **Particles & Models**: Protons, neutrons, electrons and their charges
2. **Atomic Models Over Time**: Bohr’s model with electrons in fixed energy levels
3. **Size and Mass of Atoms**: Approximate atomic size and where mass is located
4. **Isotopes**: Same number of protons, different numbers of neutrons
5. **Periodic Table**: Arrangement by increasing atomic number
6. **Groups and Reactivity**: Group number and outer-shell electrons (Groups 1–7)
7. **Ions**: Formation of anions, Group 1 ions (e.g. Rb⁺), and Group 6 ions (X²⁻)
8. **Covalent Bonding**: Shared pairs of electrons
9. **Bonding and Properties**: Diamond vs chlorine melting points
10. **Metals vs Non-metals**: Electrical conductivity as a key property
11. **Changes of State**: Condensation of bromine (gas → liquid)
12. **Giant and Simple Structures**: Graphite layers and polymer intermolecular forces

## Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries required
- **Modern CSS**: Uses CSS Grid, Flexbox, and 3D transforms
- **ES6 JavaScript**: Modern JavaScript features for clean, readable code
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern web browser with CSS3 and ES6 support

---

Created for Chemistry C1 Mini-Test Revision - good luck with your studies! ⚗️🧪