import { Component, Input, OnInit } from '@angular/core';

import { Kontak } from '../kontak';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() kontak!: Kontak;
  @Input('master') masterName = 'Boss';

  constructor() {}

  ngOnInit(): void {}
}
