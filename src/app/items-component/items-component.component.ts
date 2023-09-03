import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
export enum itemList {
 'groceryList',
 'vegetableList',
 'fruitList'
}

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.scss']
})
export class ItemsComponentComponent {
  itemList:Array<any> = []
  selectedVariable = ''
  constructor(private route: ActivatedRoute, private commonService:CommonService){

  }
  ngOnInit(){
    this.route.params.subscribe((res:any)=>{
      if(res.selectionType == 'grocery'){
        this.itemList = this.commonService.groceryList
        this.selectedVariable = 'groceryList'
      } else if(res.selectionType == 'vegetable'){
        this.selectedVariable = 'vegetableList'
        this.itemList = this.commonService.vegetableList
      } else {
        this.selectedVariable = 'fruitList'
        this.itemList = this.commonService.fruitList
      }
    })
  }

  updateItem(operation:string,index:number){
    if(operation == 'add'){
      this.itemList[index].count =  this.itemList[index].count+1 
      this.commonService[this.selectedVariable as keyof typeof itemList][index].count =  this.itemList[index].count
    } else if( this.itemList[index].count>0) {
      this.itemList[index].count =  this.itemList[index].count-1 
      this.commonService[this.selectedVariable as keyof typeof itemList][index].count =  this.itemList[index].count
    }
  }
}
