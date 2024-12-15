## Usage in Any Project
### Include the component in your Angular module (app.module.ts or the relevant feature module):

- Ensure MatDatepickerModule and MatNativeDateModule are imported in your Angular module:
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [AppComponent, AvatarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Example Usage in a Parent Template
```
<app-avatar
  [src]="'https://example.com/profile.jpg'"
  [alt]="'John Doe'"
  [size]="100"
  [shape]="'circle'"
></app-avatar>

<app-avatar
  [alt]="'Jane Doe'"
  [size]="75"
  [shape]="'square'"
></app-avatar>

<app-avatar
  [src]="''" <!-- Placeholder fallback -->
  [alt]="'Anonymous'"
  [size]="50"
></app-avatar>
```
