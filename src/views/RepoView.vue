<template>
  <HeaderNav />
  <h2>Repos page</h2>
  <div>
    <MyRepos />
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import MyRepos from "../components/MyRepos.vue";

export default {
  name: "HomePage",
  components: {
    HeaderNav,
    MyRepos,
  },
};
</script>
