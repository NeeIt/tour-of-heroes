import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { UserModule } from "./users/users.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { MessageComponent } from "./message/message.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { HttpClientModule } from "@angular/common/http";
import { InMemoryDataService } from "./in-memory-data.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserModule,
    UserDetailsComponent,
    MessageComponent,
    DashboardComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
