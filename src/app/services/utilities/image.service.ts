import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private sanitizer: DomSanitizer) { }
  convertBase64(raw: any) {
    let result: any = this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/jpg;base64,' + raw
    );
    return result;
  }
}
