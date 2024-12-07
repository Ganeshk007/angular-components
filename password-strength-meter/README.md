## Usage in Any Project
### Include the component in your Angular module (app.module.ts or the relevant feature module):
```
@NgModule({
  declarations: [
    PasswordStrengthMeterComponent,
    // Other components
  ],
  exports: [PasswordStrengthMeterComponent], // Export the component for reuse
})
export class SharedModule {}
```

### Example Usage in a Template
```
<input
  type="password"
  [(ngModel)]="password"
  placeholder="Enter your password"
  style="margin-bottom: 15px"
/>

<app-password-strength-meter [password]="password"></app-password-strength-meter>

```
