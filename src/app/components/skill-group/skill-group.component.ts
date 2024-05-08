import { Component, Input } from '@angular/core';
import { Skill } from '../../models/Skill';
import { EditableTextComponent } from '../editable-text/editable-text.component';

@Component({
  selector: 'app-skill-group',
  standalone: true,
  imports: [EditableTextComponent],
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

  protected addSkill() {
    this.skills = [
      ...this.skills,
      { name: 'New Skill', level: this.groups * this.levelPerGroup - 1 },
    ];
  }

  protected setSkillLevel(skill: Skill, level: number) {
    this.skills = this.skills.map((s) => (s === skill ? { ...s, level } : s));
  }
}
