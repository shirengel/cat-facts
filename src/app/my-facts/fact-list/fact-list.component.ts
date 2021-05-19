import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FactsService} from '../../facts.service';
import {Fact} from '../../fact-model';


@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.css']
})
export class FactListComponent implements OnInit, OnDestroy {
  facts: Fact[] = [];
  private factsSub:Subscription = new Subscription();

  constructor(public FactsService: FactsService) {}

  public  ngOnInit():void {

    if(this.facts.length === 0){
      this.FactsService.getMyFacts();
    }

    this.factsSub = this.FactsService.getFactsUpdatedListener()
    .subscribe((facts) => {
        this.facts = facts;
    });
  }

  ngOnDestroy(): void{
    this.factsSub.unsubscribe();
  }

}
