import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSubjectsComponent } from './adm-subjects.component';

describe('AdmSubjectsComponent', () => {
  let component: AdmSubjectsComponent;
  let fixture: ComponentFixture<AdmSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
