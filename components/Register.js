app.component('register-form', {
    template:
    /*html*/
    `
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <p><h2 class="text-center">{{ title }}<h2></p>
                <div class="card px-5 py-5">
                    <form class="form-data" v-if="!submitted">
                        <div class="forms-inputs mb-4"> 
                            <span>Full Name</span> 
                            <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="fullName" 
                            v-bind:class="{'form-control':true, 'is-invalid' : !validFullName(fullName) && fullNameBlured}" 
                            v-on:blur="fullNameBlured = true"
                        >
                                <div class="invalid-feedback">Full Name is required!</div>
                        </div>
                        <div class="forms-inputs mb-4"> 
                            <span>Email</span> 
                            <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="email" 
                            v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" 
                            v-on:blur="emailBlured = true"
                        >
                                <div class="invalid-feedback">A valid email is required!</div>
                        </div>
                        <div class="forms-inputs mb-4"> 
                            <span>Confirm Email</span> 
                            <input 
                            autocomplete="off" 
                            type="text" 
                            v-model="confirmEmail" 
                            v-bind:class="{'form-control':true, 'is-invalid' : !validConfirmEmail(confirmEmail) && confirmEmailBlured}" 
                            v-on:blur="confirmEmailBlured = true"
                        >
                                <div class="invalid-feedback">Email must be matched!</div>
                        </div>
                        <div class="forms-inputs mb-4"> 
                            <span>Password</span> 
                            <input 
                            autocomplete="off" 
                            type="password" 
                            v-model="password" 
                            v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" 
                            v-on:blur="passwordBlured = true"
                        >
                                <div class="invalid-feedback">Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#_$%^&*)!</div>
                        </div>
                        <div class="forms-inputs mb-4"> 
                            <span>Confirm Password</span> 
                            <input 
                            autocomplete="off" 
                            type="password" 
                            v-model="confirmPassword" 
                            v-bind:class="{'form-control':true, 'is-invalid' : !validConfirmPassword(confirmPassword) && confirmPasswordBlured}" 
                            v-on:blur="confirmPasswordBlured = true"
                        >
                                <div class="invalid-feedback">Password must be matched!</div>
                        </div>
                        <div class="mb-3"> 
                            <button 
                                v-on:click.stop.prevent="submit" 
                                class="btn btn-dark w-100"
                            >
                            Sign Up
                            </button> 
                        </div>
                        <p class="forgot-password text-right">
                            Already registered 
                            <router-link to="/about">Sign In</router-link>
                        </p>
                    </form>
                    <div class="success-data" v-else>
                        <div class="text-center d-flex flex-column"> 
                            <i class='bx bxs-badge-check'></i> 
                            <span class="text-center fs-1">
                                You have been registering Successfully
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            title: 'Register Form',
            fullName: "",
            fullNameBlured : false,
            email : "",
            emailBlured : false,
            confirmEmail: "",
            confirmEmailBlured : false,
            valid : false,
            submitted : false,
            password:"",
            passwordBlured:false,
            confirmPassword:"",
            confirmPasswordBlured:false
        }
    },
    
    methods:{
 
        validate : function(){
            this.fullNameBlured = true;
            this.emailBlured = true;
            this.confirmEmailBlured = true;
            this.passwordBlured = true;
            this.confirmPasswordBlured = true;
            if(this.validFullName(this.fullName) &&  
                this.validEmail(this.email) && 
                this.validConfirmEmail(this.confirmEmail) && 
                this.validPassword(this.password) && 
                this.validConfirmPassword(this.confirmPassword)){
                this.valid = true;
            }
        },

        validFullName : function(fullName) {
            var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if(regName.test(fullName)){
                return true;
            }
 
        },
 
        validEmail : function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(email)){
                return true;
            }
 
        },

        validConfirmEmail: function(confirmEmail) {
            if(this.email === this.confirmEmail) {
                return true
            }
        },

        validPassword : function(password) {
            var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\$%\^&\*])(?=.{8,})");
            if (re.test(password)) {
                return true;
            }
        },

        validConfirmPassword: function(confirmPassword) {
            if(this.password === this.confirmPassword) {
                return true
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