import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFactsComponent } from './all-facts/all-facts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyFactsComponent } from './my-facts/my-facts/my-facts.component';

const routes: Routes = [
  { path: 'AllFacts', component: AllFactsComponent},
  { path: 'MyFacts', component: MyFactsComponent},  
  { path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //inform the angular router module about the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
