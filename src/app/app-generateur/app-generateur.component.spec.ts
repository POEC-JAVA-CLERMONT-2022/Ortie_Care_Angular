import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGenerateurComponent } from './app-generateur.component';

describe('AppGenerateurComponent', () => {
  let component: AppGenerateurComponent;
  let fixture: ComponentFixture<AppGenerateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGenerateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
