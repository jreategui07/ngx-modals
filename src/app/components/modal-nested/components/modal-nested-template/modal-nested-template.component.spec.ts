import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNestedTemplateComponent } from './modal-nested-template.component';

describe('ModalNestedTemplateComponent', () => {
  let component: ModalNestedTemplateComponent;
  let fixture: ComponentFixture<ModalNestedTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNestedTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNestedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
