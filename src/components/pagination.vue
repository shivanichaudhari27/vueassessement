<template>
  <div>
    <p>pagination</p>
    <button
      class="pagebtn"
      v-for="number in pageCount"
      :key="number"
      @click="getBatch(number)"
    >
      {{ number }}
    </button>
  </div>
</template>
<script>
export default {
  name: "pagination",
  props: {
    totalUsers: Number,
    lengthCount: Number,
    perPageLimit: Number,
  },
  data() {
    return {
      pageCount: 0,
    };
  },
  methods: {
    paginate() {
      let pageCount = this.lengthCount / this.perPageLimit;

      this.pageCount = Math.ceil(pageCount);
      console.log(pageCount);
    },
    getBatch(number) {
      this.$emit("getBatch", number);
    },
  },
  mounted() {
    this.paginate();
  },
};
</script>
<style>
.pagebtn {
  margin: 5px;
}
</style>
