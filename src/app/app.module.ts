import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customer/customer.component";
import { ReactiveFormComponent } from "./customer/reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./customer/template-form/template-driven-form.component";
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
