<template>
  <div class="details_wrapper">
    <p class="details">{{ state.license }}</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useRepoDetails from "../../composables/useRepoDetails.js";
export default {
  setup() {
    const router = useRouter();
    const repositoryName = router.currentRoute.value.params.repo;
    const { state } = useRepoDetails(repositoryName);

    return { state };
  },
};
</script>
