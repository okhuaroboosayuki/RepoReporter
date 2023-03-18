<template>
  <HeaderNav />
  <div class="repo_wrapper">
    <Suspense>
      <template #default>
        <div>
          <MyProfile />
          <MyRepos />
        </div>
      </template>
      <template #fallback>
        <LoaderSpinVue />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import LoaderSpinVue from "../components/LoaderSpin.vue";

const MyRepos = defineAsyncComponent(() => import("../components/MyRepos.vue"));
const MyProfile = defineAsyncComponent(() => import("../components/MyProfile.vue"));

export default {
  name: "HomePage",
  components: {
    HeaderNav,
    MyRepos,
    MyProfile,
    LoaderSpinVue,
  },
};
</script>

<style scoped>
.repo_wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}

.repo_wrapper .flower-spinner {
  align-self: center;
  margin: 18rem 0;
}
</style>
