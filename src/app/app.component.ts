import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'formula1';
  inputChecked: boolean = false;
  @ViewChild('header', { static: true }) header!: ElementRef;
  @ViewChild('themeList', { static: true }) themeList!: ElementRef;
  theme!: string;

  constructor() {}

  ngOnInit() {
    this.theme = this.themeList.nativeElement.value;
    console.log(this.theme);
  }

  ngOnChange() {
    this.theme = this.themeList.nativeElement.value;
    console.log(this.theme);
  }

  inputCheckbox() {
    this.inputChecked = !this.inputChecked;
  }

  themeSelected(option: string) {}
}
