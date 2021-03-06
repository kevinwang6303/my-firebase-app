import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { ListHandler } from './model/realtime-database/list-handler.model';
import { ObjectHandler } from './model/realtime-database/object-handler.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { MyHttpHandler } from '@core/service/base-http.service/model/myhttp-handler.model';
import { CollectionHandler, DocumentHandler } from '@core/service/base-http.service/model/cloud-firestore';
import { BatchHandler } from '@core/service/base-http.service/model/cloud-firestore/batch-handler.model';
import { BlockViewService } from '@core/service/block-view.service';
import { AlertConfirmService } from '@core/component/alert-confirm';

@Injectable()
export class BaseHttpService {

  constructor(
    private _afs: AngularFirestore,
    private _db: AngularFireDatabase,
    private _http: HttpClient,
    private _block: BlockViewService,
    private _alc: AlertConfirmService,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  request<T>(url: string) {
    return new MyHttpHandler(this._http, url, this._block, this._alc, this.platformId);
  }

  collection<T>(url: string) {
    return new CollectionHandler<T>(this._afs, url);
  }

  document<T>(url: string) {
    return new DocumentHandler<T>(this._afs, url);
  }

  batch() {
    return new BatchHandler(this._afs);
  }

  list<T>(url: string) {
    return new ListHandler<T>(this._db, url);
  }

  object<T>(url: string) {
    return new ObjectHandler<T>(this._db, url);
  }

}

