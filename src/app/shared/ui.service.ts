import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class UIService {
  constructor(private snackbar: MatSnackBar) {}

  showSnackBar(message: string, action: string = null, duration: number = 3000) {
    this.snackbar.open(message, action, { duration });
  }
}
