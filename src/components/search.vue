<template>
  <div>
    <input
      class="search-input"
      type="search"
      @keyup.enter="onSearchInChild"
      v-model="search_input"
      placeholder="search here"
    />
  </div>
</template>
<script>
export default {
  name: "search",
  props: {
    searchdata: Function,
  },
  data() {
    return {
      search_input: "",
    };
  },
  methods: {
    onSearchInChild(search_input) {
      this.$emit("onSearchkey", this.search_input);
    },
  },
};
</script>
<style>
.search-input {
  width: 70%;
  margin: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
}
</style>
