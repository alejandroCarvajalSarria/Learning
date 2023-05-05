import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {  

  fetchInfo(){
    const resultPromise = new Promise<string>((resolve, reject)=>{
      setTimeout(() => {
        resolve('Info')
      }, 1500);
    })
    return resultPromise;
  }

  constructor() { }
}
