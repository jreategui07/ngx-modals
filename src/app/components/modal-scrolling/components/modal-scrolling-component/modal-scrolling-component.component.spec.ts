import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScrollingComponentComponent } from './modal-scrolling-component.component';

describe('ModalScrollingComponentComponent', () => {
  let component: ModalScrollingComponentComponent;
  let fixture: ComponentFixture<ModalScrollingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalScrollingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalScrollingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
