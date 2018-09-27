import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoService: InfoPageService,
              private router: Router) { }

  ngOnInit() {
  }

  searchProduct(search: string) {
    if (search.length < 1) {
      return;
    }

    this.router.navigate(['/search', search]);
  }

}
