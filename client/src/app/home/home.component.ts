import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeService, NewsService } from 'services';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {

  public home: Home;
  public articles: Array<Article>;
  public modalTitle: string;
  public modalBody: string;
  public loading: boolean;
  public error: boolean;

  constructor(
    private homeService: HomeService,
    private newsService: NewsService,
    private modalService: NgbModal
  ) {
    this.articles = [];
    this.loading = true;
    this.error = false;
  }

  ngOnInit() {
    let home = this.homeService.getText();
    let news = this.newsService.getNews();

    forkJoin([ home, news ])
      .subscribe((response: [ Home, Article[] ]) => {
          this.loading = false;
          this.home = response[0];
          this.articles = response[1].slice(0, 4);
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.error = true;
          console.error('Error fetching data: ', error.statusText);
        });
  }

  open(content: TemplateRef<any>, index: number): void {
    if (this.articles.length <= index) {
      return;
    }
    this.modalTitle = this.articles[index].title;
    this.modalBody = this.articles[index].text;
    this.modalService.open(content).result.then(() => {
      // Not used
    }, () => {
      // Modal dismissed
    });
  }
}
