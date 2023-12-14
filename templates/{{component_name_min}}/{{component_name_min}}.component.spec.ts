import { ComponentFixture, TestBed } from '@angular/core/testing';

import { {{componentName}}Component } from './{{component_name_min}}.component';

describe('{{componentName}}Component', () => {
  let component: {{componentName}}Component;
  let fixture: ComponentFixture<{{componentName}}Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [{{componentName}}Component]
    });
    fixture = TestBed.createComponent({{componentName}}Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
