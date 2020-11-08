import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ColorService {

  private _colorsURL: string = "https://reqres.in/api/colors";
  
  constructor(private _http: HttpClient) {}

  public getColors(): Observable<any> {
    return this._http.get<any>(this._colorsURL)
           .pipe(map(res => res.data))
  }

}
