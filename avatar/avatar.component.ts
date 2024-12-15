import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  @Input() src: string = ''; // URL for the avatar image
  @Input() alt: string = 'Avatar'; // Alternate text for the image
  @Input() size: number = 50; // Size of the avatar in pixels
  @Input() shape: 'circle' | 'square' = 'circle'; // Shape of the avatar

  get avatarStyle() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      borderRadius: this.shape === 'circle' ? '50%' : '0',
    };
  }
}
