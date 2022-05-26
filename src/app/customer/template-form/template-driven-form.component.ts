import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Customer } from "../customer.model";

@Component({
  selector: "template-driven-form",
  templateUrl: "./template-driven-form.component.html",
})
export class TemplateDrivenFormComponent implements OnInit {
  customer = new Customer();

  constructor() {}

  ngOnInit(): void {}

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log("Saved: " + JSON.stringify(customerForm.value));
  }
}
