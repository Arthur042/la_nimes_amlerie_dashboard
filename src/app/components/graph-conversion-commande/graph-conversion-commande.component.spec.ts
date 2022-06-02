import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphConversionCommandeComponent } from './graph-conversion-commande.component';

describe('GraphConversionCommandeComponent', () => {
  let component: GraphConversionCommandeComponent;
  let fixture: ComponentFixture<GraphConversionCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphConversionCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphConversionCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
