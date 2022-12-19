import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosjdComponent } from './mosjd.component';

describe('MosjdComponent', () => {
  let component: MosjdComponent;
  let fixture: ComponentFixture<MosjdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosjdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosjdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
