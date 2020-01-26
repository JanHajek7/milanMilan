import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: "user",
        loadChildren: () =>
          import("./user/user.module").then(module => module.UserModule),
        pathMatch: "full"
      }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
