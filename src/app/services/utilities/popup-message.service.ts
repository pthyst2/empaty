import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class PopupMessageService {
  constructor() {}
  success(body: any) {
    Swal.fire({
      icon: 'success',
      title: body.title ? body.title : '',
      html: body.html ? body.html : '',
      position: 'bottom-right',
      timer: 1500,
      showConfirmButton: false,
    });
  }

  error(body: any) {
    Swal.fire({
      icon: 'error',
      title: body.title ? body.title : '',
      html: body.html ? body.html : '',
      position: 'bottom-right',
      showConfirmButton: true,
      confirmButtonText: 'OK',
    });
  }

  underConstruct() {
    Swal.fire({
      icon: 'info',
      title: 'Not available yet',
      html: 'Feature coming soon',
      timer: 1300,
      position: 'bottom-right',
      showConfirmButton: false,
    });
  }
}
