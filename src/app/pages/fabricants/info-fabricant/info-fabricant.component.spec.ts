import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFabricantComponent } from './info-fabricant.component';

describe('InfoFabricantComponent', () => {
  let component: InfoFabricantComponent;
  let fixture: ComponentFixture<InfoFabricantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFabricantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFabricantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
