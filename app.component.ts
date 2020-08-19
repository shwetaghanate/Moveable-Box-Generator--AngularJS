import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
      dataSource = []; 
   onAddData() {
  this.dataSource.push(this.dataSource.length);
  }
}
