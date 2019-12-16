import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
@Component({
  selector: 'app-modal-kit',
  templateUrl: './modal-kit.component.html',
  styleUrls: ['./modal-kit.component.scss']
})
export class ModalKitComponent implements OnInit {
  environnement = environment;
  constructor() { }

  ngOnInit() {
  }

}