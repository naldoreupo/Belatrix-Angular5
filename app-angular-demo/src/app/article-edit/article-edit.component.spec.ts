import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { ArticleEditComponent } from './article-edit.component';
import { ArticlesService } from '../shared/articles.service';


describe('ArticleEditComponent', () => {
  let component: ArticleEditComponent;
  let fixture: ComponentFixture<ArticleEditComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, HttpClientModule, RouterTestingModule],
      declarations: [ ArticleEditComponent],
      providers:[ArticlesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditComponent);
    component = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css('.inputText'));
    element  = de.nativeElement;

  });

  it(`should create service`, async(inject([ArticlesService],
    (apiService: ArticlesService) => {
      expect(apiService).toBeTruthy();
  })));

});
