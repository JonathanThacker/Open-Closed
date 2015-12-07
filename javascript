<!--
Buisness is open Mon-Fri 11a-7p, Sat 11a-4p, and Closed Sundays. When you visitor arrives to your site, 
this script will tell them whether or not your open for business.
-->

<script language="JavaScript"> 

var myDate = new Date();    

if ( myDate.getDay() < 1 )  {     document.write("We're closed Sundays."); } else 

/* hour is before 11am */ 

if ( myDate.getHours() < 11 &&  myDate.getDay() > 0 )  {     document.write("We'll be open at 11 a.m."); } else 

 /* Hour is from noon to 6:59 pm) */ 
 
 if ( myDate.getHours() >= 12 && myDate.getHours() <= 19 &&  myDate.getDay() > 0 &&  myDate.getDay() < 6 ) {     document.write("We're open right now!"); } else  

/* the hour is after 7pm */ 

if ( myDate.getHours() > 19 && myDate.getHours() <= 24 ) {     document.write("Sorry, we're closed."); } else  

/* Saturdays close at 4pm */

if ( myDate.getHours() > 16 &&  myDate.getDay() > 5 ) {   document.write("Sorry, we're closed."); }  

 myDays=

["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

myDate=new Date(eval('"'+aText.value+'"'))

document.textDay.value=myDays[myDate.getDay()]

</script>
