// function CreateBook(bookName, authorName, pages){
//     this.bookName = bookName
//     this.authorName = authorName
//     this.pages = pages
//     this.getfrontPage = function (){
//         console.log('Book Name',this.bookName)

//         console.log('Author Name', this.authorName);

//         console. log( 'Pages', this.pages)}
// }

// let book1 = new CreateBook('HP - Prisoner of Azkaban', 'JK Rowling ',700)
// let book2 = new CreateBook('Rich Dad Poor Dad', 'robert Kiyosaki', 440)
// let book3 = new CreateBook('Sapiens', 'Yuvan Noah Harrari', 850)

// book1.getfrontPage()

// function MakeStudent(fname){
//     this.fname= fname
//     this.lname = lname
//     this.contact = contact
//     this.isverified = isverified
// }

class MakeStudents {
    constructor(fname, lname, contact, isVerified) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
        this.isVerified = isVerified;

        this.showProfile = function () {
            if (this.isVerified) {
                console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
            } else {
                console.log('User Not Verified');
            }
        }
    }
}

let s1 = new MakeStudents('Sarthak', 'Sharma', 98789, true);
let s2 = new MakeStudents('Abhishek', 'Mishra', 77889, true);
let s3 = new MakeStudents('Yash', 'Yadav', 48789, false);

s1.showProfile();
s2.showProfile();
s3.showProfile();
