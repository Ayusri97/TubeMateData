import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private q: DomSanitizer){}
  transform(path: any) {
    return this.q.bypassSecurityTrustResourceUrl(path);
  }

}
