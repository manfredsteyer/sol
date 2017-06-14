import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-edit',
  templateUrl: './passenger-edit.component.html',
  styleUrls: ['./passenger-edit.component.css']
})
export class PassengerEditComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
  }

}
