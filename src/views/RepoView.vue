<template>
  <HeaderNav />
  <div class="repo_wrapper">
    <div>
      <MyProfile />
    </div>
    <div>
      <MyRepos />
    </div>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import MyRepos from "../components/MyRepos.vue";
import MyProfile from "../components/MyProfile.vue";

export default {
  name: "HomePage",
  components: {
    HeaderNav,
    MyRepos,
    MyProfile,
  },
};
</script>

<style scoped>
.repo_wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}
</style>
