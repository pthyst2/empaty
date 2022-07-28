import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//#region Mocks
import { mockBlogs } from 'src/app/data/mocks/mockBlogs';
//#endregion
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: any = mockBlogs;
  constructor(private http: HttpClient) {}
  getBlogs(body: any) {
    return {
      count: this.blogs.length,
      limit: body.limit ? body.limit : 20,
      offset: body.offset ? body.offset : 0,
      data: this.blogs,
    };
  }
  getBlogDetail(id: any) {
    for (let blog of this.blogs) {
      if (blog._id == id) {
        return {
          data: blog,
        };
      }
    }
    return {
      data: null,
    };
  }
}
