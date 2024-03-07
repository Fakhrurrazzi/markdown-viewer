import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentations',
  templateUrl: './documentations.component.html',
  styleUrls: ['./documentations.component.css']
})
export class DocumentationsComponent {
  documentations: string;
  href: string;

  constructor(private route: ActivatedRoute){
    this.documentations = '';
    this.href = '';
  }

  ngOnInit(): void {
    let documentName = this.route.snapshot.paramMap.get('documentName');
    this.href = window.location.href;
    this.documentations = './assets/documentation/' +  documentName + '.md';
  }
}
