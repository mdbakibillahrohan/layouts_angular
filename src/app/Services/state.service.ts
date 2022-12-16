import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isProgressing: boolean = false;
  constructor() { }

}
