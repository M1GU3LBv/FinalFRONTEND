import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosdocumentosComponent } from './mosdocumentos.component';

describe('MosdocumentosComponent', () => {
  let component: MosdocumentosComponent;
  let fixture: ComponentFixture<MosdocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosdocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosdocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
