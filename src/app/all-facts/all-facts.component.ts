import { Component, OnInit} from '@angular/core';
import { Fact } from '../fact-model';
import { FactsService } from '../facts.service';


@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.css'],
})
export class AllFactsComponent implements OnInit {
  public facts :Fact[] = [];

  constructor(private service: FactsService){}

  ngOnInit(){
    this.getAllFacts();

    this.service.getFactsUpdatedListener()
    .subscribe((facts) => {
        this.facts = facts;
    });

  }

  getAllFacts(){
    this.service.getAllFacts();
  }
}
