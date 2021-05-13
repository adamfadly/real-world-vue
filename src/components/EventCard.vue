<template>
  <div class="mb-3">
    <router-link :to="{ name: 'event-show', params: { id: event.title } }">
      <div
        class="
          w-1/2
          bg-gray-100
          border-2
          rounded
          border-gray-300
          shadow-lg
          h-48
        "
      >
        <span>@{{ event.time }} on {{ event.date }}</span>
        <div class="text-2xl">
          <h4>Title: {{ event.title }}</h4>
        </div>
        <span>Attaendees: {{ event.attendees }}</span> <br />
        <span>Country:{{ event.venue.country }}</span> <br />
        <span>Capacity:{{ event.venue.capacity }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Event } from "@/models";
@Component
export default class EventCard extends Vue {
  @Prop() readonly event!: Event;
}
</script>

<style scoped></style>
