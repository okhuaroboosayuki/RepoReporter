<template>
  <nav class="nav_wrapper">
    <div class="logo">
      <router-link to="/repos">RepoReporter</router-link>
    </div>
    <div class="navigation">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li>
          <router-link to="/repos">Repositories</router-link>
        </li>
      </ul>
    </div>
    <div class="mobile_menu">
      <nav>
        <div class="menu_icon" @click="showMenu = !showMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="menu" v-if="showMenu">
          <div class="close_button" @click="showMenu = !showMenu"></div>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/repos">Repositories</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showMenu = ref(false);
    return { showMenu };
  },
};
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
  position: sticky;
  top: 0;
  left: 0;
  z-index: 300;
  width: 100%;
}

.logo a {
  font-size: 1.5rem;
  font-family: var(--logo-font);
}

div ul {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

div ul li {
  list-style: none;
  margin: 0 1rem;
  font-family: var(--title-font);
}

div ul li a {
  font-size: 1.2rem;
}

div ul li a:hover {
  color: var(--btn-color);
}

.router-link-exact-active {
  color: var(--btn-hover);
}

.mobile_menu {
  display: none;
}

.menu_icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--btn-color);
  transition: transform 0.3s;
}

.bar:nth-child(2) {
  margin: 5px 0;
}

.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 50vh;
  background-color: var(--dark-shade);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.menu ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.menu ul li {
  margin: 1rem 0;
  font-family: var(--title-font);
}

@media (max-width: 600px) {
  .logo {
    position: relative;
    right: 60px;
  }
  .navigation {
    display: none;
  }

  .mobile_menu {
    display: flex;
  }

  .menu_icon {
    position: relative;
    left: 70px;
  }

  .close_button {
    position: relative;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    align-self: flex-end;
    right: 47px;
    top: -92px;
  }

  .close_button::before,
  .close_button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22px;
    height: 2px;
    background-color: var(--btn-color);
  }

  .close_button::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .close_button::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

@media (max-width: 450px) {
  .menu_icon {
    position: relative;
    left: 30px;
  }
  .close_button {
    position: relative;
    right: 40px;
    top: -107px;
  }
}
</style>
