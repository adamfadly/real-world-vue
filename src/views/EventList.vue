<template>
  <div>
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></event-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EventCard from "@/components/EventCard.vue";
import { Event } from "@/shared";

@Component({
  components: {
    EventCard,
  },
})
export default class EventList extends Vue {
  private events: Array<Event> = [
    {
      id: 123,
      date: "Tues Aug 19,2021",
      attendees: 9,
      time: "7:00",
      title: "Vue js meet up",
    },
    {
      id: 13,
      date: "Tues Dec 10,2022",
      attendees: 70,
      time: "18:00",
      title: "Cimol Fans meet up",
    },
  ];
}
</script>

<style scoped></style>
