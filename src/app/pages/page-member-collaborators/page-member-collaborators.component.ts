import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/utilities/seo.service';
import { AuthService } from 'src/app/services/data/auth.service';
import { CollaboratorService } from 'src/app/services/data/collaborator.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'page-member-collaborators',
  templateUrl: './page-member-collaborators.component.html',
  styleUrls: ['./page-member-collaborators.component.sass'],
})
export class PageMemberCollaboratorsComponent implements OnInit {
  user: any;
  collaborators: any = [];
  collabForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: [''],
    role: ['', [Validators.required]],
    permissions: this.fb.group({
      invoice: [false],
      billing: [false],
      email: [false],
    }),
  });
  roles: any = [];
  messages = {
    email: {
      required: "Collaborator's email cannot be empty.",
      email: 'Invalid email.',
    },
    role: {
      required: 'Please select a role for your collaborator.',
    },
  };
  submitted = false;

  popup: any = {
    show: false,
    content: {
      icon: '',
      title: '',
      html: '',
      timer: undefined,
    },
  };

  constructor(
    private seo: SeoService,
    private fb: FormBuilder,
    private collabService: CollaboratorService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setSEO();
    this.getCollabRoles();
    this.getUser();
  }

  setSEO() {
    this.seo.setTitle('Collaborators');
  }

  getUser() {
    this.user = this.authService.getUserDecoded();
    this.getCollaborators();
  }

  getCollaborators() {
    let res = this.collabService.getCollaborators(this.user._id);
    this.collaborators = res.data;
  }

  getCollabRoles() {
    let res = this.collabService.getRoles();
    this.roles = res.data;
  }

  get ctr() {
    return this.collabForm.controls;
  }
  isCtrInvalid(ctr: FormControl) {
    return (ctr.dirty || this.submitted) && ctr.invalid;
  }
  submitInvite() {
    this.submitted = true;
    if (this.collabForm.valid) {
      try {
        let data = this.collabForm.value;
        let res = this.collabService.addCollaborator(data);
        if (res.status == 201) {
          this.showPopup({
            icon: 'success',
            html: 'Invite sent',
            timer: 2000,
          });
        }
      } catch (err) {
        this.showPopup({
          icon: 'error',
          title: 'Error when invite',
          html: 'Error when inviting collaborators: ' + err,
        });
      }
    } else {
      this.showPopup({
        icon: 'error',
        title: "Can't send invite",
        html: 'Please check all information and try again.',
        timer: 2000,
      });
    }
  }

  showPopup(content: any) {
    this.popup = {
      show: true,
      content: {
        icon: content.icon ? content.icon : '',
        title: content.title ? content.title : '',
        html: content.html ? content.html : '',
        timer: content.timer ? content.timer : undefined,
      },
    };
  }
  closePopup() {
    this.popup = {
      show: false,
      content: {
        icon: '',
        title: '',
        html: '',
        timer: undefined,
      },
    };
  }
}
