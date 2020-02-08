import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNestedComponent } from './modal-nested.component';

describe('ModalNestedComponent', () => {
  let component: ModalNestedComponent;
  let fixture: ComponentFixture<ModalNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
