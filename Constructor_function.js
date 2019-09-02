function User(name, email) {
	this.name = name;
	this.email = email;
	this.online = false;
}

User.prototype.login = function(){
	this.online = true;
	console.log(this.email, "has logged in!!");
}

User.prototype.logout = function(){
	this.online = false;
	console.log(this.email, "has logged out!!");
}

function Admin(name, email){
	User.call(this, name, email); // It can only inherits User properties not User behaviours
}

Admin.prototype = Object.create(User.prototype); // Inherits User behaviours

var userOne = new User("Niraj@gmail.com", "Niraj Kumar");

var userTwo = new User("Sonu@gmail.com", "Sonu Kumar");

Admin.prototype.deleteUser = function(user) {
	//-----------
	//-----------   to add Admin behaviours
}

var admin = new Admin("Nirajaky@gmail.com", "Niraj Mehta");

console.log(userOne);

console.log(admin);

console.log(admin.login());

userTwo.login();
