<template>
  <section class="profile_card_wrapper">
    <div class="profile_card">
      <section class="profile_image">
        <img :src="profile.avatarUrl" alt="A picture of Osayuki" />
      </section>

      <section class="profile_desc">
        <div class="profile_bio">
          <h2 class="profile_name">My name is {{ profile.name }}</h2>
          <p class="desc">
            {{ profile.bio }} I specialize in crafting beautiful and responsive user
            interfaces that not only look great but also provide a seamless user
            experience. I take a structured approach to problem-solving, breaking down
            complex issues into smaller, more manageable parts.
          </p>
        </div>

        <div class="profile_stats">
          <div class="follows">
            <div class="followers">
              <span>{{ profile.followers }}</span> followers
            </div>
            <div class="following">
              <span>{{ profile.following }}</span> following
            </div>
          </div>

          <div class="repo_nums">
            Repositories:<span>{{ profile.publicRepos }}</span>
          </div>
        </div>

        <div class="profile_link">
          <a class="profile_anchor" :href="profile.profileUrl" target="_blank">
            view my gitHub profile
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import useProfile from "../composables/useProfile.js";

export default {
  setup() {
    const { profile } = useProfile();

    return {
      profile,
    };
  },
};
</script>

<style scoped>
.profile_card_wrapper {
  margin: 1.7rem 0;
}

.profile_card {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  flex-wrap: wrap;
}

.profile_image {
  padding-right: 3rem;
  border-right: 1px solid var(--light-shade);
  align-self: flex-start;
  justify-self: flex-start;
}

.profile_image img {
  max-width: 25rem;
  max-height: 22rem;
  border-radius: 1rem;
  box-shadow: 5px 5px 15px var(--btn-color), -5px -2px 10px var(--btn-color);
}

.profile_desc {
  text-transform: capitalize;
}

.profile_desc,
.repo_nums {
  text-align: center;
}

.profile_name,
.profile_stats,
.profile_link {
  font-family: var(--title-font);
}

.desc {
  max-width: 30rem;
}

.profile_stats {
  border: 0.5px solid var(--light-shade);
  border-radius: 10px;
  padding: 7px;
}

.profile_link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 0;
}

.profile_link a {
  color: var(--light-shade);
  text-decoration: none;
  text-align: center;
  border: 0.5px solid;
  padding: 10px 20px;
}

.profile_link a:hover {
  color: var(--btn-color);
  border: 0.5px solid var(--btn-color);
}

.follows,
.profile_stats,
.repo_nums {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 8px 5px;
}

.follows {
  padding: 5px;
}

.follows,
.repo_nums {
  border: 0.5px solid var(--btn-hover);
  border-radius: 5px;
  background-color: var(--light-shade);
  color: var(--dark-shade);
}

.followers {
  border-right: 0.5px double;
  padding-right: 15px;
}

.repo_nums {
  padding: 7px;
}

@media all and (max-width: 1025px) {
  .profile_image {
    border-right: 0;
    padding-right: 0;
  }

  .profile_bio {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .desc {
    max-width: 25rem;
  }
}

@media all and (max-width: 768px) {
  .profile_card {
    flex-direction: column;
    gap: 0;
  }

  .profile_image {
    padding-right: 0;
    align-self: center;
    justify-self: center;
  }

  .profile_image img {
    max-width: 22rem;
    max-height: 19rem;
  }

  .profile_desc {
    padding: 0;
    margin-top: 1rem;
  }

  .profile_stats {
    flex-direction: column;
    gap: 10px;
  }

  .follows {
    flex-direction: row;
  }

  .repo_nums {
    flex-direction: column;
  }
}

@media all and (max-width: 680px) {
  .desc {
    margin-top: 0;
  }
}
</style>
