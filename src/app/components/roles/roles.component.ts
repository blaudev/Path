import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  @Input() roles: string[] = [];
  @Input() skillsColumnWidth: string = '250px';
  @Input() cellheight: string = '50px';

  containerStyle() {
    return {
      'grid-template-columns': `${this.skillsColumnWidth} repeat(${this.roles.length}, 1fr)`,
    };
  }
}
