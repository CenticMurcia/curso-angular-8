import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Github } from './../interfaces/github';

@Injectable()
export class InfoGithubService {

  constructor(private httpClient: HttpClient) { }

  public loadInfoGithub(): Observable<Github>{

    return this.httpClient.get<Github>('https://api.github.com/users/ServerJon');
  }
}
