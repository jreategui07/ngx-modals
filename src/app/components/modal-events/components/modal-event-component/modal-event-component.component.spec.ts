import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventComponentComponent } from './modal-event-component.component';

describe('ModalEventComponentComponent', () => {
  let component: ModalEventComponentComponent;
  let fixture: ComponentFixture<ModalEventComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEventComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
