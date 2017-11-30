export function getTime() {
      var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var d = new Date();
      var mon = month[d.getMonth()];
      var day = d.getDate();
      var year = d.getFullYear();
      var dateAll = mon + " " + day + ", " + year;
    
      return dateAll;
 }

 export function getTemp(temp) {
     var fahrenheit = parseInt(temp * 9/5 - 459.67);
     return fahrenheit;
 }
