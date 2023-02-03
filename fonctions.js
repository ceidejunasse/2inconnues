function inconnues2()
{
	a=document.getElementById("o").value;
	b=document.getElementById("p").value;
	c=document.getElementById("q").value;
	d=document.getElementById("r").value;
	e=document.getElementById("s").value;
	f=document.getElementById("t").value;

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



function degre2()
{
	a=document.getElementById("a").value;
	b=document.getElementById("b").value;
	c=document.getElementById("c").value;
	d=document.getElementById("d").value;
	e=document.getElementById("e").value;
	f=document.getElementById("f").value;

	// alert("votre valeur de e ="+e);

	if(a==0&&b==0) // L'equatiopn est resume a une equationde degre 1
	{
		if(c==0&&d==0) // // L'equatiopn est resume a une equationde degre 0 car il y'a plus inconnues x
		{
			if(e==0&&f==0)
			{
				alert(" Serieusement L'equation admet une infinite de solution.");
			}
			if(e!=0||f!=0)
			{
				alert("l'equation n'admet pas de solution: S={}");
			}
		}
	}
	
	if(a!=0||b!=0||c!=0||d!=0)
	{
		D1=c*c-d*d-4*a*e+4*b*f; // partie reel du Discriminent
		D2=2*c*d-4*a*f-4*e*b; // partie imaginaire Discriminent

		if(D2>=0)
		{
			X=Math.pow((D1+Math.pow(D1*D1+D2*D2, 1/2))/2, 1/2);
			Y=Math.pow((-D1+Math.pow(D1*D1+D2*D2, 1/2))/2, 1/2);		
			L1=(-a*c-a*X-b*Y-d*Y)/(2*a*a+2*b*b); // partie reel pour la solution 1
			L2=(c*b+X*b-a*Y-d*a)/(2*a*a+2*b*b); // partie imaginaire pour la solution 1
			L3=(-c*a+X*a+Y*b-d*b)/(2*a*a+2*b*b); // partie reel pour la solution 2
			L4=(Y*a-d*a+c*b-b*X)/(2*a*a+2*b*b); // partie imaginaire pour la solution 2

			document.getElementById("x1").value = L1;
			document.getElementById("y1").value = L2;

			document.getElementById("x2").value = L3;
			document.getElementById("y2").value = L4;

		}

		if(D2<0)
		{
			X=Math.pow((D1+Math.pow(D1*D1+D2*D2, 1/2))/2, 1/2); // partie reel du Discriminent
			Y=Math.pow((-D1+Math.pow(D1*D1+D2*D2, 1/2))/2, 1/2); // partie imaginaire Discriminent
			L1=(-a*c+a*X+b*Y-d*b)/(2*a*a+2*b*b); // partie reel pour la solution 1
			L2=(c*b-X*b-a*Y-d*a)/(2*a*a+2*b*b); // partie imaginaire pour la solution 1
			L3=(-c*a-X*a+Y*b-d*b)/(2*a*a+2*b*b); // partie reel pour la solution 2
			L4=(Y*a-d*a+c*b+b*X)/(2*a*a+2*b*b); // partie imaginaire pour la solution 2


			document.getElementById("x1").value = L1;
			document.getElementById("y1").value = L2;

			document.getElementById("x2").value = L3;
			document.getElementById("y2").value = L4;

	
		}
		
	}
}