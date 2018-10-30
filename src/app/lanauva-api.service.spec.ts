import { TestBed } from '@angular/core/testing';

import { LanauvaAPIService } from './lanauva-api.service';

describe('LanauvaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanauvaAPIService = TestBed.get(LanauvaAPIService);
    expect(service).toBeTruthy();
  });
});
