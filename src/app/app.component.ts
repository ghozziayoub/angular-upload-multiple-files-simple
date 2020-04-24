import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-multiple';
  result: string = "";

  save(event){
    var selectFile = event.target.files;

    for (let i = 0; i < selectFile.length; i++) {
      this.result += "File name : "+selectFile[i].name+" <br>";
    }
  }
}
