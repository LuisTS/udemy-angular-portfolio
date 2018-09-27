import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage;
  loaded = false;
  staff: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Service info page...');
    this.getInfo();
    this.getStaff();
  }

  private getInfo() {
    this.http.get('assets/data/page.json').subscribe((response: InfoPage) => {
      this.loaded = true;
      this.info = response;
    });
  }

  private getStaff() {
    this.http.get('https://udemy-angular-html-bd08f.firebaseio.com/equipo.json').subscribe((response: any) => {
      this.staff = response;
    });
  }

}
