import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FactCreateComponent } from './my-facts/fact-create/fact-create.component';
import { HeaderComponent } from './header/header.component';
import { FactListComponent } from './my-facts/fact-list/fact-list.component';
import { AllFactsComponent } from './all-facts/all-facts.component';
import { MyFactsComponent } from './my-facts/my-facts/my-facts.component';

import { FactsService } from './facts.service';
import { CarouselComponent } from './carousel/carousel.component';
import { HomePageComponent } from './home-page/home-page.component';


const material = [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
    ]

@NgModule({
  declarations: [
    AppComponent,
    FactCreateComponent,
    HeaderComponent,
    FactListComponent,
    AllFactsComponent,
    MyFactsComponent,
    CarouselComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    material
    ],
  providers: [FactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
