//complete this code
class Person {
	
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	get name()
	{
		return this.name;
	}

	set age()
	{
		this.age=age;
	}

	get age()
	{
		return this.age;
	}
	class Student{
		// String name;
		// int age;

		study()
		{
			console.log(`${this.name} is studying`);
		}
	}

	class Teacher{
		String name;
		int age;

		teach()
		{
			console.log(`${name} is teaching`);
		}
	}


}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
