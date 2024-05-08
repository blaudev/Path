import { Component } from '@angular/core';
import { SkillGroupComponent } from '../skill-group/skill-group.component';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
  imports: [SkillGroupComponent, RolesComponent],
})
export class GridComponent {}
