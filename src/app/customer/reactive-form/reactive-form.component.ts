import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  customer = new Customer();
  // Root FormGroup
  customerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    //This where we create the controls for the form as oppose to template-driven approach
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),
    });
  }

  save() {
    console.log(this.customerForm);
  }
}
