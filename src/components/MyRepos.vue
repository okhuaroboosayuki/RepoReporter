<template>
  <div class="repo_wrapper">
    <h2>Repos unleashed</h2>
    <ul class="repo_list">
      <li v-for="repo in repos.repositories" :key="repo.id" :class="getClass(repo.name)">
        <div class="repo_name">
          <h3>
            <router-link :to="{ name: 'Repo', params: { repo: repo.name } }">{{
              repo.name
            }}</router-link>
          </h3>
        </div>
        <div class="repo_desc">
          <p>{{ repo.description ? repo.description : "no description" }}</p>
        </div>

        <div class="view_more">
          <router-link :to="{ name: 'Repo', params: { repo: repo.name } }">
            <button>view more</button>
          </router-link>
        </div>
      </li>
    </ul>
    <!-- pagination -->
    <PaginatedButtons />
  </div>
</template>

<script>
import PaginatedButtons from "./PaginatedButtons.vue";
import { computed } from "vue";
import useRepos from "../composables/useRepos.js";

export default {
  components: {
    PaginatedButtons,
  },
  setup() {
    const { repos } = useRepos();

    // getClass replace spaces with underscores and add "repo_" prefix
    const getClass = computed(() => (name) => {
      return "repo_" + name.replace(/ /g, "_");
    });

    return {
      repos,
      getClass,
    };
  },
};
</script>

<style scoped>
.repo_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--light-shade);
  padding-bottom: 2rem;
  text-transform: capitalize;
}

.repo_wrapper h2 {
  color: var(--light-shade);
  font-family: var(--title-font);
  margin-top: 2.1rem;
}

.repo_list {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.repo_altschool-opensource-names,
.repo_Blog-App,
.repo_counter-app,
.repo_okhuarobo-osayuki-assignment-02,
.repo_okhuaroboosayuki,
.repo_react-calculator,
.repo_React-Router,
.repo_vue-composable {
  align-self: flex-end;
  left: 20rem;
}

.repo_altschool-react,
.repo_Entre-Konnect,
.repo_QR-code-component,
.repo_RepoReporter {
  align-self: flex-start;
  right: 20rem;
}

@keyframes glowing {
  0% {
    box-shadow: 0 1px 3px var(--btn-hover);
  }

  50% {
    box-shadow: 0 1px 10px var(--btn-hover);
  }

  100% {
    box-shadow: 0 1px 20px var(--btn-hover);
  }
}

li {
  border: 0.5px solid var(--light-shade);
  border-radius: 10px;
  animation: glowing 1500ms infinite, slideInLeft 1.5s ease-in-out;
  padding: 20px 30px;
  position: relative;
}

li h3 a,
button a {
  color: var(--btn-hover);
}

li h3 a:hover {
  color: var(--btn-color);
}

li h3 {
  font-family: var(--title-font);
  font-weight: normal;
}

.repo_desc {
  max-width: 35rem;
  font-size: 0.9rem;
}

.view_more {
  align-self: flex-end;
}

.view_more button {
  background-color: transparent;
  color: var(--btn-color);
  outline: none;
  border: 0.3px solid var(--light-shade);
  padding: 15px;
  font-size: 0.9rem;
  text-transform: capitalize;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 1s ease-in-out;
  transform: perspective(500px) rotateY(45deg);
  animation: buttonAnimation 1s both infinite;
}

.view_more button:hover {
  animation: buttonHoverAnimation 1s both infinite;
  background-color: var(--btn-hover);
  color: var(--dark-shade);
}

button a:hover {
  color: var(--dark-shade);
}
</style>
