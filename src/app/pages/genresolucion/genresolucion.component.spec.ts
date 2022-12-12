
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresolucionComponent } from './genresolucion.component';

describe('GenresolucionComponent', () => {
  let component: GenresolucionComponent;
  let fixture: ComponentFixture<GenresolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
