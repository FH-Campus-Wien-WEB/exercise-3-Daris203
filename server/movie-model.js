const movies = {
  "tt0289879":{
    "imdbID": "tt0289879",
    "Title": "The Butterfly Effect",
    "Released": "2004-01-23",
    "Runtime": 113,
    "Genres": ["Drama", "Sci-Fi", "Thriller"],
    "Directors": ["Eric Bress", "J. Mackye Gruber"],
    "Writers": ["J. Mackye Gruber", "Eric Bress"],
    "Actors": ["Ashton Kutcher","Amy Smart", "Melora Walters"],
    "Plot": "As a child, Evan Treborn was afflicted with blackouts where he would be in one place one minute and then another the next, remembering absolutely nothing in-between. Now all grown up and in college, he decides to read from an old journal he wrote to remember stuff that might have happened in the in-between, and suddenly finds himself back at a certain point in his life. He realizes that those blackouts he had were actually empty spaces of time he had to fill up later in life. Attempting to use this ability to undo unpleasant past events, Evan starts to find that every time he goes back and tries to fix things, he ends up making everything worse. How can he prevent more tragedies from happening and save the one girl he ever loved, Kayleigh (Amy Smart)?",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDk0ZDJiODEtNWM2ZC00OWYxLWExN2YtNTFlNjI4NTVmZmZmXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 30,
    "imdbRating": 7.6
  },
  "tt0137523":{
    "imdbID": "tt0137523",
    "Title": "Fight Club",
    "Released": "1999-10-15",
    "Runtime": 139,
    "Genres": ["Crime", "Drama", "Thriller"],
    "Directors": ["David Fincher"],
    "Writers": ["Chuck Palahniuk", "Jim Uhls"],
    "Actors": ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    "Plot": "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 67,
    "imdbRating": 8.8
  },
  "tt0245429":{
    "imdbID": "tt0245429",
    "Title": "Spirited Away",
    "Released": "28 Mar 2003-03-28",
    "Runtime": 124,
    "Genres": ["Animation", "Adventure", "Family"],
    "Directors": ["Hayao Miyazaki"],
    "Writers": ["Hayao Miyazaki"],
    "Actors": ["Miyu Irino", "Rumi Hiiragi", "Mari Natsuki"],
    "Plot": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse is the evil witch Yubaba, who is intent on keeping all trespassers as captive workers, including Chihiro. Chihiro must rely on Haku to save her parents in hopes of returning to their world.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore": 96,
    "imdbRating": 8.6
  }
};

function getAllMovies() {
  return Object.values(movies); // Task 1.2: Return as array
}

function getMovieById(id) {
  return movies[id];
}

function saveMovie(id, movieData) {
  const exists = !!movies[id];
  movies[id] = movieData;
  return exists; // Returns true for update, false for create
}

module.exports = {
  movies, // Task 1.1 export
  getAllMovies,
  getMovieById,
  saveMovie
};