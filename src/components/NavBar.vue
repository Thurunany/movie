<template>

<div id="app">
<nav class="navbar navbar-dark shadow-sm">
  <div class="container">
    <a href="/" class="navbar-brand text-dark fs-1 fw-bold">Movie App</a>
    <v-form class="d-flex" role="search" >
      <v-autocomplete clearable hide-no-data hide-selected label="Search" flat :items="movies" item-text="title" item-value="id" id="Search">
        <template v-slot:item="{item}">
              <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
        </template>
      </v-autocomplete>
    </v-form>
  </div>
</nav>
</div>
</template>

<script>
export default {
    data:()=>({
        drawer:null,
        model:'',
        search:null,
        movies: []
    }),
    mounted(){
        this.loadMovies();
    },
    methods: {
        loadMovies: async function() {
            try{
                const response = await this.$http.get("/movie/popular");
                this.movies = response.data.results;
                
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>
<style></style>