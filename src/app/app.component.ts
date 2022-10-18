import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'formula1';
  inputChecked: boolean = false;
  @ViewChild('themeList', { static: true }) themeList!: ElementRef;
  @ViewChild('header', { static: true }) header!: ElementRef;
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;
  @ViewChild('main', { static: true }) main!: ElementRef;
  @ViewChild('footer', { static: true }) footer!: ElementRef;
  theme!: string;

  constructor() {}

  ngOnInit() {
    this.theme = this.themeList.nativeElement.value;
  }

  inputCheckbox() {
    this.inputChecked = !this.inputChecked;
  }

  themeSelected(option: string) {
    this.header.nativeElement.classList.remove(this.theme);
    this.navbar.nativeElement.classList.remove(this.theme);
    this.main.nativeElement.classList.remove(this.theme);
    this.footer.nativeElement.classList.remove(this.theme);
    this.header.nativeElement.classList.add(option);
    this.navbar.nativeElement.classList.add(option);
    this.main.nativeElement.classList.add(option);
    this.footer.nativeElement.classList.add(option);
    this.theme = option;
  }
}
