// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

function getAllDirectors(movies) {
  const getDirectors = movies.map(movie => movie.director);
  return getDirectors;
}


// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const spielbergDramaMovies = movies.filter(function (movie) {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
        return movie;
      } 
    });
    return spielbergDramaMovies.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let average = movies.reduce(function(acc, current) {
  return acc + current.score;
  }, 0);
  let total = average / movies.length;
  return Math.round(total * 100) / 100;
  
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function(movie){
  if (movie.genre.includes("Drama")) {
  return movie;
  } 
  }); 
  
  if (dramaMovies.length === 0) { return 0}
  
  let averageDramaScore = dramaMovies.reduce(function(sum, movie){
  return sum += movie.score;
  }, 0); let average = averageDramaScore / dramaMovies.length
  return Math.round(average * 100) / 100;
  } 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let order = [];
  for (let i = 0; i < movies.length; i++) {
  order.push(movies[i])
  }
  order.sort(function(first, second){
  if (first.year === second.year) {
  if (first.title < second.title) {
  return -1;
  } 
  else if (first.title > second.title) {
  return 1;
  }
  }
  return first.year - second.year;
  }); return order;
  } 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let titleMovies = movies.map(function(movie){
    return movie.title;
  });

  titleMovies.sort(function(a,b){
    if (a > b) {
      return 1
    } else if (a > b) {
      return -1
    }
  }); return titleMovies.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
