const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

/* Task 1.2: Add a GET /genres endpoint:
   This endpoint returns a sorted array of all the genres of the movies
   that are currently in the movie model.
*/
app.get('/genres', function (req, res) {
  const movies = Object.values(movieModel.movies);
  let genres = new Set();
  movies.forEach(m => m.Genres.forEach(g => genres.add(g)));
  res.send([...genres].sort());
});

/* Task 1.4: Extend the GET /movies endpoint:
   When a query parameter for a specific genre is given,
   return only movies that have the given genre
 */
app.get('/movies', function (req, res) {
  let movies = Object.values(movieModel.movies);
  const filterGenre = req.query.genre;

  if (filterGenre) {
    movies = movies.filter(m => m.Genres.includes(filterGenre));
  }
  res.send(movies);
});

/*
app.get('/movies', function (req, res) {
  let movies = Object.values(movieModel)
  res.send(movies);
})
*/

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const movie = movieModel.getMovieById(req.params.imdbID);
  movie ? res.send(movie) : res.sendStatus(404);
});


app.put('/movies/:imdbID', function(req, res) {
  const id = req.params.imdbID;
  const exists = !!movieModel.getMovieById(id);
  movieModel.saveMovie(id, req.body);
  res.sendStatus(exists ? 200 : 201);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")
