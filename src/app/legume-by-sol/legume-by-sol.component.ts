// import { Component, OnInit } from '@angular/core';
// import { Legumes } from 'src/models/Legumes';
// import {ActivatedRoute} from "@angular/router";
// import { LegumeServiceService } from 'src/services/legume.service';

// @Component({
//   selector: 'app-legume-by-sol',
//   templateUrl: './legume-by-sol.component.html',
//   styleUrls: ['./legume-by-sol.component.scss']
// })
// export class LegumesBySolComponent implements OnInit {
//   legumesBySol: Array<Legumes> = [];

//   constructor(
//     private httpLegume: LegumeServiceService,
//     private activatedRoute: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe((params) => {
//       this.httpLegume.getLegumeBySolId(params.solId).subscribe((jsonLegumeBySol) => {
//         this.legumesBySol = jsonLegumeBySol;
//       })
//     });

// }
