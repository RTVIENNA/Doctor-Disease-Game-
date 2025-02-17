README: Doctor-Disease Game (Assignment 1)

Project Overview

This project was created as part of the DHC WS 2024 and features an interactive browser game called Doctor-Disease Game. The player observes how a doctor tries to heal a patient from various diseases.

Author: Tuan Luu 
Technologies: HTML, CSS, JavaScript

Project Structure

Assignment1.html: Contains the structure of the website.

Assignment1styles.css: Defines the design and layout of the application.

script-assignment1.js: Contains the game logic.

images/: Contains logos and background images.

scripts/: Contains the JavaScript files.

Game Description

The player observes how diseases attack the patient and how the doctor heals them. The actions are randomized and displayed visually in the canvas element.

Gameplay

Start the game: Click "Start New Game".

Next turn: Click "Next Turn" to trigger the next step in the game.

Game over: If the patient dies (health ≤ 0), the game automatically resets.

Characters and Actions

Doctor: Heals the patient by a random amount of 5–15 health points.

Diseases: Inflict random damage of 10–20 health points on the patient.

Patient: Starts with 100 health points and gains or loses points depending on the actions.

Technical Details

Canvas: Used to display game information.

DOM Manipulation: Interaction is managed via buttons.

Random Generator: Determines whether the doctor heals or a disease attacks.

Customization & Extensions

New diseases can be added in the Diseases array.

The design can be adjusted via the CSS file.



Have fun exploring the Doctor-Disease Game! 🩺🦠

