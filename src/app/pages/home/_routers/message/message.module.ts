import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule,
    SharedModule
  ],
  declarations: [
    MessageComponent,
    MessageListComponent
  ]
})
export class MessageModule { }
