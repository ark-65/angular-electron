import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-deploy',
  templateUrl: './remote-deploy.component.html',
  styleUrls: ['./remote-deploy.component.scss']
})
export class RemoteDeployComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(555);
  }

}
