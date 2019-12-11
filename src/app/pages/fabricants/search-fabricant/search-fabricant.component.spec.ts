import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFabricantComponent } from './search-fabricant.component';

describe('SearchFabricantComponent', () => {
  let component: SearchFabricantComponent;
  let fixture: ComponentFixture<SearchFabricantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFabricantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFabricantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
