function submit() {
    var Student_1 = document.getElementById("name_of_the_student_1").value;
    var Student_2 = document.getElementById("name_of_the_student_2").value;
    var Student_3 = document.getElementById("name_of_the_student_3").value;
    var Student_4 = document.getElementById("name_of_the_student_4").value;
    var Student_5 = document.getElementById("name_of_the_student_5").value;
    student_array.push(Student_1);
    student_array.push(Student_2);
    student_array.push(Student_3);
    student_array.push(Student_4);
    student_array.push(Student_5);
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("show2").style.display="inline-block";
}

function sorting() {
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML = student_array;
}
