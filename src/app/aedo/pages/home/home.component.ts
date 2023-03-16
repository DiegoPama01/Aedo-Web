import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';

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

  constructor(private matDialog:MatDialog){}

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  openLoginDialog(){
    this.matDialog.open(
      LoginDialogComponent,)
  }
}
