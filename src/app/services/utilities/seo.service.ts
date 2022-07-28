import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}
  addMeta(name: string, content: string) {
    this.meta.addTag({ name: name, content: content });
  }
  setTitle(title: string, noBrand?: boolean) {
    title += noBrand && noBrand == true ? '' : ' - ' + environment.appName;
    this.title.setTitle(title);
  }
}
