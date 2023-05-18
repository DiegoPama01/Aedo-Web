import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-email-dialog',
  templateUrl: './reset-email-dialog.component.html',
  styleUrls: ['./reset-email-dialog.component.css']
})
export class ResetEmailDialogComponent {
  hide: boolean = true;
  formGroup: FormGroup;
  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ResetEmailDialogComponent>
  ) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit(){
    if(this.formGroup.valid){
      this.auth.updateEmail(this.formGroup.value.email)
      this.dialogRef.close();
      window.location.reload();
    } 
  }
}
