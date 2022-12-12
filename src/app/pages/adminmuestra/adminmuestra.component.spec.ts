import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmuestraComponent } from './adminmuestra.component';

describe('AdminmuestraComponent', () => {
  let component: AdminmuestraComponent;
  let fixture: ComponentFixture<AdminmuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmuestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
