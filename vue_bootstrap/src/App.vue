<template>
  <div>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" :class="nav_list[0].class">{{nav_list[0].name}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> -->

          <!-- v-for -->
          <li v-for="(menu,idx) in nav_list" :key="idx">
            <!-- <a class="nav-link" href="#" @click="open_modal">{{menu.name + "-" + idx}}</a> -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">{{menu.name + "-" + idx}}</button>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <button @click="increaes">클릭 수 {{count}}</button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Woo-hoo, you're reading this text in a modal!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      nav_list : [
        {name : "Hom", class:"text-primary"},
        {name : "Link", class:"text-primary"},
        {name : "Dropdown", class:"text-primary"},
        {name : "Disabled", class:"text-primary"}
      ],
      count : 0,

    }
  },

  methods: {
    increaes(){
      this.count++
    },
    // 모달창 show/hide
    open_modal(){

    }
  
  },

  components: {
  },

  created : function(){
    console.log("created!")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
