import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import { LocaleConstants } from 'config/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public lang: string = LocaleConstants.DEFAULT_LANG;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.lang !== undefined) {
      this.lang = this.route.snapshot.queryParams.lang;
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params.lang !== undefined) {
        this.lang = params.lang;
      }
    });
  }
}
