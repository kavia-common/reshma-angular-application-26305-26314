import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export type LoginModalData = {
  /** Optional aria-label override for the dialog. */
  ariaLabel?: string;
};

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {
  private readonly dialogRef = inject(MatDialogRef<LoginModalComponent>);
  private readonly data = inject<LoginModalData>(MAT_DIALOG_DATA, { optional: true }) ?? {};

  readonly ariaLabel = this.data.ariaLabel ?? 'Login options';

  // PUBLIC_INTERFACE
  close(): void {
    /** Closes the modal dialog. */
    this.dialogRef.close();
  }

  // PUBLIC_INTERFACE
  onLoginUsernamePassword(): void {
    /** UI-only: placeholder handler for username/password login option. */
    // Intentionally no backend logic.
  }

  // PUBLIC_INTERFACE
  onLoginSSO(): void {
    /** UI-only: placeholder handler for SSO login option. */
    // Intentionally no backend logic.
  }
}
