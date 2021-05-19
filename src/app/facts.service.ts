import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fact } from "./fact-model";

@Injectable({providedIn: 'root'})

export class FactsService{
  private facts : Fact[] = [];
  private factsUpdated = new Subject<Fact[]>();
  private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient){}

  getFactsUpdatedListener(){
    return this.factsUpdated.asObservable(); // return an object we can listen to (but not emit)
  }

  addFact(content: String, ID: String){

    const newFact =
    {
      content: content,
      id: ID
    };

    this.http.post<Fact[]>(this.baseUrl + "/AddFact", newFact)
    .pipe(
      catchError((error: any): Observable<[]> => {
        console.error(error);
        return of([])
      }
    ))
    .subscribe(
      (facts: Fact[]) => {
        this.facts = facts;//post request sending back the updated list
        this.factsUpdated.next([...this.facts]);
      }
    )

  }

  getAllFacts(){
    return this.http.get<Fact[]>(this.baseUrl + "/AllFacts")
    .pipe(
      catchError((error: any): Observable<[]> => {
        console.error(error);
        return of([])
      }
    ))
    .subscribe(
      (res) => {
        this.facts = res;
        this.factsUpdated.next([...this.facts]);
      })
  }

  public getMyFacts() {
    this.factsUpdated.next([...this.facts]);

    this.http.get<Fact[]>(this.baseUrl + "/MyFacts")
    .pipe(
      catchError((error: any): Observable<[]> => {
        console.error(error);
        return of([])
      }
    ))
    .subscribe(
      (facts) =>
      {
        this.facts = facts;
        this.factsUpdated.next([...this.facts]);
      }
    );


  }

  deleteFact(id: String){
    this.http.delete(this.baseUrl + `/DeleteFact/${id}`)
    .pipe(
      catchError((error: any): Observable<[]> => {
        console.error(error);
        return of([])
      }
    ))
    .subscribe(
      (facts:any) => {
        this.facts = facts;
        this.factsUpdated.next([...this.facts]);
      }
    );

  }
}
