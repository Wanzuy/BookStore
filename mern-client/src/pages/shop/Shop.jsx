import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { fetchAllBooks } from "../../services/bookService";

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const AllBooks = await fetchAllBooks();
            setBooks(AllBooks);
        };

        getBooks();
    }, []);

    return (
        <div className="mt-24 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center">
                All Books are here
            </h2>
            <div className="my-12 grid  gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                {books.map((book) => (
                    <Card className="">
                        <img
                            src={book.imageUrl}
                            alt=""
                            className="h-96 object-cover"
                        />
                        <h5
                            title={book.bookTitle}
                            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden overflow-ellipsis whitespace-nowrap"
                        >
                            {book.bookTitle}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 overflow-hidden overflow-ellipsis line-clamp-2">
                            {book.bookDescription}
                        </p>
                        <button className="bg-blue-700 font-semibold text-while py-2 rounded">
                            Buy Now
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Shop;
