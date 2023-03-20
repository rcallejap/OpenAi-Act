import { Component, OnInit } from '@angular/core';

import { ModerationsService } from '../services/moderations.service';

@Component({
  selector: 'app-moderations',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})

export class ModerationsComponent implements OnInit {
  constructor(private textdavinciedit001 : ModerationsService) { }

  ngOnInit(): void {
  }

  result :string = "";
  inputPrompt : string  = "";

  postCompletition(){

    let myprompt = ` ${this.inputPrompt}`;

    var payload = {
      input: myprompt, 
    }

    this.textdavinciedit001.postCompletition(payload)
    .subscribe((data: any) => {
	    //alert(JSON.stringify(data));
	console.log(data);
        this.result = data.results[0].flagged;

  });

  }
}
