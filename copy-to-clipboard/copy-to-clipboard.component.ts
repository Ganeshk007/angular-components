import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.css'],
})
export class CopyToClipboardComponent {
  @Input() textToCopy!: string; // Input to accept the text to copy
  @Input() buttonText: string = 'Copy'; // Customizable button text
  @Input() successMessage: string = 'Copied!'; // Success message on copy

  isCopied = false;

  copyText(): void {
    navigator.clipboard.writeText(this.textToCopy).then(
      () => {
        this.isCopied = true;
        setTimeout(() => (this.isCopied = false), 2000); // Reset message after 2 seconds
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  }
}
