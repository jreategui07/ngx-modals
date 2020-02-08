import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScrollingComponent } from './modal-scrolling.component';

describe('ModalScrollingComponent', () => {
  let component: ModalScrollingComponent;
  let fixture: ComponentFixture<ModalScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
