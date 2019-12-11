import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-kit',
  templateUrl: './modal-kit.component.html',
  styleUrls: ['./modal-kit.component.scss']
})
export class ModalKitComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}