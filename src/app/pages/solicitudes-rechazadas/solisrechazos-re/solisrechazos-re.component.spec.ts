import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolisrechazosReComponent } from './solisrechazos-re.component';

describe('SolisrechazosReComponent', () => {
  let component: SolisrechazosReComponent;
  let fixture: ComponentFixture<SolisrechazosReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolisrechazosReComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolisrechazosReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
