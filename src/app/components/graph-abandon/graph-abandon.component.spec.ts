import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAbandonComponent } from './graph-abandon.component';

describe('GraphAbandonComponent', () => {
  let component: GraphAbandonComponent;
  let fixture: ComponentFixture<GraphAbandonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphAbandonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphAbandonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
