# Wordle Clone (React)

A word-guessing game inspired by Wordle, built using React and modern hooks.  
Players attempt to guess a hidden 5-letter word within limited attempts and receive color-coded feedback after each guess.

---

## Live Demo

https://ravi-p-k-1.github.io/Wordle-Clone/


## Features

- Keyboard-based input handling  
- Real-time tile updates  
- Color feedback system:
  - **Green** — correct letter and position  
  - **Yellow** — correct letter, wrong position  
  - **Red** — letter not in word  

- Win detection and game completion  
- Multiple guess rows  
- Random word generation using word list
- Component-based architecture  



## Built With

- React (Hooks & Functional Components)
- JavaScript (ES6+)
- CSS3
- Event-driven keyboard handling


## Project Structure
```
wordle-clone/
│
├── src/
│ ├── App.jsx # Main game logic
│ ├── Box.jsx # Tile component
│ ├── index.css # Main Styling
│ └── App.css # Styling
│
├── public/
└── README.md
```


## How to Play

1. Type a 5-letter word using your keyboard.  
2. Press **Enter** to submit.  
3. Colors will indicate accuracy.  
4. Guess the correct word to win.

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/wordle-clone.git
cd wordle-clone
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm start
```




