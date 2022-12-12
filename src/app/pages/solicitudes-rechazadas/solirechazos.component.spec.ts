import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolirechazosComponent } from "./solirechazos.component";

describe('SolirechazosComponent', () => {
  let component: SolirechazosComponent;
  let fixture: ComponentFixture<SolirechazosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolirechazosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolirechazosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
