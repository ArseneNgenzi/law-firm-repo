import { Component, Input, OnInit, ElementRef } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icon',
  template: '<ng-content></ng-content>'
})
export class FeatherIconComponent implements OnInit {
  @Input() name:any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // const iconElement = feather.icons[this.name].toSvg();
    // this.el.nativeElement.innerHTML = iconElement;
  }
}