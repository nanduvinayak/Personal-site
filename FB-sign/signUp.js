$(document).ready(function(){
    $('#signupForm').validate({
        rules:{
            fname:{
                required:true
            },
            sname:{
                required:true
            },
            email:{
                email:true
            },
            password:{
                required:true,
                alphanumeric:true
            },
            dropbox:{
                required:true
            }
            
            
        }
    })
})