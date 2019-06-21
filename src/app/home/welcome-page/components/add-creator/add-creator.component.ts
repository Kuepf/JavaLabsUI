import { Component, OnInit } from '@angular/core';
import { Creator } from 'src/app/shared/models/Creator';
import { CreatorService } from '../../services/creator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-creator',
  templateUrl: './add-creator.component.html',
  styleUrls: ['./add-creator.component.scss']
})
export class AddCreatorComponent implements OnInit {

  public name: string;
  public country: string;

  private creator: Creator;

  constructor(private creatorService: CreatorService, private router: Router) { }

  ngOnInit() {
  }

  public addCreator() {
    this.creator = {
      id: undefined,
      name: this.name,
      country: this.country
    };
    this.creatorService.addCreator(this.creator).subscribe(
      r => this.router.navigate(['/creators'])
    );
  }

}
