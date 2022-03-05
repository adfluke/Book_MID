import { Flight } from "../flight/flight";
export class mockFlightData {
  public static mfData: Flight[] = [
    {
      fullName: 'adun piwgram',
      from: 'TH',
      to: 'USA',
      type: 'return',
      adults: 1,
      departure: new Date('2565-03-5'),
      children: 2,
      infants: 3,
      arrival: new Date('2565-03-6'),
    },
  ];
}
