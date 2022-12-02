<template>
  <div id="app">
    <DatafetchVue />
  </div>
</template>
<script>
import DatafetchVue from "./components/Datafetch.vue";
export default {
  name: "App",
  components: {
    DatafetchVue,
  },
  data() {
    return {
      name: "Shivani Fegade",
      ctopvalue: null,
    };
  },
  methods: {
    getStatus() {
      alert("button was clicked");
    },
    getName(x) {
      alert("my name is" + " " + x);
      this.name = x;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
