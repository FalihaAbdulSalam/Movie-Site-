<template>
    <div class="container">
      <h1>{{ movie.title }}</h1>
      <div class="row">
        <div class="col-md-4">
          <img :src="movie.poster" alt="Movie Poster">
        </div>
        <div class="col-md-8">
          <p><strong>Genre:</strong> {{ movie.genres.join(', ') }}</p>
          <p><strong>Plot:</strong> {{ movie.overview }}</p>
          <p><strong>Release Date:</strong> {{ formatDate(movie.release_date) }}</p>
          
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <router-link to="/" class="btn btn-secondary mt-3">Back to Home</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MovieDetails',
    data() {
      return {
        movie: {},
      }
    },
    created() {
      this.fetchMovie();
    },
    methods: {
      fetchMovie() {
        axios({
          method: 'GET',
          url: 'assets/json/movies.json'
        }).then(response => {
          const movies = response.data;
          const movieId = this.$route.params.id;
          this.movie = movies.find(movie => movie.id === movieId);
        }).catch(error => {
            // eslint-disable-next-line
          console.error(error);
        });
      },
     
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date * 1000).toLocaleDateString('en-US', options);
      }
    }
  }
  </script>
  
  <style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .col-md-4 {
    flex: 1;
    margin-right: 20px;
    max-width: 300px;
  }
  
  .col-md-4 img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .col-md-8 {
    flex: 2;
  }
  
  
  @media only screen and (max-width: 767px) {
    .row {
      flex-direction: column;
    }
    
    .col-md-4 {
      margin-right: 0;
      margin-bottom: 20px;
      max-width: 100%;
    }
  }
  </style>
  