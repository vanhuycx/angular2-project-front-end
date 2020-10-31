import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  selectedEmployeeCountRadioButton: string = 'All';
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _employeeService: EmployeeService) {}

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmployeeCount(): number {
    return this.employees.length;
  }
  getTotalMaleEmployeeCount(): number {
    return this.employees.filter((e) => e.gender === 'Male').length;
  }
  getTotalFemaleEmployeeCount(): number {
    return this.employees.filter((e) => e.gender === 'Female').length;
  }

  //Initilize the employees variable using callback from Observable
  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (employeeData) => (this.employees = employeeData),
      (error) => {
        this.statusMessage =
          'Problem with the service. Please try again after a few minutes.';
        console.error(error);
      }
    );
  }
}
