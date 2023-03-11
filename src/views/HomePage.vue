<template>
  <div class="homepage">
    <div class="hero_wrapper">
      <!-- do a text change animation -->
      <h1 class="hero_header">Welcome to <span>RepoReporter</span></h1>
      <p class="hero_text">
        where my GitHub repositories go to have a party without me! This web app is like
        the cool kids' table at lunch, except it's only for my code. So kick back, relax,
        and let RepoReporter do the heavy lifting of keeping you up to date on all my
        repositories' shenanigans.
      </p>
      <router-link to="/repos">
        <button class="call_to_action_btn">Check Out My Repos</button>
      </router-link>
    </div>
  </div>
</template>
