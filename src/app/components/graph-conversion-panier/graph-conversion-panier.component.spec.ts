import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphConversionPanierComponent } from './graph-conversion-panier.component';

describe('GraphConversionPanierComponent', () => {
  let component: GraphConversionPanierComponent;
  let fixture: ComponentFixture<GraphConversionPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphConversionPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphConversionPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
