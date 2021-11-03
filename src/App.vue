<template>
  <div id="app">
    <div id="nav">
      <h2>TheBookieClub</h2>
      <div class="links">
        <router-link to="/">BOOKS</router-link>
        <router-link to="/add-book">ADD A BOOK</router-link>
        <router-link to="/deleted-books">RECYCLED</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Nunito+Sans:wght@200;400;600&family=Poppins:wght@400;500&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  /* max-width: 768px;
  margin: 0 auto; */
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  color: blue;
  margin: 0 30px 0 30px;
  text-decoration: none;
  text-transform: uppercase;
}
h2 {
  font-family: "Lobster", cursive;
  font-size: 35px !important;
}
#nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
  background: blue;
  padding: 10px 20px;
  border-radius: 4px;
  border-bottom: 3px solid;
}
</style>
