import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PriceService, GenericService } from 'services';
import { LocaleConstants } from 'config';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  public prices: Price[];
  public loading: boolean;

  constructor(
    private modalService: NgbModal,
    private priceService: PriceService
  ) {
    this.loading = true;
    this.prices = [];
  }

  ngOnInit() {
    this.priceService.getPrices()
      .subscribe(prices => {
        this.loading = false;
        this.prices = prices;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        console.error('Error fetching data: ', error.statusText);
      });
  }

  openReservationForm(index: number): void {
    const price: Price = this.prices[index];
    const modalRef = this.modalService.open(ReservationComponent);

    modalRef.componentInstance.title = price.title;
  }
}

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./prices.component.css']
})
export class ReservationComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  @Input() title: string;
  private lang: string;
  private csrf_token: string;
  public isSubmitting: boolean;
  public hasError: boolean;
  public hasSuccess: boolean;
  public postMessage: string;
  public locations: Array<Location>;

  constructor(
    public activeModal: NgbActiveModal,
    private priceService: PriceService,
    private genericService: GenericService,
    private route: ActivatedRoute
  ) {
    this.isSubmitting = false;
    this.hasError = false;
    this.hasSuccess = false;
  }

  ngOnInit() {
    this.lang = this.route.snapshot.queryParams.lang || LocaleConstants.DEFAULT_LANG;
    this.route.queryParams.subscribe((params: Params) => {
      this.lang = params.lang || LocaleConstants.DEFAULT_LANG;
    });
    this.priceService.getLocations()
      .subscribe(locations => {
        this.locations = locations;
      }, (error: HttpErrorResponse) => {
        console.error('Error fetching data: ', error.statusText);
      });
    this.genericService.getCSRFToken().subscribe((response: string) => {
      this.csrf_token = response;
    });
  }

  send(): void {
    this.isSubmitting = true;
    this.hasError = false;
    this.hasSuccess = false;
    this.form.value.title = this.title;

    this.priceService.postReservation(this.form.value, this.lang, this.csrf_token)
      .subscribe(
        response => {
          this.hasSuccess = true;
          this.isSubmitting = false;
          this.postMessage = LocaleConstants.RESERVATION_OK;
          this.form.reset();
          this.form.controls.location.setValue('');
        }, (reason: HttpErrorResponse) => {
          this.hasError = true;
          this.isSubmitting = false;
          this.postMessage = LocaleConstants.ERROR_SERVER;
        }
      );
  }
}
