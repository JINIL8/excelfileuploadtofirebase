import { Component, OnInit } from '@angular/core';
import { XltfirestoreService } from '../services/xltfirestore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message = 'Uploading';
  showMessage: boolean = false;
  constructor(private xlservice: XltfirestoreService) { }

  ngOnInit() {
  }
  fileChange(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      this.showMessage = true;
      this.xlservice.uploadFile(file).then(() => {
        this.message = 'stored';

      });
    }
  }
}
