## Activity 5

Author:  AA'Laysha Gibson

Date:  03/15/2026

## Introduction
Activity 5 addresses how React applications use state and props to handle and render dynamic data. In React Music App Introduction, a simple music app is built, in which reusable components are used to show album information. In the State Changer Demo app, React state is shown and explains how data is changed and updated in the UI, and how those changes will trigger updates to the interface. Lastly, in Using State and Props in the Music Application, this concept is extended by holding album info in a state variable and using props to pass that info to each of the card components. These exercises, in unison, show the reader how React utilizes state management and communication between components to develop dynamic and interactive applications.

## Test Link 

http://localhost:3000


## Commands 
```bash
npx create-react-app music
npx create-react-app statechanger
cd music
cd statechanger
npm install
npm start
```
##  Activity 5 Example 
![screenshot1](Project1.png)

 ##  Deliverables
 ![screenshot2](Project2.png)
 
 ## Conclusion
 In Activity 5, I discovered how React apps display dynamic data using state and props, along with the components used to structure and display album data in the React Music App Introduction. I used the State Changer Demo to illustrate how a state variable can update the user interface through changes in the state variable and user interaction. I later updated the Music Application to have a state variable that stores album data and incorporated the map function to dynamically create multiple card components. Overall, the activity increased my knowledge of React components and state management and how props enable the interaction and data transfer within web applications.

## Troubleshooting 

|Issue|Solution|
|--|--|
|Images not showing|Placed images in the src folder and imported them properly in App.js|
|Cards stacked vertically|Added a .container flexbox style in App.css|
|Albums not rendering|Fixed the map() function to loop through albumList and render Card components|