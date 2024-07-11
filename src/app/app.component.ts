import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FoodsComponent } from './foods/foods.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HeroComponent,FoodsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frankie';

  name: String = "Frankie";

  defaul: number = 1;
  

    AddNumber(figure: number) {
  this.defaul = this.defaul + figure;
}}
