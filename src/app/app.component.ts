import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import { Driver } from './model/drivers/Driver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'formula1';
  drivers!: Driver[];
  inputChecked: boolean = false;

  constructor(private service: AppService, private route: ActivatedRoute) {}

  getDriver() {
    return this.service.getDriver().subscribe((res) => {
      this.drivers = res.MRData.DriverTable.Drivers;
      console.log(res);
    });
  }

  inputCheckbox() {
    this.inputChecked = !this.inputChecked;
  }

  themeSelected(option: string) {
    console.log(option);
  }
}
