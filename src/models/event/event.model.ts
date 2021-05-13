export interface Event {
  id: number;
  time: string;
  date: string;
  title: string;
  attendees: number;
  venue: Venue;
}

export interface Venue {
  country: string;
  capacity: number;
}
