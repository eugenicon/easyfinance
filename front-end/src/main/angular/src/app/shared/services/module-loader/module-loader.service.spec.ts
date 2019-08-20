import { TestBed } from '@angular/core/testing';

import { ModuleLoaderService } from './module-loader.service';

describe('ModuleLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleLoaderService = TestBed.get(ModuleLoaderService);
    expect(service).toBeTruthy();
  });
});
