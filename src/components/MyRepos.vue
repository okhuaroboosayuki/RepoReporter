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

        <div class="repo_topics">
          <span class="topic" v-for="topic in repo.topics" :key="topic">{{ topic }}</span>
        </div>

        <div class="view_more">
          <router-link :to="{ name: 'Repo', params: { repo: repo.name } }">
            <button>view more</button>
          </router-link>
        </div>
      </li>
    </ul>

    <!-- pagination -->
    <div class="pagination">
      <div class="first_set_btn">
        <button
          @click="setPage(1)"
          :disabled="repos.currentPage === 1"
          :class="repos.currentPage === 1 ? 'disabled' : 'first_btn'"
        >
          First
        </button>
        <button
          @click="setPage(repos.currentPage - 1)"
          :disabled="repos.currentPage === 1"
          :class="repos.currentPage === 1 ? 'disabled' : 'prev_btn'"
        >
          Prev
        </button>
      </div>

      <button
        v-for="button in pageButtons"
        :key="button.number"
        @click="setPage(button.number)"
        :disabled="button.active"
        :class="button.active ? 'active_btn' : 'normal_btn'"
      >
        {{ button.number }}
      </button>

      <div class="last_set_btn">
        <button
          @click="setPage(repos.currentPage + 1)"
          :disabled="repos.currentPage === parseInt(repos.totalRepos)"
          :class="
            repos.currentPage === parseInt(repos.totalRepos) ? 'disabled' : 'next_btn'
          "
        >
          Next
        </button>
        <button
          @click="setPage(parseInt(repos.totalRepos))"
          :disabled="repos.currentPage === parseInt(repos.totalRepos)"
          :class="
            repos.currentPage === parseInt(repos.totalRepos) ? 'disabled' : 'last_btn'
          "
        >
          Last
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import useRepos from "../composables/useRepos.js";

export default {
  setup() {
    const { repos, setPage, pageButtons } = useRepos();

    // getClass replace spaces with underscores and add "repo_" prefix
    const getClass = computed(() => (name) => {
      return "repo_" + name.replace(/ /g, "_");
    });

    return {
      repos,
      getClass,
      setPage,
      pageButtons,
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
  max-width: 30rem;
}

.repo_altschool-react,
.repo_Entre-Konnect,
.repo_QR-code-component,
.repo_RepoReporter {
  align-self: flex-start;
  right: 20rem;
}
.repo_RepoReporter {
  max-width: 30rem;
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
  margin-bottom: 1rem;
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

.repo_topics {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.topic {
  background-color: var(--dark-shade);
  color: var(--light-shade);
  padding: 5px 10px;
  margin-top: 0.5rem;
  border: 0.5px solid var(--light-shade);
  border-radius: 5px;
  margin-right: 5px;
  font-size: 0.8rem;
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
  margin-top: 1rem;
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

.pagination {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.pagination button {
  padding: 10px 15px;
  margin-left: 7px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 0.5px solid var(--btn-hover);
  color: var(--light-shade);
}

.normal_btn:hover {
  background-color: var(--btn-hover);
  color: var(--light-shade);
}

.disabled {
  background-color: grey !important;
  cursor: not-allowed !important;
}

.first_btn,
.prev_btn,
.next_btn,
.last_btn,
.active_btn {
  background-color: var(--light-shade) !important;
  color: var(--dark-shade) !important;
}

.first_btn:hover,
.prev_btn:hover,
.next_btn:hover,
.last_btn:hover {
  background-color: var(--dark-shade) !important;
  color: var(--light-shade) !important;
}

.first_set_btn,
.last_set_btn {
  display: flex;
  gap: 3px;
}

.first_set_btn {
  margin-right: 3px;
}

.last_set_btn {
  margin-left: 3px;
}

@media all and (max-width: 1180px) {
  .repo_altschool-opensource-names,
  .repo_Blog-App,
  .repo_counter-app,
  .repo_okhuarobo-osayuki-assignment-02,
  .repo_okhuaroboosayuki,
  .repo_react-calculator,
  .repo_React-Router,
  .repo_vue-composable {
    align-self: center;
    left: 0rem;
  }

  .repo_altschool-react,
  .repo_Entre-Konnect,
  .repo_QR-code-component,
  .repo_RepoReporter {
    align-self: center;
    right: 0rem;
  }

  .repo_list {
    padding: 0;
    gap: 1.2rem;
  }
}

@media all and (max-width: 680px) {
  .repo_list {
    padding: 0;
    gap: 1.2rem;
  }

  .next_btn,
  .last_btn,
  .last_set_btn .disabled {
    margin-top: 0.5rem;
  }
}

@media all and (max-width: 450px) {
  .normal_btn,
  .disabled,
  .active_btn,
  .first_btn,
  .prev_btn {
    margin-top: 0.5rem;
  }
}
</style>
