<template>
  <div class="flex-col justify-items-center items-center px-48">
    <event-card v-for="event in events" :key="event.id" :event="event">
      <Button label="Yolo" />
    </event-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EventCard from "@/components/EventCard.vue";
import { Event } from "@/models";

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
      venue: {
        country: "Indonesia",
        capacity: 100,
      },
    },
    {
      id: 13,
      date: "Tues Dec 10,2022",
      attendees: 70,
      time: "18:00",
      title: "Cimol Fans meet up",
      venue: {
        country: "Thailand",
        capacity: 3000,
      },
    },
  ];
}
</script>

<style scoped></style>
