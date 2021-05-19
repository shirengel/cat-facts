import { Component, Input, OnInit } from '@angular/core';
import { FactsService } from '../facts.service';
import { Router } from '@angular/router';
import { Fact } from '../fact-model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public routerName ="";
  @Input() facts? :Fact[];

  public loading:any;

  constructor(private service: FactsService, private router: Router) {
    this.routerName = this.router.url;
  }

  ngOnInit(): void {}

  onClickDelete(fact: any){
    this.service.deleteFact(fact.id);
  }


}
