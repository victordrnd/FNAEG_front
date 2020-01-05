import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }


  onExport(){
    window.open(`${environment.apiurl}/kit/export`, "_blank");
  }
}
