<template>
  <div class="details_wrapper">
    <ul v-if="state.languages.length" class="details">
      <h4>
        the following languages are used in {{ $router.currentRoute.value.params.repo }}
      </h4>
      <li v-for="language in state.languages" :key="language">
        {{ language ? language : "No language" }}
      </li>
    </ul>
    <p v-else-if="!state.languages.length">No languages</p>
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
