import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  customer = new Customer();
  // Root FormGroup
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //IMPLEMENTATION WITHOUT FORMBUILDER SAME BUT NEED TO INITALIZE NEW FORMCONTROL INSTANCES
    // //This where we create the controls for the form as oppose to template-driven approach
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true),
    // });

    //This is how u set validators  and where u go to set custom ones
    this.customerForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required]],
      phone: [""],
      notification: ["email"],
      sendCatalog: true,
    });
  }

  save() {
    console.log(this.customerForm);
  }

  populateTestData() {
    //setValue is how we change all the value of that form
    //while patchValue changes certain parts
    this.customerForm.setValue({
      firstName: "bob",
      lastName: "bob",
      email: "bob@gmail.com",
      sendCatalog: false,
    });
  }

  //Change validation on radio button change
  setNotificationsRequired(notifcationType: string) {
    const phoneControl = this.customerForm.get("phone");

    if (notifcationType === "text") {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    //Reevaluate the input contol
    phoneControl.updateValueAndValidity();
  }
}
