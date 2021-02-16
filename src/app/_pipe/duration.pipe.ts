import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  
  transform(value: any, ...args: any[]): any {
    let expDuration='';
    if (value) {
      
      let seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
     
      const intervals = {
          'year': 31536000,
          'month': 2592000
      };
      let counter;
      for (const i in intervals) {
          counter = Math.floor(seconds / intervals[i]);
          if (counter > 0){
            if (counter === 1) {
              expDuration=expDuration+' '+ counter + ' ' + i ; // singular (1 day ago)
            } else {
              expDuration=expDuration+' '+ counter + ' ' + i + 's'; // plural (2 days ago)
            }
            seconds=seconds-intervals[i]*counter;
          }
            
      }
  }
  return expDuration;
  }

}
