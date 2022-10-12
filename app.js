const app = Vue.createApp({
    data: function() {
        return {
            title: 'Login Form Validation',
            email : "",
            emailBlured : false,
            valid : false,
            submitted : false,
            password:"",
            passwordBlured:false
        }
    },
    methods:{
 
        validate : function(){
            this.emailBlured = true;
            this.passwordBlured = true;
            if( this.validEmail(this.email) && this.validPassword(this.password)){
                this.valid = true;
            }
        },
 
        validEmail : function(email) {
 
            var re = /(.+)@(.+){2,}\.(.+){2,}/;
            if(re.test(email.toLowerCase())){
                return true;
            }
 
        },
 
        validPassword : function(password) {
            if (password.length > 7) {
                return true;
            }
        },
 
        submit : function(){
            this.validate();
            if(this.valid){
                this.submitted = true;
            }
        }
    }
})