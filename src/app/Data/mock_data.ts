import { Flight } from "../flight/flight";
export class mockFlightData {
  public static mfData: Flight[] = [
    {
      fullName: 'adun piwgram',
      from: 'JAPAN',
      to: 'TH',
      type: 'return',
      adults: 1,
      departure: new Date('2565-03-1'),
      children: 2,
      infants: 3,
      arrival: new Date('2565-03-2'),
    },
  ];
}
