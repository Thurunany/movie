<template>
<nav class="navbar navbar-dark bg-dark shadow-sm">
    <v-app-bar>
        <a class="navbar-brand">:)</a>
        <v-form class="d-flex" role="search" >
        <v-autocomplete class="form-control me-2" type="search" placeholder="Search" aria-label="Search" :itens="movies" item-text="title" item-value="id" id="search">
            <template v-slot:item="{item}">
              <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
            </template>
            </v-autocomplete>
        </v-form> 
    </v-app-bar>
</nav>
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