<template>
  <div >
    <h1>Welcome to movies!</h1>
    <input type="text" placeholder="Search by movie name" v-model="searchQuery" @keyup="searchMovies">
    <div class="row" v-if="searchResults.length">
      <div class="col-md-3 p-4" v-for="movie in searchResults" :key="movie.id" >
        <router-link :to="{ name: 'movieDetails', params: { id: movie.id } }">
          <div class="card">
            <img class="card-img-top" :src="movie.poster" alt="Movie Poster">
            <div class="card-body">
              <h6 class="card-title">{{movie.title}}</h6>
              <button class="btn btn-primary" @click="toggleFavorite(movie)">
                <span v-if="movie.isFavorite">Remove from favorites</span>
                <span v-else>Add to favorites</span>
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <p v-else>No movies found.</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      movies: [],
      searchQuery: '',
      searchResults: []
    }
  },
  mounted() {
    axios({
      method: "GET",
      "url": "assets/json/movies.json"
    }).then(response => {
      this.movies = JSON.parse(JSON.stringify(response.data));
      this.searchResults = this.movies;
      
      // load favorite state from localStorage
      this.movies.forEach(movie => {
        const isFavorite = localStorage.getItem(`movie_${movie.id}_is_favorite`);
        if (isFavorite) {
          movie.isFavorite = JSON.parse(isFavorite);
        } else {
          movie.isFavorite = false;
        }
      });
    }, error => {
      // eslint-disable-next-line
      console.error(error);
    });
  },
  methods: {
    searchMovies() {
      this.searchResults = this.movies.filter(movie => movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    toggleFavorite(movie) {
      movie.isFavorite = !movie.isFavorite;
      localStorage.setItem(`movie_${movie.id}_is_favorite`, movie.isFavorite);
    }
  }
}
</script>
