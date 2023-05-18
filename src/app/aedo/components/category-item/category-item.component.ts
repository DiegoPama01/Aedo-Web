import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImagesService } from '../../services/models-services/images.service';
import { CategoryDto } from '../../dto/category.dto';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input()
  category!: CategoryDto;
  @Output() categoryClicked = new EventEmitter<CategoryDto>();
  iconUrl:any;
  selected:boolean = false;
  constructor(private imagesService:ImagesService) { }

  ngOnInit(): void {
    this.imagesService.downloadIcon(this.category.getName(),this.category.getId()).then((url) => {
      this.iconUrl = url;
    });
  }

  categoryClick(){
    this.selected = !this.selected
    this.categoryClicked.emit(this.category) 
  }
}
