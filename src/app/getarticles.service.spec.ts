import { TestBed } from '@angular/core/testing';

import { GetarticlesService } from './getarticles.service';

describe('GetarticlesService', () => {
  let service: GetarticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetarticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
