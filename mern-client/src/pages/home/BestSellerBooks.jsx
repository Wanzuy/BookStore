import React, { useEffect, useState } from "react";
import BookCards from "../../components/BookCards";
import { fetchAllBooks } from "../../services/bookService";

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const bestSellerBooks = await fetchAllBooks();
            setBooks(bestSellerBooks);
        };

        getBooks();
    }, []);

    return (
        <>
            <BookCards books={books} headline="SÁCH BÁN CHẠY" />
        </>
    );
};

export default BestSellerBooks;
