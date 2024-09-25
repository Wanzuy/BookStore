import React, { useEffect, useState } from "react";
import BookCards from "../../components/BookCards";
import { fetchAllBooks } from "../../services/bookService";

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const otherBook = await fetchAllBooks();
            setBooks(otherBook);
        };

        getBooks();
    }, []);

    return (
        <div>
            <BookCards books={books} headline="SÁCH NỔI BẬT" />
        </div>
    );
};

export default OtherBooks;
