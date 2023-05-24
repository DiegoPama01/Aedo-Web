import { Component, Input } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input() comments?: IComment[]

  constructor(){
  }

}
