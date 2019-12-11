import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKitComponent } from './modal-kit.component';

describe('ModalKitComponent', () => {
  let component: ModalKitComponent;
  let fixture: ComponentFixture<ModalKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
