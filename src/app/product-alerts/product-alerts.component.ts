import { Output, EventEmitter, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',//name of this component app- prefix is convention
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  public color = "green";
  constructor() { }

  ngOnInit() {
  }

  notifyMe(){
    this.notify.emit({color:this.color});
  }
}