import { Component, OnInit } from '@angular/core';

import { HEROES } from '../hero';
import { KONTAK } from '../kontak';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  kontakList = KONTAK;
  title = 'Contacts';

  constructor() {}

  ngOnInit(): void {}
}
