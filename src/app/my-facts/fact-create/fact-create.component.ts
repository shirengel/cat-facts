import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FactsService} from '../../facts.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-fact-create',
  templateUrl: './fact-create.component.html',
  styleUrls: ['./fact-create.component.css']
})
export class FactCreateComponent implements OnInit {

  public form: FormGroup;

  constructor(public FactsService: FactsService) {
    this.form = new FormGroup({
      content: new FormControl(null, {validators:[Validators.required]})
    });
  }

  ngOnInit(): void {}

  onAddFact(){
    const newId = uuid.v4();
    this.FactsService.addFact(this.form.value.content, newId);

    this.form.reset();
  }
}
