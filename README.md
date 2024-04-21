# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
MovieSpace
MovieSpace is a simple web application that allows users to search for movies using the OMDb API and view their details.

Features
Search: Users can search for movies by entering a title in the search bar and clicking the search icon.
Movie Cards: The search results are displayed as movie cards, each containing the movie's title, poster, and other details.
React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
OMDb API: The OMDb API is used to fetch movie data based on user search queries.
CSS: Custom CSS is used for styling the application's components and layout.
Usage
Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies by running npm install.
Start the development server by running npm start.
Open your browser and visit http://localhost:3000 to view the application.

if you run this project u ll get all Harry Potter movies cards on 1 page and if you click on any card u ll get details of it below the card like this 

"Harry Potter and the Prisoner of Azkaban
Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.

Directed by: Alfonso Cuarón

Starring: Daniel Radcliffe, Emma Watson, Rupert Grint

Released: 04 Jun 2004"

==============
You can try Batman , Superman ...any movies list and get details of any movie like name, directorname, starcast and release date of the movie

In App.js:

useState is used to manage the state of movies and searchTerm.
useEffect is used to trigger the initial search for movies when the component mounts.

In MovieCard.jsx:

useState is used to manage the state of isOpen (to control the modal) and details (to store additional movie details fetched from the API).
useEffect is not used directly in MovieCard.jsx, but it's utilized within the openModal function to fetch additional movie details when the modal is opened.