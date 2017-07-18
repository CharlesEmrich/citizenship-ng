import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProPublicaService } from './../pro-publica.service';
import { Committee } from './../committee.model'

@Component({
  selector: 'app-committee-detail',
  templateUrl: './committee-detail.component.html',
  styleUrls: ['./committee-detail.component.css'],
  providers: [ProPublicaService]
})

export class CommitteeDetailComponent implements OnInit {
  committeeId: string;
  committeeToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private proPublicaService: ProPublicaService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.committeeId = urlParameters['id'];
    })

    this.proPublicaService.getCommitteeById(this.committeeId).subscribe(response => {
      this.committeeToDisplay = response.json().results[0];
      console.log(response.json());
    });
  }

}
