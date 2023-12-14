import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-{{component_name_min}}',
  {% if standalone == true %}
    standalone: {{standalone}},
    imports: [CommonModule],
    providers: [],
  {% endif %}
  templateUrl: './{{component_name_min}}.component.html',
  styleUrls: ['./{{component_name_min}}.component.scss']
})
export class {{componentName}}Component implements OnInit {

  standalone: boolean;

  constructor() {}
  
  ngOnInit() {
    this.standalone = {{standalone_min}};
  }

}
