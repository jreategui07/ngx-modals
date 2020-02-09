import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmComponentComponent } from './modal-confirm-component.component';

describe('ModalConfirmComponentComponent', () => {
  let component: ModalConfirmComponentComponent;
  let fixture: ComponentFixture<ModalConfirmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
