import { Component, OnInit } from '@angular/core';
import {ObraService} from "../../../services/obra/obra.service";

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.scss']
})
export class ObraListComponent implements OnInit {

  private obras:[];

  constructor(private obraService: ObraService) { }

   ngOnInit() {

      this.obraService.getAll().subscribe(data=>{
        this.obras = data.data;
      });

  }

}
