import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IssueService} from '../issue.service';
import * as octicons from 'octicons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(private issueService: IssueService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }

  ngOnInit() {
    this.search();
  }

  submit(query: string, inTitle, inDescription, inComments: Boolean): void {

    console.log('inTitle = ' + inTitle + ' inDescription = ' + inDescription + ' inComments = ' + inComments );

    this.router.navigate(['search'], { queryParams: { query: query } })
      .then(_ => this.search() );
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.issueService
      .search(this.query)
      .subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.issues) {
      this.results = res.issues;
    }
  }

}
