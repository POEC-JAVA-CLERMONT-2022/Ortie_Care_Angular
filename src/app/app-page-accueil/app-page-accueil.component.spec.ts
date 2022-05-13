import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageAccueilComponent } from './app-page-accueil.component';

describe('AppPageAccueilComponent', () => {
  let component: AppPageAccueilComponent;
  let fixture: ComponentFixture<AppPageAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPageAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
