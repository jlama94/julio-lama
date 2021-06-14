import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repository} from '../model/repository';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor (private http: HttpClient) {
  }

  getRepositories () {
    return this.http.get<Repository[]>('https://juliolamabackend-env.eba-bmjbcat8.us-east-2.elasticbeanstalk.com/repositories');
  }
}
