import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css'],
})
export class OthersComponent implements OnInit, OnChanges {
  @Input()
  simpleInput: string;

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);

      console.log(
        `${propertyName} : current value =  ${current} , previous value =  ${previous}`
      );
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
