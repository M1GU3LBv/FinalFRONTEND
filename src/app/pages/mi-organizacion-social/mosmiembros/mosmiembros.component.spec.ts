import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosmiembrosComponent } from './mosmiembros.component';

describe('MosmiembrosComponent', () => {
  let component: MosmiembrosComponent;
  let fixture: ComponentFixture<MosmiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosmiembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosmiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
