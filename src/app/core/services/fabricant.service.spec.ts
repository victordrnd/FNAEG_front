import { TestBed } from '@angular/core/testing';

import { FabricantService } from './fabricant.service';

describe('FabricantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricantService = TestBed.get(FabricantService);
    expect(service).toBeTruthy();
  });
});
