import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-fabricant',
  templateUrl: './info-fabricant.component.html',
  styleUrls: ['./info-fabricant.component.scss']
})
export class InfoFabricantComponent implements OnInit {
  @Input() fabricant;

  constructor() { }

  ngOnInit() {
  }

}
