import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Shared/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: any;
  searchText: any;
  constructor(private svc: ServiceService) {
  }

  ngOnInit(): void {
    this.getData();

  }
  getData() {
    this.svc.getData().subscribe((res) => {
      this.data = res
    })
  }
  deleteData(id: number) {
    console.log(id)
    this.svc.deleteData(id).subscribe((res) => { 
      console.log(res) 
      this.getData();
    })
    
  }


}
