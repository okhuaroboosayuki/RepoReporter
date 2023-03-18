<template>
  <HeaderNav />
  <div class="single_repo_wrapper">
    <h3>{{ $router.currentRoute.value.params.repo }}</h3>
    <div class="single_repo_links">
      <router-link :to="`/repos/${repositoryName}/commits`"
        >number of Commits</router-link
      >
      <router-link :to="`/repos/${repositoryName}/languages`">Languages used</router-link>
      <router-link :to="`/repos/${repositoryName}/createdAt`">date created</router-link>
      <router-link :to="`/repos/${repositoryName}/license`">license</router-link>
    </div>
  </div>
  <RouterView />

  <div class="repo_link">
    <router-link to="/repos">Go back</router-link>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import useRepos from "../composables/useRepos";
import { useRouter } from "vue-router";

export default {
  components: {
    HeaderNav,
  },
  setup() {
    const { repos } = useRepos();
    const router = useRouter();

    const repositoryName = router.currentRoute.value.params.repo;

    return {
      repos,
      repositoryName,
    };
  },
};
</script>

<style>
.single_repo_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.5px solid var(--light-shade);
}

.single_repo_wrapper h3 {
  text-transform: uppercase;
}

.single_repo_links,
.repo_link {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 1rem;
}

.single_repo_links a,
.repo_link a {
  background-color: var(--dark-shade);
  color: var(--light-shade);
  padding: 5px 10px;
  margin-top: 0.5rem;
  border: 0.5px solid var(--light-shade);
  border-radius: 5px;
  margin-right: 5px;
  font-size: 0.8rem;
  text-transform: capitalize;
}

.single_repo_links a:hover,
.repo_link a:hover {
  background-color: var(--light-shade);
  color: var(--dark-shade);
}

.details_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details {
  padding: 1rem;
  text-transform: capitalize;
}

.details h4 {
  font-weight: lighter;
}

.details li {
  margin: 0.5rem;
  list-style-type: disc;
}

.commit,
.date {
  color: var(--btn-hover);
}

.router-link-active {
  color: var(--btn-hover) !important;
}

@media all and (max-width: 680px) {
  .single_repo_links {
    flex-direction: column;
  }
}
</style>
