import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css'],
})
export class EmployeeCountComponent implements OnInit {
  selectRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<
    string
  >();

  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  onRadionButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectRadioButtonValue);
  }

  constructor() {}

  ngOnInit(): void {}
}
