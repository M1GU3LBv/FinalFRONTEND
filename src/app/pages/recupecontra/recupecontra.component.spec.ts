import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupecontraComponent } from './recupecontra.component';

describe('RecupecontraComponent', () => {
  let component: RecupecontraComponent;
  let fixture: ComponentFixture<RecupecontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecupecontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecupecontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
