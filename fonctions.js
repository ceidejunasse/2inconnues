function inconnues2()
{
	a=document.getElementById("a").value;
	b=document.getElementById("b").value;
	c=document.getElementById("c").value;
	d=document.getElementById("d").value;
	e=document.getElementById("e").value;	
	f=document.getElementById("f").value;
	Ds=a*e-d*b;
	Dx=c*e-f*b;
	Dy=a*f-d*c;
	x=Dx/Ds;
	y=Dy/Ds;
	if(Ds==0)
	{
		if(Dx ==0 && Dy == 0)
		{
		document.write("le systeme admet une infinite de solution");
		}
		if(Dx !=0 ||  Dy !=0)
		{
			document.write("le systeme admet pas de slution");
		}
	}
	if(Ds!=0)
	{
		document.getElementById("x").value = x;
		document.getElementById("y").value = y;
		//alert("la solution est:S={("+x+";"+y+")}");
	}
}



function degre_2()
{
	
}