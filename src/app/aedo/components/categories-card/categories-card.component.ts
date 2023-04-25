import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/aedo/services/models-services/category.service';
import { CategoryDto } from '../../dto/category.dto';
import { ImagesService } from '../../services/models-services/images.service';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.css'],
})
export class CategoriesCardComponent implements OnInit {
  closeResult: string = '';
  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService,
    private imagesService: ImagesService
  ) {}

  @Input() category: any;

  iconUrl = '';

  ngOnInit(): void {
    this.imagesService.downloadIcon(this.category.id).then((url) => {
      this.iconUrl = url;
    });
  }

  removeCategory() {
    this.imagesService.deleteIcon(this.category.id);
    this.categoryService.remove(this.category);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        if (result === 'removeCategory') {
          this.removeCategory();
        }
      });
  }
}
