## Usage in Any Project
### Include the component in your Angular module (app.module.ts or the relevant feature module):
```
import { CopyToClipboardComponent } from './copy-to-clipboard/copy-to-clipboard.component';

@NgModule({
  declarations: [
    CopyToClipboardComponent,
    // Other components
  ],
  exports: [CopyToClipboardComponent], // Export the component for reuse
})
export class SharedModule {}
```

### Example Usage in a Template
```
<app-copy-to-clipboard
  [textToCopy]="'This is the text to copy!'"
  [buttonText]="'Click to Copy'"
  [successMessage]="'Copied Successfully!'"
></app-copy-to-clipboard>
```