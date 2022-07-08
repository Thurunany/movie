<template>
<div>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                        <router-link :to="`/movie/${movie.id}`">
                            <v-img :src="posterPath" alt="" class=""/>
                        </router-link> 
                    </v-card>
                </v-hover>
            </v-col>  
            <v-col cols="12" sm="8">
                  <h1 class="display-3 fst-italic">{{this.movie.title}}</h1>
                <v-row>
                  
                    <v-col cols="12" sm="2">
                        <v-rating :value="movie.vote_average / 2" color="amber" dense half-increments readonly size="14" > </v-rating>
                    </v-col>

                    <v-col cols="12" sm="3">
                        <span class="gray--text ml-n7">
                            {{movie.vote_average * 10}}% | {{movie.release_date}}
                        </span>
                    </v-col>

                    <v-col cols="12" sm="7">
                        <div class="subtitle-2 grey--text ml-n16">
                            <span v-for="(item, index) in movie.genres" :key="index" class="ml-1">
                                {{item.name}}
                                <span v-if="(movie.genres.length - 1 != index)">,</span>
                                </span> 
                        </div>
                    </v-col>
               <hr>
                </v-row>

                <p class="lead my-3">{{this.movie.overview}}</p>
                <hr>
                <div class="mt-5">
                    <h2 class="blog-post-title mb-1">Featured Cast:</h2>
                    <div :key="index" v-for="(crew, index) in movie.credits.crew" class="mt-5">
                        <div v-if="index < 2" class="">
                            <h3>{{crew.name}}</h3>
                            <span class="lead my-3">{{crew.job}}</span>
                        </div>
                    </div>
                </div>
                    
            </v-col>
        </v-row>
    </v-container>      
  </div>
</template>

<script>
export default {
   data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
      },
    };
  },
  mounted() {
    this.fetchMovie(this.$route.params.id);
  },
   watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
  },
   computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  methods: {
    async fetchMovie(movieId) {
      const response = await this.$http.get(
        "/movie/" + movieId + "?append_to_response=credits,videos,images"
      );
      this.movie = response.data;
    },
  },
  
}
</script>

<style></style>