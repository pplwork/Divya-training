console.log('loaded');
const btn=document.querySelector('button');
btn.addEventListener('click',(e)=>{
	e.preventDefault();
	const email=document.querySelector('#email').value;
	const password=document.querySelector('#pswrd').value;
	const gender=document.querySelector('#gender').value;
	const perm1=document.querySelector('#per1').value;
	const perm2=document.querySelector('#per2').value;
	const perm3=document.querySelector('#per3').value;
	const perm4=document.querySelector('#per4').value;
	const position=document.getElementsByName('pos');
	let permissions=0;
	 permissions = (perm1.length > 0) + (perm2.length > 0) + (perm3.length > 0) + (perm4.length > 0) ;
	 let pos='';
	 if(position[0].checked){
		pos=position[0].value;
	 }
	 else if(position[1].checked){
		pos=position[1].value;
	 }
	var regularExpressionpasswrd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

	var regularExpressionemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (regularExpressionpasswrd.test(password) && regularExpressionemail.test(email) && permissions>=2
	&& (position[0].checked||position[1].checked)) {
		console.log("good password");
		const content = document.querySelector('#frm');
		content.innerHTML=`email:- ${email} <br> password:- ${password} <br> gender:-${gender} <br> position:-${pos}
		<button>confirm</button>`
    }
    else{
    	console.log("bad password");
    }
	
	


	

})