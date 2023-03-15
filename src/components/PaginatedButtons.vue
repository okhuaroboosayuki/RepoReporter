<template>
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
</template>

<script>
import useRepos from "../composables/useRepos.js";

export default {
  setup() {
    const { repos, setPage, pageButtons } = useRepos();

    return {
      repos,
      setPage,
      pageButtons,
    };
  },
};
</script>

<style scoped>
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
  background-color: var(--btn-hover);
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
</style>
