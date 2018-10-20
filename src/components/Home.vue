<template>
  <div class="home">
    <h1>{{ header }}</h1>
    <p>Halaman utama</p>
  </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      header: 'Halaman Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
