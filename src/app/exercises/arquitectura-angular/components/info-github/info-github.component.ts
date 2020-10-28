import { Component, OnInit } from '@angular/core';

import { Github } from '../../interfaces/github';
import { InfoGithubService } from '../../services/info-github.service';

@Component({
  selector: 'app-info-github',
  templateUrl: './info-github.component.html',
  styleUrls: ['./info-github.component.css'],
  providers: [InfoGithubService]
})
export class InfoGithubComponent implements OnInit {

  public user: Github;

  constructor(private infoGithubService: InfoGithubService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.infoGithubService.loadInfoGithub().subscribe(
      (data) => {
        this.user = data;
      }
    );
  }

}
