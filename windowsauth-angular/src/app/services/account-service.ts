import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  readonly url = `${environment.apiAccount}`;

  constructor(private http: HttpClient) {
  }

  get(): Observable<string> {
    return this.http.get(this.url, { responseType: 'text' });
  }

  test(): Observable<any> {
    const employee = {
      id: 1,
      name: 'Goutham'
    }
    return this.http.post('https://localhost:44333/api/account/test', employee, { responseType: 'json', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  }
}
