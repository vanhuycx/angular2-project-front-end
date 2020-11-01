import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee;
  statusMessage: string = 'Loading data. Please wait!';
  columnSpan: number = 2;

  constructor(
    private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let empCode: string = this._activatedRoute.snapshot.params['code'];
    this._employeeService.getEmployeesByCode(empCode).subscribe(
      (employeeData) => {
        if (employeeData == null) {
          this.statusMessage = `Employee with code ${empCode} does not exist.`;
        } else {
          this.employees = employeeData;
        }
      },
      (error) => {
        this.statusMessage =
          'Problem with the service. Please try again after a few minutes.';
        console.error(error);
      }
    );
  }
}
