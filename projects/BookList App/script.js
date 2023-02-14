class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    static displayBooks(){
   
        const books = Store.getBooks();
        books.forEach( (book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const  list = document.querySelector("#book-list")

        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a  href="#" class="btn btn-danger btn-sm delete1"><i class="far fa-trash-alt delete2"></i></a></td>
        `;
        list.appendChild(row);        
    }
    static deleteBook(el){
        if(el.classList.contains("delete1")){
            el.parentElement.parentElement.remove();  
            el.parentElement.parentElement.previous      
            
        }else if (el.classList.contains("delete2")){
            el.parentElement.parentElement.parentElement.remove();                         
        }
    }
    static clearFields(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
    static showAlert(messsage,className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(messsage));

        const  container = document.querySelector(".container");
        const form = document.querySelector("#bookform");
        container.insertBefore(div,form);
        setTimeout(() => {
        
           // div.style.visibility = "hidden"
            container.removeChild(div);
        }, 3000);

    }
}
class Store{
    static getBooks(){
        let  books;
        if(localStorage.getItem('books')  === null ){
            books = []
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book,index) => {
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }
}



document.addEventListener("DOMContentLoaded", UI.displayBooks)

document.querySelector("#bookform").addEventListener("submit", (e)=>{
    e.preventDefault();
    // Get value  from form
    const title = document.querySelector("#title").value;
    const author  = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    //Validation
    if(title === '' && author === '' && isbn === ''){
        UI.showAlert("Please fill in the fields","danger");
    }
    else if (title === '' && author === ''){
        UI.showAlert("Please fill in the title and author","danger");
    }else if  (title === '' && isbn === ''){
        UI.showAlert("Please fill in the title and isbn","danger");
    }else if (author === '' && isbn === ''){
        UI.showAlert("Please fill in the title and isbn","danger");
    }else if( title === ''){
        UI.showAlert("Please fill in the title","danger");
    } else if ( author === ''){
        UI.showAlert("Please fill in the author","danger");
    } else if (isbn === ''){
        UI.showAlert("Please fill in the isbn","danger");
    }
     else {
        // Instantiate  book
        const book = new Book(title,author,isbn);
        // Add Book  to UI
        UI.addBookToList(book);
        Store.addBook(book);
        //Clear field after submit 
        UI.clearFields();
        UI.showAlert("Book is added successfully","success")
    }

});

document.querySelector("#book-list").addEventListener("click", (e)=>{
    UI.deleteBook(e.target);
    if(e.target.classList.contains("delete1")){
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    } 
    if(e.target.classList.contains("delete2")){
        Store.removeBook(e.target.parentElement.parentElement.previousElementSibling.textContent);
    }
    UI.showAlert("Book was deleted successfully","success");
})