import { Component, Input } from '@angular/core';
import { Skill } from '../../models/Skill';

@Component({
  selector: 'app-skill-group',
  standalone: true,
  imports: [],
  templateUrl: './skill-group.component.html',
  styleUrl: './skill-group.component.css',
})
export class SkillGroupComponent {
  @Input() name: string = 'Skill Group 1';
  @Input() groups: number = 5;
  @Input() levelPerGroup: number = 5;
  @Input() skillsColumnWidth: string = '250px';
  @Input() cellheight: string = '40px';
  @Input() skills: Skill[] = [];

  groupStyle() {
    return {
      'grid-template-columns': `${this.skillsColumnWidth} repeat(${
        this.groups * this.levelPerGroup
      }, 1fr)`,
    };
  }

  cells() {
    return Array.from(
      { length: this.groups * this.levelPerGroup },
      (_, i) => i
    );
  }
}
