<template>
<v-hover v-slot="{hover}" open-delay="200" class="col">
    <v-card :elevation="hover ? 16:2" :class="{'on-hover' : hover}" class="card-body" height="100%">
      <v-img :src="posterPath" class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></v-img>
        <v-card-title class="subtitle-2">{{movie.title}}</v-card-title>
        <v-card-text class="card-text align-items-center">
            <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                  {{genreTypeName(genre, index)}}
            </span>
            <div class="d-flex justify-content-between align-items-center"> 
                <!-- Checar se o botão funciona mais tarde! -->
                <v-btn depressed :to="`/movie/${movie.id}`">Info</v-btn>
                <small class="text-muted my-4 subtitle-2 ">
                  <v-rating :value="movie.vote_average / 2" color="amber" dense half-increments readonly size="14"> </v-rating>
                <div class="grey--text ml-4">
                  {{movie.vote_average * 10}} % | {{movie.release_date}}
                </div>
                </small>
            </div>
        </v-card-text>
    </v-card>
</v-hover>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
     genres: {
      required: true,
    }
  },
  computed: {
    posterPath(){
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
    }
  },
  methods: {
    genreTypeName(genraId, index) {

      for(const item of this.genres) {
        if(item.id == genraId) {
          if(this.movie.genre_ids.length - 1 == index){
            return item.name ;
          }else {
            return item.name + ",";
          }
          
        }
      }
    }
  }
}
</script>

<style></style>