<template>
  <div class="details_wrapper">
    <p class="details">
      {{ $router.currentRoute.value.params.repo }} was created on
      <span class="date">{{ state.createdAt }}</span>
    </p>
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
