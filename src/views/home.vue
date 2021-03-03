<template>
  <div>
  <b-card no-body v-if="books">
    <b-tabs card>

      <b-tab v-for="book in books" :key="book.id" no-body :title="book.title">
         <chapter :book="book"> </chapter>
        
        <b-card-footer>{{book.id}}</b-card-footer>
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
            this.books = response.data
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
