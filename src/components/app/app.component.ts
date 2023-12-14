import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { AppService } from '../../services/app.service';
import { Data } from '../../models/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _data = new BehaviorSubject<Data[]>([]);

  title = 'FNOL-UI';
  data: Observable<Data[]> = this._data.asObservable();

  constructor(private appService: AppService){}

  getData() {
    this.appService.getData()
      .pipe(
        tap(console.log)
      )
      .subscribe(value => this._data.next(value));
  }
}
