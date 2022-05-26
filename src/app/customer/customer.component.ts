import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Customer } from "./customer.model";

@Component({
  selector: "customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"],
})
export class CustomersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
