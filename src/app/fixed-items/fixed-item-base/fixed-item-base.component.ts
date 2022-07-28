import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fixed-item-base',
  templateUrl: './fixed-item-base.component.html',
  styleUrls: ['./fixed-item-base.component.sass'],
})
export class FixedItemBaseComponent implements OnInit {
  @Input() attributes: any;
  @Input() extendClasses: string = '';
  classes: string = '';
  constructor() {}

  ngOnInit(): void {
    this.renderClasses();
  }

  renderClasses() {
    // Static classes
    this.classes += 'absolute z-fixedItem  shadow-light';
    // Top
    if (this.attributes.top) {
      this.classes += ' top-' + this.attributes.top.toString();
    } else if (this.attributes.topNegative) {
      this.classes += ' -top-' + this.attributes.topNegative.toString();
    }
    // Bottom
    if (this.attributes.bottom) {
      this.classes += ' bottom-' + this.attributes.bottom.toString();
    } else if (this.attributes.bottomNegative) {
      this.classes += ' -bottom-' + this.attributes.bottomNegative.toString();
    }
    // Left
    if (this.attributes.left) {
      this.classes += ' left-' + this.attributes.left.toString();
    } else if (this.attributes.leftNegative) {
      this.classes += ' -left-' + this.attributes.leftNegative.toString();
    }
    // Right
    if (this.attributes.right) {
      this.classes += ' right-' + this.attributes.right.toString();
    } else if (this.attributes.rightNegative) {
      this.classes += ' -right-' + this.attributes.rightNegative.toString();
    }
    // Border radius
    this.classes += this.attributes.rounded == true ? ' rounded' : '';
    // Background color
    this.classes += this.attributes.bgColor
      ? ' bg-' + this.attributes.bgColor
      : ' bg-white';
    // Padding
    this.classes += this.attributes.p ? ' ' + this.attributes.p : ' p-3';
    // Extend classes
    this.classes += this.extendClasses ? ' ' + this.extendClasses : '';
  }
}
