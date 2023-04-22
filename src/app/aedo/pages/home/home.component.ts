import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles:[
    `
    .container{
      margin: 10px
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private matDialog:MatDialog, public auth: AuthenticationService){
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  openLoginDialog(){
    this.matDialog.open(
      LoginDialogComponent,)
  }

  logout(){
    this.auth.logout()
  }

  isUserAdmin(){
    try{
      return this.auth.getCurrentUser().isAdmin
    }
    catch{
      return false
    }
  }
}
