import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSimpleTemplateComponent } from './modal-simple-template.component';

describe('ModalSimpleTemplateComponent', () => {
  let component: ModalSimpleTemplateComponent;
  let fixture: ComponentFixture<ModalSimpleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSimpleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSimpleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
