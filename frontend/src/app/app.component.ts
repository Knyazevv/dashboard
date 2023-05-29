import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

}
export interface Course 
{
  id: number;
  title: string;
  description: string;
  price: number;
  imagePath: string;
  categoryId: number;
  categoryName: string;
}

