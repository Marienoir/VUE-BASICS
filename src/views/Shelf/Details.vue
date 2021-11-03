<template>
  <div class="books">
    <div class="card">
      <img :src="selectedBooks.image" />
      <h3 class="title">{{ selectedBooks.title }}</h3>
      <h4 class="author">{{ selectedBooks.author }}</h4>
      <p class="description">{{ selectedBooks.desc }}</p>
      <!-- https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344267978l/6431838.jpg -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Details",
  data() {
    return {
      bookItems: {},
    };
  },
  computed: {
    ...mapGetters(["getBooksById"]),
    selectedBooks() {
      const id = this.$route.params.id;
      const selectedBooks = this.getBooksById(id);
      return selectedBooks;
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 608px;
  margin: 50px auto;
  background: rgb(233, 233, 240);
  padding: 30px;
}
img {
  width: 200px;
  margin-bottom: 20px;
}
h3 {
  font-size: 25px;
  font-weight: bold;
}
h4 {
  font-size: 20px;
}
button {
  padding: 15px;
  background: blue;
  border: none;
  color: #fff;
  width: 100%;
}
.title,
.author {
  padding: 5px;
}
</style>
