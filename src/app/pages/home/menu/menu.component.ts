import { Component, OnInit } from '@angular/core';
import { RxViewer } from '@shared/ts/rx.viewer';
import { ListHandler } from '@core/service/base-http.service/model/realtime-database/list-handler.model';
import { BaseHttpService } from '@core/service/base-http.service/base-http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menusHandler: ListHandler<any>;
  menus$;
  constructor(private _http: BaseHttpService) {
    this.menusHandler = this._http.list('numbers');
    this.menus$ = this.menusHandler.get({
      queryFn: ref => ref.orderByChild('updatedAt'),
      isKey: true
    });
  }

  ngOnInit() {
  }

  add(value: string) {
    this.menusHandler.add({ title: value, value: value });
  }

  delete(message: any) {
    this.menusHandler.delete(message.key).subscribe(RxViewer);
  }

  updateItem(message: any, value?: string) {
    this.menusHandler.update(message.key, { title: value }).subscribe(RxViewer);
    message.update = false;
  }

}
