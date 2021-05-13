<template>
  <div>
    <h1 class="text-2xl text-green-900">Event {{ id }}'s show</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class EventShow extends Vue {
  @Prop() readonly id: number | undefined;
}
</script>
