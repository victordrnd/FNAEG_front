/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KitService } from './kit.service';

describe('KitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KitService]
    });
  });

  it('should ...', inject([KitService], (service: KitService) => {
    expect(service).toBeTruthy();
  }));
});
