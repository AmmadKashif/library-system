// Define the book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    available: true,
    // Method to borrow the book
    borrowBook: function() {
        if (this.available) {
            this.available = false;
            alert(`You have borrowed "${this.title}".`);
        } else {
            alert(`Sorry, "${this.title}" is currently unavailable.`);
        }
        this.displayDetails();
    },
    // Method to return the book
    returnBook: function() {
        if (!this.available) {
            this.available = true;
            alert(`You have returned "${this.title}".`);
        } else {
            alert(`"${this.title}" was not borrowed.`);
        }
        this.displayDetails();
    },
    // Method to display book details
    displayDetails: function() {
        let bookInfo = `
            Title: ${this.title}<br>
            Author: ${this.author}<br>
            Year: ${this.year}<br>
            Available: ${this.available ? "Yes" : "No"}
        `;
        document.getElementById('bookInfo').innerHTML = bookInfo;
    }
};

// Display book details on page load
document.addEventListener('DOMContentLoaded', function() {
    book.displayDetails();

    // Event listeners for buttons
    document.getElementById('borrowButton').addEventListener('click', function() {
        book.borrowBook();
    });

    document.getElementById('returnButton').addEventListener('click', function() {
        book.returnBook();
    });
});
