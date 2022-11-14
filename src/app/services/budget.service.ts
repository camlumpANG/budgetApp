import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  private _profile = new BehaviorSubject<Expense[]>(
    [
      {
        amount: 10,
        category: "food",
        description: "food from chipotle"
      }
    ]);


  readonly totalExpenses = this._profile.asObservable();



  // private _totalExpenses = new BehaviorSubject<number | null>();
  // readonly totoalExpeneses = this._totalExpenses;

}
