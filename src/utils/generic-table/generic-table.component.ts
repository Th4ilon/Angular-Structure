import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent  implements OnInit {

  @Input() gtSettings: any;
  @Input() gtData: any;
  @Output() detalleEvent = new EventEmitter();
  // @Input() pagObj : any;
  // @Input() isPag : boolean;
  constructor() { }
  ngOnInit() {}

  detalle(id) {
    this.detalleEvent.emit({
      sendedId : id
    });
}
}
