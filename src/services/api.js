import axios from 'axios';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDE5ZWUyMzAyMmM3MDQzMjU4NjM3ZDQzZmI5NzE2ZiIsInN1YiI6IjYyYzQ3YzYyYmE0ODAyMDA3Y2E5NjdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W2DDbVA1uN2T8HqBVlgxv2cnR9lfYv87HKmi7Wh0tkw"
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})