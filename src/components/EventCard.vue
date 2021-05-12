<template>
  <div>
    <router-link :to="{ name: 'event-show', params: { id: event.id } }">
      <div class="w-2/4 bg-gray-100 border-2 rounded border-gray-300 shadow-lg">
        <span>@{{ event.time }} on {{ event.date }}</span>
        <div class="text-2xl">
          <h4>Title: {{ event.title }}</h4>
        </div>
        <span>{{ event.attendees }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Event } from "@/shared";
@Component
export default class EventCard extends Vue {
  @Prop(Object) readonly event!: Event;
}
</script>

<style scoped></style>
