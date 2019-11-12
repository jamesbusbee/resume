import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  @Input() AE;
  constructor() { }

  ngOnInit() {
  }

}
