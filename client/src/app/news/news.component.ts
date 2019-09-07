import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from 'services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public articles: Array<Article>;
  public modalTitle: string;
  public modalBody: string;
  public loading: boolean;

  constructor(
    private newsService: NewsService, 
    private modalService: NgbModal
  ) {
    this.loading = true;
    this.articles = new Array();
  }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe((response: Article[]) => {
        this.loading = false;
        this.articles = response;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
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
    }, reason => {
      // Modal dismissed
    });
  }
}
