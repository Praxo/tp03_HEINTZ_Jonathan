import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { UserService } from './user.service'
import { map, filter } from 'rxjs/operators';
import { Article } from './model/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  subscribe: Subscription;
  input: number;
  catalogues: Observable<Array<Article>>;
  search: string;
  myObservable = interval(2000);

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.subscribe =
      this.myObservable
        .pipe(
          filter((v) => v % 2 == 0)
        )
        .subscribe((value) => this.input = value)
    this.catalogues = this.service.getCatalogue();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }

  onChange() {
    this.catalogues = this.service.getCatalogue()
      .pipe(
        map(
          articles =>
            articles.filter(
              article => article.libelle.startsWith(this.search))
        ))
  }
  client: any = this.service.getClient()
}
