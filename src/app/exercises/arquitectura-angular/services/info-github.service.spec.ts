import { TestBed } from '@angular/core/testing';

import { InfoGithubService } from './info-github.service';

describe('InfoGithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoGithubService = TestBed.get(InfoGithubService);
    expect(service).toBeTruthy();
  });
});
