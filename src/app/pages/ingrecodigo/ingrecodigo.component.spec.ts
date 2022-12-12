import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrecodigoComponent } from './ingrecodigo.component';

describe('IngrecodigoComponent', () => {
  let component: IngrecodigoComponent;
  let fixture: ComponentFixture<IngrecodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrecodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrecodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
