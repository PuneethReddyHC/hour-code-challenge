<template>
  <div>
  <div class="header" id="myHeader">
  <h1>{{book.title}}</h1>
  <p>Below Lists the Chapters</p>

  <button v-for="chap in book.chapter_ids" :key="chap" class="btn" @click="getChapters(chap)">{{chap}}</button>
 
</div>

<!-- Photo Grid -->
<div class="row"> 
    
  <div class="column">
      
    <img v-for="img in chapters.book.pages" :key="img.id"  :src="img.image.file" style="width:100%">
    <img src="/w3images/rocks.jpg" style="width:100%">
    <img src="/w3images/falls2.jpg" style="width:100%">
    <img src="/w3images/paris.jpg" style="width:100%">
    <img src="/w3images/nature.jpg" style="width:100%">
    <img src="/w3images/mist.jpg" style="width:100%">
    <img src="/w3images/paris.jpg" style="width:100%">
  </div>
  
</div>
</div>
</template>

<script>
export default {
  name: 'Chapter',
  props: {
      book: {
      type: Object,
    },
  },
 
  data () {
    return {
      chapters: null
    }
  },
  mounted(){
      console.log(this.books);
      var header = document.getElementById("myHeader");
        var btns = header.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
        }
                    
    },
methods:{
    
    getChapters: function(id){
        const api = 'http://18.179.108.80:8080/chapters/' + id + '/';
        this.axios.get(api).then((response) => {
            this.chapters = response.data
        })
    }
    
                    // Get the elements with class="column"
                    

    // Add active class to the current button (highlight it)
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  padding: 32px;
}

.row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>
