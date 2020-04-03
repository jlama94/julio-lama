import { TestBed } from '@angular/core/testing';

import { GitHubResolverService } from './git-hub-resolver.service';

describe('GitHubResolverService', () => {
  let service: GitHubResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
