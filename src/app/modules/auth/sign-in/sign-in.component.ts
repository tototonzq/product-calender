import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor() {}

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit() {}

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  activeIndex: number = 0;
  images: any[] | undefined = [
    {
      itemImageSrc:
        'http://49.0.80.15/DEMO-WAREHOUSE/assets/img/qa-engineers3.svg',
    },
    {
      itemImageSrc:
        'http://49.0.80.15/DEMO-WAREHOUSE/assets/img/qa-engineers3.svg',
    },
  ];
}
