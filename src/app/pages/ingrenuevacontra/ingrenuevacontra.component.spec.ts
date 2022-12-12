import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrenuevacontraComponent } from './ingrenuevacontra.component';

describe('IngrenuevacontraComponent', () => {
  let component: IngrenuevacontraComponent;
  let fixture: ComponentFixture<IngrenuevacontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrenuevacontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrenuevacontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
