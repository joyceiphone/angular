import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
})
// ngInit is optional
export class ScrollableTabComponent implements OnInit, OnChanges {
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleColor = 'blue';
  @Input() titleActiveColor = 'yellow';
  @Input() indicatorColor = 'brown';
  @Output() handleTabSelected = new EventEmitter();

  //called first: constructor
  constructor() {}
  //component initialization
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    console.log(this.menus);
  }
  handleSelection(index: number) {
    this.selectedIndex = index;
    this.handleTabSelected.emit(this.menus[this.selectedIndex]);
  }
}
