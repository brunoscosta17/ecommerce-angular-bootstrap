import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { faSync, faGift, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.sass']
})
export class SubscribeComponent implements OnInit {

  form: FormGroup;

  faSync = faSync;
  faGift = faGift;
  faShieldAlt = faShieldAlt;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({

    });
  }

  ngOnInit(): void {
  }

}
