import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTeachersComponent } from './adm-teachers.component';

describe('AdmTeachersComponent', () => {
  let component: AdmTeachersComponent;
  let fixture: ComponentFixture<AdmTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
