<template>
  <div>
  <b-card no-body v-if="books">
    <b-tabs card>

      <b-tab v-for="book in books" :key="book.id" no-body :title="book.title">
         <Chapter :book="book" /> 
        <b-card-img bottom src="https://media.gettyimages.com/photos/stack-of-books-in-home-interior-picture-id532852345?s=2048x2048" alt="Image 21"></b-card-img>
        <b-card-footer>Picture 1 footer</b-card-footer>
      </b-tab>


      
    </b-tabs>
  </b-card>
</div>
</template>

<script>
import Chapter from "../components/Chapter.vue";
export default {
  name: 'Home',
  components:{
      Chapter
  },
  data () {
    return {
      books: null
    }
  },
  mounted(){
      const api = 'http://18.179.108.80:8080/books/';
      this.axios.get(api).then((response) => {
            console.log(response.data)
            this.books = response.data
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
