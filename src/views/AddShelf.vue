<template>
  <div>
    <form>
      <div class="form-input">
        <label>Title</label>
        <input
          type="text"
          placeholder="Please Enter Book Title"
          v-model="bookData.title"
        />
      </div>
      <div class="form-input">
        <label>Author</label>
        <input
          type="text"
          placeholder="Please Enter Book Author"
          v-model="bookData.author"
        />
      </div>
      <div class="form-input">
        <label>Image</label>
        <input
          type="text"
          placeholder="Please Enter url to Book Image"
          v-model="bookData.image"
        />
      </div>
      <div class="form-input">
        <label>Description</label>
        <textarea cols="30" rows="3" v-model="bookData.desc"></textarea>
      </div>
      <button @click.prevent="handleSubmit">ADD BOOK</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddShelf",
  data() {
    return {
      bookData: {
        title: "",
        author: "",
        image: "",
        desc: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getBookItems"]),
  },
  methods: {
    ...mapActions(["addBookItem"]),
    handleSubmit() {
      const data = {
        title: this.bookData.title,
        author: this.bookData.author,
        image: this.bookData.image,
        desc: this.bookData.desc,
      };
      console.log("todo", data);
      this.addBookItem(data);
      alert("Book successfully added😉");
    },
  },
};
</script>

<style>
form {
  margin: 0 auto;
  padding-top: 30px;
  background: rgb(217, 217, 223);
  max-width: 500px;
  margin: 0 auto;
}
.form-input {
  padding: 10px 20px;
  margin: 5px;
  display: flex;
  flex-direction: column;
}
input,
textarea {
  padding: 10px;
  outline: blue;
  border: blue;
  margin-top: 5px;
}
button {
  padding: 15px;
  background: blue;
  border: none;
  color: #fff;
  width: 100%;
}
</style>