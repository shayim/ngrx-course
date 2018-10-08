import { TestBed } from '@angular/core/testing';

import { LoadThreadsEffectService } from './load-threads-effect.service';

describe('LoadThreadsEffectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadThreadsEffectService = TestBed.get(LoadThreadsEffectService);
    expect(service).toBeTruthy();
  });
});
