import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModernComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
