//your JS code here. If required.
var age =  document.getElementById('age').value
var name = document.getElementById('Name').value
var submitbtn = document.getElementById('submitBtn').addEventListener('click',()=>{
		if(age === '' || name === ''){
		alert('please fill the field')
		}
		else{
			return new Promise(resolve,reject)=>{
				if(age > 18){
					resolve(
					setTimeout(()=>{
						alert('Welcome,'+ `${name}`+'. You can vote.')
					}() , 4000))
				}
				else{
					reject(alert("Oh sorry"+ `${name}`+". You aren't old enough."))
				}
			}
		}
})
