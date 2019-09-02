class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
		this.score = 0;
	}
	logIn(){
		console.log(this.email, "Logged In!!");
		return this;
	}
	logOut(){
		console.log(this.email, "Logged Out!!");
		return this;
	}
	updateScore() {
		this.score++;
		console.log(this.email, "Score is ", this.score);
		return this;
	}
}

class Admin extends User{
	deleteUser(user){
		users = users.filter(u => {
			return u.email != user.email;	 
		});
	}
}

Admin.prototype = Object.create(User.prototype);

var userOne = new User("Niraj@gmail.com", "Niraj Kumar");

var userTwo = new User("Sonu@gmail.com", "Sonu Kumar");

var admin = new Admin("Nirajaky@gmail.com", "Niraj Mehta");

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);

console.log(admin.logIn()); //Inherits User class Behaviours


userTwo.logIn().updateScore().updateScore().logOut();