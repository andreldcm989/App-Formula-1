import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import { Driver } from './model/drivers/Driver';
import { ResponseDrivers } from './model/drivers/ResponseDrivers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formula1';

  drivers!: Driver[];

  constructor(private service: AppService, private route: ActivatedRoute) {
    this.getDriver();
  }

  getDriver() {
    return this.service.getDriver().subscribe((res) => {
      this.drivers = res.MRData.DriverTable.Drivers;
      console.log(res);
    });
  }
}
