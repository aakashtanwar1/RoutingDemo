import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  itemId: number = 0;
  queryData: string = "";
  routeData: string = "";
  postId: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    // using state object
    // getCurrentNavigation works in constructor only
    // const navigation = this.router.getCurrentNavigation();
    // this.postId = navigation?.extras.state?.['postId'];
  }
  
  goBack() {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.itemId = +params.get('id')!;
    // });

    // using snapshot
    this.itemId = +this.route.snapshot.paramMap.get('id')!;

    //using queryParameters
    this.queryData = this.route.snapshot.queryParamMap.get('name')!;

    //using queryParameters
    this.routeData = this.route.snapshot.data['detail'];
   
    // using state object
    this.postId = history.state?.postId;

  }
}