import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabricantComponent } from './create-fabricant.component';

describe('CreateFabricantComponent', () => {
  let component: CreateFabricantComponent;
  let fixture: ComponentFixture<CreateFabricantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFabricantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFabricantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
