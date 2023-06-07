import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <h2 mat-dialog-title>Capacidad completa</h2>
    <mat-dialog-content>
      <p>{{ data }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>OK</button>
    </mat-dialog-actions>
  `,
})
export class MaxCapacityDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}
