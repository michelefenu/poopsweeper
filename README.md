![Deploy](https://github.com/michelefenu/poopsweeper/workflows/Deploy/badge.svg)

# :poop: PoopSweeper

PoopSweeper is a playful twist on the classic game of Minesweeper, built with the Angular framework. As a nod to pacifism, the usual mines are replaced with cartoonish poop emojis. 

This project was created as a part of my learning journey with Angular.

Live Demo: [https://michelefenu.github.io/poopsweeper/](https://michelefenu.github.io/poopsweeper/)

### Gameplay and Commands
In PoopSweeper, the goal remains similar to traditional Minesweeper: clear the board without triggering any poops. Each uncovered cell will either display a poop or the number of adjacent poops, aiding in safe navigation. 

- **Left click**: uncover a cell
- **Right click**: place a flag on a cell to mark a suspected poop, preventing accidental uncovering.


![Gameplay example](/assets/gameplay-demo.gif)

#### Note
Unlike the traditional Minesweeper, PoopSweeper starts with a bit of a twist — your first click might just uncover a poop! This adds an extra layer of challenge right from the start.

### Local Setup
To set up PoopSweeper locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/michelefenu/poopsweeper.git
```

2. Navigate to the project directory:
```bash
cd poopsweeper
```

3. Install dependencies:
```bash
npm install
```

4. Serve the application:
```bash
ng serve
```

5. Open your browser and visit http://localhost:4200/ to start playing!

> You can change the board size and the default number of poops in the [app.component.ts](https://github.com/michelefenu/poopsweeper/blob/master/src/app/app.component.ts).
