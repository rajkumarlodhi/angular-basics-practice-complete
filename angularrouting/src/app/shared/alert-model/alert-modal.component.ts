import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal>',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css'],
})
export class AlertModalComponent {
  @Input() error: any;
  @Output() close: any = new EventEmitter<void>();
  onCloseClick() {
    this.close.emit();
  }
}
