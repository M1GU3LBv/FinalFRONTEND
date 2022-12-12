
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexpedienteComponent } from './nexpediente.component';

describe('NexpedienteComponent', () => {
  let component: NexpedienteComponent;
  let fixture: ComponentFixture<NexpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NexpedienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NexpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
