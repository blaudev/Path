import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  standalone: true,
  imports: [],
  templateUrl: './editable-text.component.html',
  styleUrl: './editable-text.component.css',
})
export class EditableTextComponent {
  @Input() value: string = '';

  protected showIcon: boolean = false;
  protected editMode: boolean = false;

  onMouseOver() {
    this.showIcon = true;
  }

  onMouseLeave() {
    this.showIcon = false;
  }

  setEditMode() {
    this.editMode = true;
    this.showIcon = false;
  }

  onBlur() {
    this.editMode = false;
  }

  onInput(event: any) {
    this.value = event.target.value;
  }
}
