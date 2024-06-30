import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {

  @Input() options: { key: string, value: string }[] = [];
  @Input() groupLabel: string = '';
  @Input() id: string = "";

  @Output() onInputValue: EventEmitter<string> = new EventEmitter<string>();

  @Input() selectedValue: string = '';

  onSelectionChange(value: string) {
    this.selectedValue = value;
    this.onInputValue.emit(this.selectedValue)
  }

}
