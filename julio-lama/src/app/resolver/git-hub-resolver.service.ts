import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Repository } from '../model/repository';
import { Observable } from 'rxjs';
import { GitHubService } from '../service/git-hub.service';

@Injectable({
  providedIn: 'root'
})
export class GitHubResolverService implements Resolve<Repository[]> {


  constructor(private service: GitHubService) { }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Repository[]> |
    Promise<Repository[]> |
    Repository[] {
    return this.service.getRepositories();
  }
}
