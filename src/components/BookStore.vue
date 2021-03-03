<template>
  
  <div>
    <div class="tabs">
      <button v-for="book in books" :key="book.title"
      v-on:click="activetab=book.id" v-bind:class="[ activetab === book.id ? 'active' : '' ]">{{book.title}}</button>
    </div>
    <div class="pt-2">
        <div v-for="book in books" :key="book.title+book.id">
          <div v-if="activetab === book.id" class="tabcontent">
              <chapter :chapter_ids="book.chapter_ids"></chapter>
          </div>
        </div>
        
    </div>
  </div>

</template>

<script>
// import Tabs from './Tabs.vue';
// import Tab from './Tab.vue';

import Chapter from "./Chapter.vue";
export default {
  name: 'BookStore',
  components:{
    // Tab,
    // Tabs,
    Chapter
  },
  props: {
    books: {
      type: Array
    }
  },
  data () {
    return {
      activetab: 1 
    }
  },
  mounted(){
      // const api = 'http://18.179.108.80:8080/chapters/';
      // this.axios.get(api).then((response) => {
      //       this.chapters = response.data
      //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
    background-color: rgb(1 91 92);
    color: white;
    border-color: goldenrod;
  }
</style>
