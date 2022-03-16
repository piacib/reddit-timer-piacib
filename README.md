# Reddit Timer

## How I worked on this project

- I used a free figma design to practice implementing a design and better simulate a typical work enviroment
- I used ClickUp to manage tasks
- I made branches for each part of the project and then pushed them to the main branch to better simulate how I would work on a larger project with a team where I must make my changes on a seperate branch, review them, and resolve any merge conflicts.


## How to navigate this project

- [Testing router and and displayed data](src/components/Table/Api.test.js)
- [using react router to only reload necessary data and leaving the header and footer out](src/App.js)
- [using theme to define global variables that can be easily changed for maintainability and flexibility in future design choices](src/theme.js)

## Why I built the project this way
- I structured the project such that each component and page would be easy to find and easy to add additional features on to in the future. 
- I chose to use styled components because of its increasing prevalance in the front end community
-  
## If I had more time I would change this
- Implement end to end testing with cypress
- Refactor the [api request](src/components/Table/Table.js/L38) to request all the time frames to increase the number of posts searched
