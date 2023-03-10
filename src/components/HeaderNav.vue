<template>
  <div class="nav_wrapper">
    <div class="logo">
      <router-link to="/">RepoReporter</router-link>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li>
          <router-link to="/">Repositories</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: var(--light-shade);
}
.nav_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem 0.4rem;
  background: linear-gradient(145deg, rgba(36, 40, 48, 0.8), rgba(20, 20, 20, 0.8));
  box-shadow: 5px 5px 15px var(--btn-color), -15px -15px 25px var(--btn-color);
}

.logo a {
  font-size: 1.5rem;
  font-family: var(--logo-font);
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

nav ul li {
  list-style: none;
  margin: 0 1rem;
  font-family: var(--title-font);
}

nav ul li a {
  font-size: 1.2rem;
}

nav ul li a:hover {
  color: var(--btn-color);
}

@media (max-width: 420px) {
  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 0.5rem 0;
  }

  nav ul {
    padding: 10px;
    border: 1px solid var(--light-shade);
    border-radius: 5px;
  }
}
</style>
