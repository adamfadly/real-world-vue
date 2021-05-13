<template>
  <div>
    <router-link to="/">Real World Vue</router-link>
    <nav>
      <router-link to="/">EventList</router-link> |
      <router-link :to="{ name: 'create-event' }">CreateEvent</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style scoped></style>
