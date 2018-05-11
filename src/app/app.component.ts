import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseHttpService } from '@core/service/base-http.service/base-http.service';
import { ListHandler } from '@core/service/base-http.service/model/realtime-database/list-handler.model';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
