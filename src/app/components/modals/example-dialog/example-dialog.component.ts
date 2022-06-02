import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
