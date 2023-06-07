import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OdiseaService } from '../../services/models-services/odiseas.service';
import { IOdisea } from '../../interfaces/odisea.interface';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { ImagesService } from '../../services/models-services/images.service';
import { IComment } from '../../interfaces/comment.interface';
import { CommentService } from '../../services/models-services/comments.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-odisea-profile',
  templateUrl: './odisea-profile.component.html',
  styleUrls: ['./odisea-profile.component.css'],
})
export class OdiseaProfilePageComponent {
  id: string = '';
  odisea?: IOdisea;
  odiseo?: IOdiseo;
  comments?: IComment[] = [];
  avatarUrl?: string = "";

  odiseaImgs: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private odiseaService: OdiseaService,
    private odiseoService: OdiseoService,
    private imageService: ImagesService,
    private commentService: CommentService,
    private storageService: StorageService
  ) {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.odiseaService
        .getById(this.id)
        .then((odisea) => {
          this.odisea = odisea.getOdisea();
          this.odiseoService
            .getById(this.odisea.uid)
            .then((odiseo) => {
              this.odiseo = odiseo.getOdiseo();
              storageService.downloadFile("images/avatars/"+odiseo.getAvatar().assetId).then((url) => {
                this.avatarUrl=url
              })
            })
            .catch((error: any) => {
              console.error('Error al obtener el odiseo', error);
            });
          this.odisea.images.forEach((image) => {
            this.imageService.downloadImage(image.assetId).then((imagerUrl) => {
              this.odiseaImgs.push(imagerUrl);
            }).catch((error) => {
              console.log("Error dowloading image: " + error)
            });;
          });
          this.commentService.getCommentsByOdiseaId(this.id).subscribe((commentListDto) => {
            commentListDto.forEach((commentDto) => {
              this.comments?.push(commentDto.getComment());
            });
          });
        })
        .catch((error: any) => {
          console.error('Error al obtener la odisea:', error);
        });
    });
  }
}
