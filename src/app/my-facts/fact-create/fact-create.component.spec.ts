import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactCreateComponent } from './fact-create.component';

describe('FactCreateComponent', () => {
  let component: FactCreateComponent;
  let fixture: ComponentFixture<FactCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
