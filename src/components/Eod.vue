<template>
  <div class="eod">
    <h1>{{ header }}</h1>

      <div class="uk-margin">
        <label class="uk-form-label" for="tgl">Tanggal EOD</label>
        <div class="uk-form-controls">
          <input class="uk-input uk-form-width-medium uk-form-small" id="tgl" type="text" placeholder="1510" value="1510">
        </div> 
      </div>

      <div class="uk-margin">
        <label class="uk-form-label" for="tgl">Kode Toko</label>
        <div class="uk-form-controls">
          <input class="uk-input uk-form-width-medium uk-form-small" id="kode" type="text" placeholder="2DA5" value="2DA5">
        </div> 
      </div>
        <button class="uk-button uk-button-secondary" v-on:click="getEOD(getidkode(),getidtgl());">Cek File</button>
        

        <div v-if="loading">
          <img src="../../src/assets/loader.gif"/>
          Loading.....
        </div>

      <div class="wrapper">
        <div class="row">
          <p></p>
              <button class="uk-button uk-button-primary" id="count">TOTAL EOD : 0</button>
              <p></p>
              <div align="center" v-for="(hasil, index) in data.items" :key="hasil.name" class="uk-child-width-1-2@s" uk-grid>
                <div>
                    <div class="uk-card uk-card-default uk-card-small uk-card-body">
                        <h3 class="uk-card-title">{{ index + 1 }}. {{ hasil.name }}</h3>
                        <div class="uk-card-badge uk-label">{{ hasil.size }}</div>
                        <p>Create : {{ hasil.time_create }}</p>
                        <p>Modified : {{ hasil.time_modified }}</p>
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
  name: 'eod',
  data () {
    return {
      data: [],
      header: 'CEK FILE EOD',
      loading: false
    }
  },
  methods: {
    changetgl: function changetgl () {
      var today = new Date()
      var dd = today.getDate()
      var mm = today.getMonth() + 1

      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      return dd + '' + mm
    },
    getidtgl: function getidtgl () {
      return document.getElementById('tgl').value
    },
    getidkode: function getidkode () {
      return document.getElementById('kode').value
    },
    getEOD: function (kode, tgl) {
      this.loading = true
      axios.get(process.env.URL_API + 'api/index.php/rest/data/file_eod/' + tgl + '/' + kode).then((response) => {
        this.loading = false
        if (response.data.items != null) {
          if (response.data.count != null) {
            document.getElementById('count').innerHTML = 'TOTAL EOD : ' + response.data.count
          } else {
            document.getElementById('count').innerHTML = 'FILE EOD TIDAK ADA'
          }
          this.data = response.data
        } else {
          document.getElementById('count').innerHTML = 'FILE EOD TIDAK ADA'
        }
      })
    }
  },
  mounted () {
    var changetgl = this.changetgl()
    if (changetgl != null) {
      document.getElementById('tgl').value = this.changetgl()
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
