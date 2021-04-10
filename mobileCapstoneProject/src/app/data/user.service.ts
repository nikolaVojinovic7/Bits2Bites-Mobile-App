import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //results: any;
  url = 'http://localhost:8087/api/public/allUsers';

  constructor(private http: HttpClient) {}

  getAllUsers(){
    return this.http.get(this.url)
  }

}


// getAllUsers(){
//   this.results = this.http.get(this.url).pipe(
//     map(results => {
//       console.log('RAW :: ', results);
//       return results;
//     })
//   );
// }
