import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly dialog = inject(MatDialog);

  // PUBLIC_INTERFACE
  openLoginModal(): void {
    /** Opens the login modal dialog (UI-only). */
    this.dialog.open(LoginModalComponent, {
      autoFocus: 'first-tabbable',
      restoreFocus: true,
      hasBackdrop: true,
      backdropClass: 'login-backdrop',
      panelClass: 'login-panel',
      maxWidth: '100vw',
      // We want a small centered modal card; content controls actual size.
      width: 'auto',
      data: { ariaLabel: 'Login modal' },
    });
  }
}
