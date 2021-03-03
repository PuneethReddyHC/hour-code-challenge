<template>
  <div class="container">
    <div class="card">
      <div class="d-flex justify-content-center p-2">

          <book-store :books="books"></book-store>
        
      </div>
    </div>
</div>
</template>

<script>

import BookStore from "../components/BookStore.vue";
export default {
  name: 'Home',
  components:{
    BookStore
  },
  data () {
    return {
      api:"http://18.179.108.80:8080/",
      books: null
    }
  },
  mounted(){
      const books_api = this.api + "books/";
      this.axios.get(books_api).then((response) => {
            this.books = response.data
        })
      
  },
  // methods:{
  //   getChapter(book_id){
      
  //     const chapters_api = this.api + "chapters/" + book_id +  "/";
  //     this.axios.get(chapters_api).then((response) => {
  //           this.Chapter = response.data
  //       })
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding-left: 0px;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.active {
  background-color: rgb(1 91 92);
  color: white;
}
</style>
