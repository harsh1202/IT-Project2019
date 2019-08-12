function validate()
{
	var First_Name, Last_Name,Email_Id,
Mobile_Number,
Gender,
Pin_Code,
ClassX_Board,
ClassXII_Board,ClassX_Percentage,
ClassXII_Percentage;
	First_Name=document.login.First_Name.value;
	Last_Name=document.login.Last_Name.value;
Email_Id=document.login.Email_Id.value;
Mobile_Number=document.login.Mobile_Number.value;
Gender=document.login.Gender.value;
Pin_Code=document.login.Pin_Code.value;
ClassX_Board=document.login.ClassX_Board.value;
ClassXII_Board=document.login.ClassXII_Percentage.value;
ClassX_Percentage=document.login.ClassX_Percentage.value;
ClassXII_Percentage=document.login.ClassXII_Percentage.value;

	
	if(First_Name=='' && Last_Name=='' && Email_Id=='' && Mobile_Number=='' && Gender=='' 
		&& Pin_Code=='' && ClassX_Board==''  && ClassXII_Board==''  && ClassXII_Board=='' 
		  && ClassXII_Percentage=='' && ClassX_Percentage=='' )
	{
		document.getElementById('errormsg').innerHTML="All fields are Required";
		return false;
	}
	else if(First_Name=='')
	{
		document.getElementById('errormsg').innerHTML="First_Name is Required";
		return false;

	}

	else if(Last_Name=='')
	{
		document.getElementById('errormsg').innerHTML="Last_Name is Required";
		return false;
	}

	else if(First_Name.length<4 || Last_Name.length<4)
	{
		document.getElementById('errormsg').innerHTML="First and Last_Name should be min 4";
		return false;
	}
else if(Email_Id=='')
	{
		document.getElementById('errormsg').innerHTML="Email_Id is Required";
		return false;
	}
	else if(Mobile_Number=='')
	{
		document.getElementById('errormsg').innerHTML="Mobile_Number is Required";
		return false;
	}
	else if(Gender=='')
	{
		document.getElementById('errormsg').innerHTML="Gender is Required";
		return false;
	}

	else if(Pin_Code=='')
	{
		document.getElementById('errormsg').innerHTML="Area Pin Code is Required";
		return false;
	}

	else if(ClassX_Board=='')
	{
		document.getElementById('errormsg').innerHTML="ClassX_Board field must be filled";
		return false;
	}

	else if(ClassXII_Board=='')
	{
		document.getElementById('errormsg').innerHTML="ClassXII_Board field must be filled";
		return false;
	}

	else if(ClassXII_Percentage=='')
	{
		document.getElementById('errormsg').innerHTML="ClassXII_Percentage field must be filled";
		return false;
	}

	else if(ClassX_Percentage=='')
	{
		document.getElementById('errormsg').innerHTML="ClassX_Percentage field must be filled";
		return false;
	}

	else if(ClassXII_Percentage=='')
	{
		document.getElementById('errormsg').innerHTML="ClassXII_Percentage field must be filled";
		return false;
	}
	else
	{
		document.getElementById('errormsg').innerHTML="";
		return false;

	}
	
	return true;

	
}


function currentDate()
{
	var d;
	d=new Date();
	yr=d.getFullYear();  // return 9999
	mt=d.getMonth(); //retrun 0-11
	dat=d.getDate(); //return 1-31
	day=d.getDay(); //return 0-6


	if(mt==0) { mt="January";}
	else if(mt==1) { mt="February";}
	else if(mt==2) { mt="March";}
	else if(mt==3) { mt="April";}
	else if(mt==4) { mt="May";}
	else if(mt==5) { mt="June";}
	else if(mt==6) { mt="July";}
	else if(mt==7) { mt="August";}
	else if(mt==8) { mt="September";}
	else if(mt==9) { mt="October";}
	else if(mt==10) { mt="November";}
	else { mt="December";}

	if(day==0) { day="Sunday"; }
	else if(day==1) { day="Monday"; }
	else if(day==2) { day="Tuesday"; }
	else if(day==3) { day="Wednesday"; }
	else if(day==4) { day="Thursday"; }
	else if(day==5) { day="Friday"; }
	else  { day="Saturday"; }
 
	document.getElementById('date').innerHTML=day+ ", "+ dat + " " + mt+ " " + yr;
	chTime();

	return true;
}

function curTime()
			{
			var t;
			t=new Date;
			hh=t.getHours()+1;
			mm=t.getMinutes();
			ss=t.getSeconds();

			document.getElementById('hh').innerHTML=hh;
			document.getElementById('mm').innerHTML=mm;
			document.getElementById('ss').innerHTML=ss;
		}

function chTime()
	{
		setInterval(curTime, 1000);
	}
