<template>
  <div class="books">
    <div v-if="getDeletedBookItems.length === 0">
      <h3 class="text-center mt-5">No recycled books currently!! 👌👌</h3>
    </div>
    <div class="card" v-for="book in getDeletedBookItems" :key="book.id">
      <img :src="book.image" />
      <h3 class="title">{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <button @click="restoreBookItem(book.id)">Restore</button>
      <!-- https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344267978l/6431838.jpg -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DeletedBooks",
  computed: {
    ...mapGetters(["getDeletedBookItems"]),
  },
  methods: {
    ...mapActions(["restoreBookItem"]),
  },
};
</script>

<style>
.card {
  max-width: 608px;
  margin: 50px auto;
  background: rgb(233, 233, 240);
  padding: 30px;
}
img {
  width: 100px;
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