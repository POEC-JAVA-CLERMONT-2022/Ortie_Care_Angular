import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilListComponent } from './conseil-list.component';

describe('ConseilListComponent', () => {
  let component: ConseilListComponent;
  let fixture: ComponentFixture<ConseilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
