        onSubmit() : void {&#xD;&#xA;            this.formSubmitted = true;&#xD;&#xA;            if (this.addUserForm.valid) {&#xD;&#xA;                let withLogin : boolean = true;&#xD;&#xA;                let unauthorized : number = 401;&#xD;&#xA;                this.createValidUser();&#xD;&#xA;                /**&#xD;&#xA;                 * Call the code to Create a new user&#xD;&#xA;                 */&#xD;&#xA;                this.addUserService.createNewUser(!withLogin, this.validNewUser)&#xD;&#xA;                .catch(error => {&#xD;&#xA;                    if (error.status === unauthorized) {&#xD;&#xA;                        return this.addUserService.createNewUser(withLogin, this.validNewUser);&#xD;&#xA;                    }})&#xD;&#xA;                    .subscribe(&#xD;&#xA;                        response => console.log(response),&#xD;&#xA;                        error => console.log(error));&#xD;&#xA;                this.manageUsersComponent.testGet();&#xD;&#xA;                this.toggleModalDisplay();&#xD;&#xA;                this.addUserForm.reset();&#xD;&#xA;            } else {&#xD;&#xA;                this.userValidator.validate(this.addUserForm, this.formSubmitted);&#xD;&#xA;            }&#xD;&#xA;        }