import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphVisiteComponent } from './graph-visite.component';

describe('GraphVisiteComponent', () => {
  let component: GraphVisiteComponent;
  let fixture: ComponentFixture<GraphVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
