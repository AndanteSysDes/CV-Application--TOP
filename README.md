# CV Generator

It is a simple CV Generator using React and Typescript. User can put their information and save it.

## Back ground of development

This was part of The Odin Project's React Course. 
Since I hadn’t done any serious front-end development for a few years, I took on this project to refresh my skills.
Since the main goal is to refresh my memory on how to write React code, I’ve kept it simple and limited the features to the bare minimum.

### Topics I Caught Up On
#### React
 - Component
 - Props
 - State

#### Typescript
 - Primitive type
 - Tuples
 - Union type
 - Type Inference (For maintainability I didn't specify the return value of function components.)

#### The others 
 - Currently, “Vite” is recommended over “Create React App” to make a React application.
 - Class component are replaced by function component.
 - By using React hooks, State and lifecycle method in Class components can be used.

## Demo
[Demo page](https://cv-application-79huzzn5a-andantesysdes-projects.vercel.app/)

<img width="1326" height="1545" alt="image" src="https://github.com/user-attachments/assets/65ba69d3-cfbd-4d0d-a25c-f7d3aac677d7" />

## Highlights
I manage the status of data — whether it is in draft or final form — by switching between display cards and edit cards. 
This improves code readability and maintainability. I focused on ensuring that the roles of each component are clearly defined.

Data is managed using an array that contains objects.(Tuple type)
Reasons:
  - Arrays ensure the display order of each item
  - Multiple items, such as internal keys and display labels, are managed within objects.

## Features to be added
- Add multiple entries for education and work Experience
- CSS Modernization
  - Using Tailwind CSS or something like that.
  - More user friendly UI/UX
  - Uniform Fonts for Input and Display Values
- Add preview feature
- Add PDF download feature
- Limit the active card to a single location on the page.
