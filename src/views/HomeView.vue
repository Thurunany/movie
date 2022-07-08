<template>
  <div class="home">
    <PopularMovies />
  </div>
</template>

<script>
import PopularMovies from '@/components/PopularMovies.vue'

export default {
  name: 'Home_app',
  components: {
    PopularMovies,
}
}
</script>
