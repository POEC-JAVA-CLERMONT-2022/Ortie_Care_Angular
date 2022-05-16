import { Component, Input, OnInit } from '@angular/core';
import { Legumes } from 'src/models/Legumes';
import {ActivatedRoute, Router} from "@angular/router";
import { LegumeServiceService } from 'src/services/legume.service';
import { SolServiceService } from 'src/services/sol.service';
import { Sols } from 'src/models/Sols';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-generateur',
  templateUrl: './app-generateur.component.html',
  styleUrls: ['./app-generateur.component.scss']
})

export class AppGenerateurComponent implements OnInit {

  @Input()
  sol: Sols = new Sols();
  @Input()
  legume: Legumes = new Legumes();

  formGroup!: FormGroup;
  displayInfos: boolean = false; 
  
  legumes: Array<Legumes> = [];
  legumesBySol: Array<Legumes>|undefined;
  sols: Array<Sols> = [];
  legumesAssocies: Array<Legumes> | undefined;
  

  constructor(
    private httpLegume: LegumeServiceService,
    private httpSol: SolServiceService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup(
      {
        selectedSol: new FormControl(
          this.sol.nomSol,
          [
            Validators.required,
          ]
        ),
        selectedLegume: new FormControl(
          this.legume.nom,
          [
            Validators.required,
          ]
        )
      });

    this.httpLegume.getLegumes().subscribe((jsonLegumes) => {
      this.legumes = jsonLegumes;
    });

    this.httpSol.getSols().subscribe((jsonSols) => {
      this.sols = jsonSols;
    });
  }

  get selectedSol(): AbstractControl {
    return <AbstractControl>this.formGroup.get('selectedSol');
  }

  get selectedLegume(): AbstractControl {
    return <AbstractControl>this.formGroup.get('selectedLegume');
  }

  onSubmit(): void {
      this.displayInfos = true;
      this.httpLegume.getLegumesBySolAndId(this.selectedLegume.value, this.selectedSol.value).subscribe((jsonLegumesRequested) => {
        console.log(jsonLegumesRequested)
        this.legumesAssocies = jsonLegumesRequested;});

      // this.router.navigate(['/']);
  }


  onRefreshSol(): void {
    this.httpLegume.getLegumesBySol(this.selectedSol.value).subscribe((jsonLegumes) => {
      this.legumesBySol = jsonLegumes;
    });
  }
}
