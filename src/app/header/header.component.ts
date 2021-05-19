import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public links = [
    { title: 'All Facts', path: 'AllFacts' },
    { title: 'My Facts', path: 'MyFacts' }
  ];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
