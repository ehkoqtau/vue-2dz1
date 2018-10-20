<template>
  <div id="app">
    <header>
      <span>2DZ1 - D.C. BATAM</span>
    </header>
    <p></p>
    <div class="uk-container">
    <ul class="uk-breadcrumb">
        <li><router-link :to="{ path: '/'}" replace>Home</router-link></li>
        <li><router-link :to="{ path: '/cek_eod'}" replace>Cek eod</router-link></li>
        <li><router-link :to="{ path: '/pencarian_barang'}" replace>Pencarian Barang</router-link></li>
    </ul>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}


</style>

<style src='../src/assets/css/uikit.min.css'></style>
