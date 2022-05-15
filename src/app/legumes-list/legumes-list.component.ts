import { Component, OnInit } from '@angular/core';
import { Legumes } from 'src/models/Legumes';
import {ActivatedRoute, Router} from "@angular/router";
import { LegumeServiceService } from 'src/services/legume.service';

@Component({
  selector: 'app-legumes-list',
  templateUrl: './legumes-list.component.html',
  styleUrls: ['./legumes-list.component.scss']
})
export class LegumesListComponent implements OnInit {
  legumes: Array<Legumes> = [];

  constructor(
    private httpLegume: LegumeServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.httpLegume.getLegumes().subscribe((jsonLegumes) => {
      this.legumes = jsonLegumes;
    });
  }
}
