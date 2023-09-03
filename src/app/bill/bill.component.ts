import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../common.service';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {
  currentDate :any = new Date()
  cardList:any = [];
  subTotal:number = 0;
  tax:number = 0;
  total:number = 0;
  @ViewChild('invoice') invoice: ElementRef | undefined;
  constructor(public dialogRef: MatDialogRef<BillComponent>, private commonService: CommonService){
    this.cardList = this.commonService.cardList;
    this.calculateSubtotal()
  }
  calculateSubtotal(){
    let total = 0;
    this.cardList.forEach((item:any) => {
      total = total + item.price*item.count
    });
    this.subTotal = total;
    this.tax =this.subTotal*0.1;
    this.total = this.subTotal + this.tax;
  }
  generatePDF() {
    const data = (this.invoice as ElementRef).nativeElement;

    html2canvas(data).then((canvas) => {
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('invoice.pdf');
      this.dialogRef.close()
      this.commonService.cardList =[];
      this.commonService.groceryList = this.commonService.groceryList.map(item=>{
        item.count = 0
        return item;
      })
      this.commonService.vegetableList = this.commonService.vegetableList.map(item=>{
        item.count = 0
        return item;
      })
      this.commonService.fruitList = this.commonService.fruitList.map(item=>{
        item.count = 0
        return item;
      })
    });
  }
}
