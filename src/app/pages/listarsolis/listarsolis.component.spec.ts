import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsolisComponent } from './listarsolis.component';

describe('ListarsolisComponent', () => {
  let component: ListarsolisComponent;
  let fixture: ComponentFixture<ListarsolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarsolisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
