import { Component, OnInit } from '@angular/core';
import { ColorService } from '@/ts/services/color.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [ColorService]
})
export class ColorPickerComponent implements OnInit {

  public colors: any[];

  constructor(private _colorService: ColorService) { }

  ngOnInit(): void {
    this._getColors();
  }

  private _getColors(): void {
    this._colorService.getColors().subscribe(res => this.colors = res );
  }
}
