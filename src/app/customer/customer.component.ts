import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Customer } from "./customer.model";

@Component({
  selector: "app-customers",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"],
})
export class CustomersComponent implements OnInit {
  customer = new Customer();

  constructor() {}

  ngOnInit(): void {}

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log("Saved: " + JSON.stringify(customerForm.value));
  }
}
