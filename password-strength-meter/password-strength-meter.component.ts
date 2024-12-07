import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent {
  @Input() password: string = '';

  // Criteria feedback
  feedbackMessages: string[] = [];

  get passwordStrength(): string {
    if (!this.password) return 'none';
    const { score, feedback } = this.calculateStrength(this.password);
    this.feedbackMessages = feedback; // Update feedback
    if (score < 3) return 'weak';
    if (score < 5) return 'medium';
    return 'strong';
  }

  private calculateStrength(password: string): { score: number; feedback: string[] } {
    let strength = 0;
    const feedback: string[] = [];

    // Strength calculation with feedback
    if (password.length >= 8) strength++;
    else feedback.push('Password should be at least 8 characters.');

    if (/[A-Z]/.test(password)) strength++;
    else feedback.push('Add at least one uppercase letter.');

    if (/[a-z]/.test(password)) strength++;
    else feedback.push('Add at least one lowercase letter.');

    if (/[0-9]/.test(password)) strength++;
    else feedback.push('Add at least one number.');

    if (/[\W_]/.test(password)) strength++;
    else feedback.push('Add at least one special character.');

    return { score: strength, feedback };
  }

  getStrengthPercentage(): string {
    const score = this.calculateStrength(this.password).score;
    return `${(score / 5) * 100}%`;
  }

}
