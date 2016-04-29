//The first index holds the employees name.
//The second index has their employee number.
//The third index contains their annual salary.
//The fourth index contains their review rating.

function Employee(name, employeenumber, yearlyincome, rating) {
    this.name = name;
    this.employeenumber = employeenumber;
    this.yearlyincome = yearlyincome;
    this.rating = rating;
}

var atticus = new Employee('Atticus', '2405', '47000', 3);
var jem = new Employee('Jem', '62347', '63500', 4);
var boo = new Employee('Boo', '11435', '54000', 3);
var scout = new Employee('Scout', '6243', '74750', 5);

var employees = [atticus, jem, boo, scout];





function review(employee) {
    var raise = 0;
    var array = [];
    var salary = parseInt(employee.yearlyincome);

    array[0] = employee.name;

    switch (employee.rating) {
        case 0:
        case 1:
        case 2:
            raise = 0;
            break;
        case 3:
            raise = 0.04;
            break;
        case 4:
            raise = 0.06;
            break;
        case 5:
            raise = 0.10;
            break;

    }


    if (employee.employeenumber.length == 4) {
        raise += 0.05;
    }
    if (salary > 65000) {
        raise -= 0.01;

    }
    if (raise > 0.13) {
        raise = 0.13;
    }
    array[1] = raise * 100;
    array[2] = (salary * raise) + salary;
    array[3] = Math.round(salary * raise);

    return array;
}

for (var i = 0; i < employees.length; i++) {
    console.log(review(employees[i]));
}
