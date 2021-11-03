<template>
<nav class="nav">
    <h1>LOGO</h1>
    <div class="links">
    <router-link to="/">Shelf</router-link>
    <router-link to="/add-shelf">Add Shelf</router-link>
    <router-view />
  </div>
</nav>
  
</template>

<script>
export default {
    name: "Navigation"
};
</script>

<style scoped>

/* nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a{
    margin-left: 20px;
} */
</style>