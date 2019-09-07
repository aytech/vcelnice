import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiConstants } from "config";


@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  postMessage(data: any, lang: string, token: string): Observable<any> {
    return this.http.post(ApiConstants.POST_CONTACT, data, {
      headers: new HttpHeaders()
        .set('Accept-Language', lang)
        .set('X-CSRFToken', token)
    });
  }
}