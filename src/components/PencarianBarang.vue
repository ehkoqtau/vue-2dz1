<template>
  <div class="pencarian_barang">
    <h1>{{ header }}</h1>

      <div class="uk-margin">
        <label class="uk-form-label" for="tgl">Kode Toko</label>
        <div class="uk-form-controls">
          <input class="uk-input uk-form-width-medium uk-form-small" id="kode" type="text" placeholder="2DA5" value="2DA5">
        </div> 
      </div>
        <button class="uk-button uk-button-secondary" v-on:click="getPencarianBarang(getidkode());">Cek File</button>
        

        <div v-if="loading">
          <img src="../../src/assets/loader.gif"/>
          Loading.....
        </div>

      <div class="wrapper">
        <div class="row">
          <p></p>
              <button class="uk-button uk-button-black">TOTAL PENCARIAN : <span class="uk-badge" id="count">0</span></button>
              <p></p>
              <div align="center" v-for="(hasil, index) in data.data" :key="hasil.KD_STORE" class="uk-child-width-1-2@s" uk-grid>
                <div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">{{ index + 1 }}. {{ hasil.KD_STORE }} - {{ hasil.NAMA_STORE }}</h3>
                        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">{{ hasil.STATUS }}</button>
                        <table>
                          <tr>
                            <td>FAKTUR</td>
                            <td>:</td>
                            <td><strong>{{ hasil.FAKTUR }}</strong></td>
                          </tr>
                          <tr>
                            <td>ITEM PERMINTAAN BARANG</td>
                            <td>:</td>
                            <td><strong>{{ hasil.ITEM_PB }}</strong></td>
                          </tr>
                          <tr>
                            <td>QTY PERMINTAAN BARANG</td>
                            <td>:</td>
                            <td><strong>{{ hasil.QTY_PB }}</strong></td>
                          </tr>
                          <tr>
                            <td>ITEM BELUM CARI</td>
                            <td>:</td>
                            <td><strong>{{ hasil.ITEM_BC }}</strong></td>
                          </tr>
                          <tr>
                            <td>QTY BELUM CARI</td>
                            <td>:</td>
                            <td><strong>{{ hasil.QTY_BC }}</strong></td>
                          </tr>
                          <tr>
                            <td>ITEM SUDAH CARI</td>
                            <td>:</td>
                            <td><strong>{{ hasil.ITEM_SC }}</strong></td>
                          </tr>
                          <tr>
                            <td>QTY SUDAH CARI</td>
                            <td>:</td>
                            <td><strong>{{ hasil.QTY_SC }}</strong></td>
                          </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'pencarian_barang',
  data () {
    return {
      data: [],
      header: 'PENCARIAN BARANG',
      loading: false
    }
  },
  methods: {
    getidkode: function getidkode () {
      return document.getElementById('kode').value
    },
    getPencarianBarang: function (kode) {
      this.loading = true
      axios.get(process.env.URL_API + 'api/index.php/rest/data/pencarian_barang/' + kode.toUpperCase()).then((response) => {
        this.loading = false
        if (response.data.count > 0) {
          document.getElementById('count').innerHTML = response.data.count
          this.data = response.data
        } else {
          document.getElementById('count').innerHTML = response.data.count
        }
      })
    }
  },
  mounted () {
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
