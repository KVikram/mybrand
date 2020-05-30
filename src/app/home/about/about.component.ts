import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name:String;
  title:String;
  summary:String;

  constructor(private bottomSheet: MatBottomSheet) {
    this.name ='Vikram Kadiam';
    this.title='Technical Architect';
    this.summary=`Currently employed in TCS (Tata Consultancy Services Ltd) as Assistant Consultant in the
     role of Technical Architect, working for a major automotive client in transforming their IT business by 
     innovating and understanding their vision to roadmap for successful delivery of services.`;
   }

   openShareSheet():void{
    this.bottomSheet.open(ShareMenuSheet);
   }

  ngOnInit() {
  }

}

@Component({
  selector: 'share-menu-sheet',
  templateUrl: 'share-menu-sheet.html',
})
export class ShareMenuSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<ShareMenuSheet>,private snackBar: MatSnackBar) {}

  copyLink(link: string): void {
    this.bottomSheetRef.dismiss();
    //event.preventDefault();
    this.copyMessage(link);
    this.openCopyMsg('Link is copied');
  }

  /*Native JS code to copy some text to clipboard */
  //TODO : Replace this method with [cdkCopyToClipboard] after migrating to Angular v9 !
  copyMessage(val: string):void{
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  openCopyMsg(message: string) {
    this.snackBar.open(message,'', {
      duration: 1000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }
}