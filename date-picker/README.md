## Usage in Any Project
### Include the component in your Angular module (app.module.ts or the relevant feature module):

- Ensure MatDatepickerModule and MatNativeDateModule are imported in your Angular module:
```
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [AppComponent, DatePickerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Example Usage in a Parent Template
```
<app-date-picker
  [placeholder]="'Choose a date'"
  [selectedDate]="date"
  [minDate]="minDate"
  [maxDate]="maxDate"
  (dateChange)="handleDateChange($event)"
></app-date-picker>
<p>Selected Date: {{ date | date }}</p>

```

### Example Usage in a Parent Component
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date: Date | null = null; // Selected date
  minDate: Date = new Date(2020, 0, 1); // Example min date
  maxDate: Date = new Date(2030, 11, 31); // Example max date

  handleDateChange(selectedDate: Date): void {
    this.date = selectedDate; // Handle date change
    console.log('Selected Date:', this.date);
  }
}
```
