import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent {
  @Input() placeholder: string = 'Select a date'; // Placeholder for the input field
  @Input() selectedDate: Date | null = null; // Bind a date value
  @Input() minDate: Date | null = null; // Minimum date (optional)
  @Input() maxDate: Date | null = null; // Maximum date (optional)

  @Output() dateChange = new EventEmitter<Date>(); // Emit selected date to parent

  onDateChange(event: any): void {
    this.dateChange.emit(event.value); // Emit the selected date
  }
}
