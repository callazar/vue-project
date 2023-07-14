<template>
  <div class="navigation">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 container"
    >
      <router-link
        to="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span class="fs-4">UKMFT-ITC</span>
      </router-link>
      <nav class="nav nav-pills"> 
        <router-link to="/" class="nav-link text-black">Home</router-link>
        <router-link to="/event" class="nav-link text-black">Event</router-link>
        <router-link to="/informasi" class="nav-link text-black">Informasi</router-link>
        <router-link to="/prestasi" class="nav-link text-black">Prestasi</router-link>
        <a href="https://vuejs.org/" class="nav-link text-black">E-Techno</a>
        <router-link to="/tentang" class="nav-link text-black">Tentang Kami</router-link>
      </nav>
    </header>
  </div>
  <router-view />
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-link {
  transition: all 0.2s;
  position: relative;
}
.nav-link:hover::after {
  content: '';
  height: 2px;
  width: 100%;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: 0;
}
.navigation {
  background-color: #c4c4c4 ;
}
</style>
