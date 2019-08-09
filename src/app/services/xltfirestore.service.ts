import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';

import { HttpClient } from '@angular/common/http';


import * as _ from 'lodash';
import { map } from 'rxjs/operators/';
@Injectable({
  providedIn: 'root'
})
export class XltfirestoreService {
  ref = firebase.storage().ref('excel');

  constructor(private afs: AngularFirestore,private http: HttpClient) { }
  uploadFile(file) {
    return new Promise(resolve => {
      this.ref.put(file).then(function(snapshot) {
        const downloadurl = snapshot.downloadURL;
        firebase.database().ref('excelimport').child('newexcel').set({
          thaturl: downloadurl
        }).then(() => {
          console.log('uploaded');
        });
      });
      setTimeout(() => {
        this.firestorethis().then(() => {
            resolve();
        } );
      }, 60000);
    });
  }
  firestorethis() {
    return new Promise((resolve) => {

      firebase.storage().ref('jsonfile.json').getDownloadURL().then((url) => {
          this.http.get(url).pipe(map(res => console.log(res))).subscribe((data) => {
           this.storethis(data).then(() => {
             resolve();
           });
          });
      });
    });
  }
   storethis(somejson) {
    return new Promise((resolve) => {

    _.map(somejson, (element, i) => {
      _.keys(element).map(elementkey => {
        this.afs.collection('mycoll').doc('document' + i).set(element);
      });
    });
    resolve();
  });
}
}
