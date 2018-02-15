import { TestBed, inject } from '@angular/core/testing';

import { ViolationTypeServiceService } from './violation-type-service.service';

describe('ViolationTypeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViolationTypeServiceService]
    });
  });

  it('should be created', inject([ViolationTypeServiceService], (service: ViolationTypeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
