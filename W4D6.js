//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

function sort (array){
	var arr =[]
	var youngest = array[0]
	for (var i = ; i < array.lenght ; i++){
		if (youngest < array[i])
	}
	arr.push(youngest)
}

function Student (){
	var object = {}

	object.Name
	object.Date
	object.Birth
	object.Gender
	object.Age


	return object
}

var students = []

function makeStudent(Name, Date, Gender, Age){
	var student{
		Name :Name
		Date : Date
		Birth : Birth
		Gender: Gender
		Age : Age
	}
	students.push(student)
	return  student
}



var student1 = makeStudent("Amal","8/7","female","25")
var student2 = makeStudent("Ahmad","2/9","male","34")
var student3 = makeStudent("Swsan","5/3","female","21")
// var student4 = makeStudent()
// var student5 = makeStudent()

function displayStudents(array){
	var str = ""
	var he = "he"
	var his = 'his'
	for (var i = 0; i < array.lenght ; i++){
		theGender = array[i].Gender
		if (theGender === "female"){
			he = 'she'
			his = 'her'
		}
		str += i+ "- the student name is " + this.array[i].Name + " he/she was born on " + this.array[i].Date + " ,so his/her age is "  + this.array[i].Age
	}
}
