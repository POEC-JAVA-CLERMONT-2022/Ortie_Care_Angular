import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesListComponent } from './legumes-list.component';

describe('LegumesListComponent', () => {
  let component: LegumesListComponent;
  let fixture: ComponentFixture<LegumesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegumesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
