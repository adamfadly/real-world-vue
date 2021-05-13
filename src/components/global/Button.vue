<template>
  <div>
    <button class="bg-red-200 p-3 rounded w-1/2">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: "ini label buttton" }) readonly label!: string;
}
</script>

<style scoped></style>
