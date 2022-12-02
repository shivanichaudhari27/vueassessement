<template>
  <div>
    <p>API Data</p>
    <searchVue @onSearchkey="onSearch" />

    <div
      class="data"
      v-on:click="getData"
      v-for="item in listItems.slice(offSet, offSet + perPageLimit)"
      :key="item.id"
    >
      <div class="id">{{ item.id }}</div>
      <div class="title">{{ item.title }}</div>
      <div class="body">{{ item.body }}</div>
      <div class="userid">{{ item.userId }}</div>
    </div>

    <h1>{{ storeValue }}</h1>
    <button @click="updateUserData">updateuserData</button>

    <pagination
      :perPageLimit="perPageLimit"
      :lengthCount="userLength"
      @getBatch="getBatch"
      v-if="listItems.length"
    />
  </div>
</template>
<style>
.data {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  padding: 10px;
  border: 1px solid black;
}
.id {
  width: 10%;
}
.title {
  width: 30%;
}
.body {
  width: 30%;
}
.userid {
  width: 10%;
}
</style>
<script>
import searchVue from "./search.vue";
import pagination from "./pagination.vue";
export default {
  name: "Datafetch",
  components: {
    searchVue,
    pagination,
  },
  data() {
    return {
      info: "",
      listItems: [],
      offSet: 0,
      perPageLimit: 10,
    };
  },
  methods: {
    async getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const finalRes = await res.json();
      this.listItems = finalRes;
    },
    searchData(search_input) {
      listItems.includes(search_input);
    },
    onSearch(searchRes) {
      const searchData = searchRes.trim();
      this.listItems = this.listItems.filter((item) => {
        if (
          item.title.includes(searchData) ||
          item.body.includes(searchData) ||
          item.userId === parseInt(searchData)
        )
          return true;

        return false;
      });
    },
    getBatch(pageNumber) {
      this.offSet = this.perPageLimit * (pageNumber - 1);
    },
    updateUserData() {
      this.$store.commit("setUpdateUserData", this.listItems);
    },
  },
  async mounted() {
    await this.getData();
  },
  computed: {
    userLength() {
      return this.listItems.length;
    },
    storeValue() {
      return this.$store.getters.getStoreValue;
    },
  },
};
</script>
