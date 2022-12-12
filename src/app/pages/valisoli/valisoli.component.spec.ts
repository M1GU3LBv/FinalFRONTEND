import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValisoliComponent } from './valisoli.component';

describe('ValisoliComponent', () => {
  let component: ValisoliComponent;
  let fixture: ComponentFixture<ValisoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValisoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValisoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});