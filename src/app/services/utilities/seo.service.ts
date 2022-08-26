import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})

export class SeoService {
  constructor(private meta: Meta, private title: Title) { }
  addMeta(name: string, content: any) {
    let isMeta = this.meta.getTag('name= "' + name + '"');
    if (isMeta) {
      this.meta.updateTag({ name: name, content: content });
    }
    else {
      this.meta.addTag({ name: name, content: content });
    }
  }
  addProperty(name: string, content: any) {
    let isProperty = this.meta.getTag('property= "' + name + '"');
    if (isProperty) {
      this.meta.updateTag({ property: name, content: content });
    }
    else {
      this.meta.addTag({ property: name, content: content });
    }
  }
  setTitle(title: string, noBrand?: boolean) {
    title += noBrand && noBrand == true ? '' : ' - ' + environment.appName;
    this.title.setTitle(title);
  }
  setSeoForPage(input: any) {
    if (input.title) {
      this.setTitle(input.title)
    }
    this.addProperty('og:title', input.title);
    this.addProperty('og:type', 'website');
    this.addMeta('description', input.description);
    let url: any = window.location.href;
    console.log("url: ", url);
    this.addProperty('og:url', url);
    this.addProperty('og:image', input.image ? input.image : environment.imageUrls.none);
  }
}
