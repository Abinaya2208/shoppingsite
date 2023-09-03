import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppingStore';
  images: string[] = [
    'assets/image1.jpg',
    'assets/image2.jpg'
  ];
  constructor(private route:Router, private commonService: CommonService,public dialog: MatDialog){

  }
  navigate(url:string){
    this.route.navigate([url])
  }
  generateBill(){
    this.commonService.cardList = [...this.commonService.groceryList,...this.commonService.fruitList,...this.commonService.vegetableList].filter(item=>item.count>0)
    this.dialog.open(BillComponent,{
      width: '800px',
      height: '600px'

    })
  }
}
