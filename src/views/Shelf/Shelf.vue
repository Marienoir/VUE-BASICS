<template>
  <b-container fluid="sm" class="books">
    <b-row align-v="center">
      <b-col>
        <div v-if="getBookItems.length != 0">
          <div class="card" v-for="book in getBookItems" :key="book.id">
            <router-link :to="{ name: 'Details', params: { id: book.id } }">
              <img :src="book.image" />
              <div class="flex">
                <h3 class="title">{{ book.title }}</h3>
                <p class="author">{{ book.author }}</p>
              </div>
            </router-link>
            <button @click="deleteBookItem(book.id)">Delete</button>
          </div>
        </div>

        <div v-else>
          <h3 class="text-center mt-5">
            No books to view currently!! Add Books to the shelf 😃😀
          </h3>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <!-- <div class="books">
    <div class="card" v-for="book in getBookItems" :key="book.id">
      <router-link :to="{ name: 'Details', params: { id: book.id } }">
      <img :src="book.image" />
      <h3 class="title">TITLE: {{ book.title }}</h3>
      <p class="author">AUTHOR: {{ book.author }}</p>
      </router-link>
      <button @click="deleteBookItem(book.id)">Delete</button>
    </div>

</div> -->
  <!-- <div class="books">
    <div class="card" v-for="book in getBookItems" :key="book.id">
      <img :src="book.image" />
      <h3 class="title">TITLE: {{ book.title }}</h3>
      <p class="author">AUTHOR: {{ book.author }}</p>
      <button @click="deleteBookItem(book.id)">Delete</button>
      <router-link :to="{ name: 'Details', params: { id: 'details' } }"
        >Details</router-link
      >
      <router-view /> -->
  <!-- https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344267978l/6431838.jpg -->
  <!-- </div>
  </div> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      bookItems: {},
    };
  },
  computed: {
    ...mapGetters(["getBookItems"]),
  },
  methods: {
    ...mapActions(["deleteBookItem"]),
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
  width: 150px;
}
.title {
  color: black;
  font-size: 20px;
  font-weight: bold;
}
a {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  margin-top: 25px;
  padding: 10px;
  background: rgb(209, 15, 15);
  border: none;
  color: #fff;
  border-radius: 3px;
  font-weight: bold;
  text-transform: uppercase;
}
.title,
.author {
  padding: 5px;
}
</style>
