<template>
  <div class="repo_wrapper">
    <div class="repo_list">
      <ul>
        <li v-for="repo in repos.repositories" :key="repo.id">
          {{ repo.name }}
          <!-- {{ repo.description }} -->
          {{ repo.language }}
          <!-- {{ repo.stargazers_count }} -->
          <!-- {{ repo.forks_count }} -->
          <!-- {{ repo.open_issues_count }} -->
          <!-- {{ repo.created_at }} -->
          <!-- {{ repo.updated_at }} -->
        </li>
        <!-- pagination -->
        <div>
          <!-- <button :disabled="repos.currentPage <= 1" @click="repos.currentPage--">
            Previous Page
          </button> -->
          <!-- <span>Page {{ repos.currentPage }} of {{ repos.totalRepos }}</span> -->

          <!-- <button
            v-for="page in repos.totalRepos"
            :key="page"
            :class="{ active: page === repos.currentPage }"
            @click="repos.currentPage = page"
          >
            {{ page }}
          </button> -->

          <!-- <button
            :disabled="repos.currentPage >= repos.totalRepos"
            @click="repos.currentPage++"
          >
            Next Page
          </button> -->

          <button @click="setPage(1)" :disabled="repos.currentPage === 1">First</button>
          <button
            @click="setPage(repos.currentPage - 1)"
            :disabled="repos.currentPage === 1"
          >
            Prev
          </button>
          <button
            v-for="button in pageButtons"
            :key="button.number"
            @click="setPage(button.number)"
            :disabled="button.active"
          >
            {{ button.number }}
          </button>
          <button
            @click="setPage(repos.currentPage + 1)"
            :disabled="repos.currentPage === parseInt(repos.totalRepos)"
          >
            Next
          </button>
          <button
            @click="setPage(parseInt(repos.totalRepos))"
            :disabled="repos.currentPage === parseInt(repos.totalRepos)"
          >
            Last
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import useRepos from "../composables/useRepos.js";
export default {
  setup() {
    const { repos, setPage, pageButtons } = useRepos();
    return { repos, setPage, pageButtons };
  },
};
</script>

<style scoped></style>
