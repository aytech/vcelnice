import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiConstants } from 'config';


@Injectable()
export class PhotoService {

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<Array<Photo>> {
    return this.http.get<Photo[]>(ApiConstants.GET_PHOTOS);
  }
}