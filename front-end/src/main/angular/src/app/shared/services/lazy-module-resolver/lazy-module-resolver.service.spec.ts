import { TestBed } from '@angular/core/testing';
import { LazyModuleResolver } from "./lazy-module-resolver.service";


describe('LazyModuleResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyModuleResolver = TestBed.get(LazyModuleResolver);
    expect(service).toBeTruthy();
  });
});
