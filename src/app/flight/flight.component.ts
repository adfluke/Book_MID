import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from '../display.service';
import { Flight } from './flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight!: Flight[];
  flightForm!: FormGroup;
  minDate!: Date;

  constructor(private fb: FormBuilder,
    private flightService: DisplayService) {

    }
  ngOnInit(): void {
    this.flightForm = this.fb.group({
      fullName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      adults: ['', [Validators.required]],
      departure: ['', Validators.required],
      children: ['', [Validators.required]],
      infants: ['', [Validators.required]],
      arrival: ['', Validators.required],
    });
    this.minDate = new Date();
    this.getFlight();
  }
  getFlight() {
    this.flight = this.flightService.getFlight();
  }
  onSubmit(f: Flight): void {
    this.flightService.addFlight(f);
    this.flightForm.reset();
}
}
