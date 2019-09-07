import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';
import {NgForm} from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LocaleConstants} from 'config';
import {ContactService, GenericService} from 'services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  openContactForm(): void {
    this.modalService.open(ContactModalComponent);
  }
}

@Component({
  selector: 'reservation',
  templateUrl: './contact.modal.html',
  styleUrls: ['./contact.component.css']
})
export class ContactModalComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  private lang: string;
  private csrf_token: string;
  public emailErrorMessage: string;
  public contactFormTitle: string;
  public isSubmitting: boolean;
  public hasError: boolean;
  public hasSuccess: boolean;
  public postMessage: string;

  constructor(
    public activeModal: NgbActiveModal,
    private contactService: ContactService,
    private genericService: GenericService,
    private route: ActivatedRoute
  ) {
    this.lang = LocaleConstants.DEFAULT_LANG;
    this.emailErrorMessage = LocaleConstants.ERROR_EMPTY_MESSAGE;
    this.contactFormTitle = LocaleConstants.CONTACT_FORM;
    this.isSubmitting = false;
    this.hasError = false;
    this.hasSuccess = false;
  }

  ngOnInit() {
    if (this.route.snapshot.queryParams.lang !== undefined) {
      this.lang = this.route.snapshot.queryParams.lang;
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params.lang !== undefined) {
        this.lang = params.lang;
      }
    });
    this.genericService.getCSRFToken().subscribe((response: string) => {
      this.csrf_token = response;
    });
  }

  // noinspection JSUnusedGlobalSymbols
  send(): void {
    this.isSubmitting = true;
    this.hasError = false;
    this.hasSuccess = false;

    this.contactService.postMessage(this.form.value, this.lang, this.csrf_token)
      .subscribe(
        () => {
          this.hasSuccess = true;
          this.isSubmitting = false;
          this.postMessage = LocaleConstants.CONTACT_OK;
          this.form.reset();
        }, (reason: HttpErrorResponse) => {
          this.hasError = true;
          this.isSubmitting = false;
          for (const error in reason.error) {
            if (reason.error.hasOwnProperty(error)) {
              this.postMessage = reason.error[error][0];
            }
          }
        }
      );
  }
}
