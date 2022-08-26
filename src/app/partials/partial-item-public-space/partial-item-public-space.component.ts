import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import { environment } from 'src/environments/environment';
import { ImageService } from 'src/app/services/utilities/image.service';
import { SpaceService } from 'src/app/services/data/space.service';
@Component({
  selector: 'partial-item-public-space',
  templateUrl: './partial-item-public-space.component.html',
  styleUrls: ['./partial-item-public-space.component.sass'],
})
export class PartialItemPublicSpaceComponent implements OnInit {
  @Input() space: any;
  spaceLink: any;
  image = environment.imageUrls.none;


  constructor(private imageService: ImageService, private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.renderImage();
    this.renderLink()
  }

  renderLink() {
    this.spaceLink =
      'http://3d.optimizer.vn/?floor_id=' +
      this.space.id;
  }
  renderImage() {
    if (this.space.image) {
      this.image = this.imageService.convertBase64(this.space.image)
    }
  }
  downloadFile() {
    let blob = new Blob([this.space.id]);
    let name = this.spaceService.getSafeName(this.space.id);
    saveAs(blob, name + ".empaty")
  }
}
