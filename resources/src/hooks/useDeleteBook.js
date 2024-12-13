import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const useDeleteBook = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const deleteBook = async (id) => {
        setLoading(true);

        try {
            const response = await axios.delete(
                `http://localhost:8000/books/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Book deleted successfully!",
                    showConfirmButton: false,
                    timer: 2000,
                });

                // Update books state
                setBooks((prevBooks) =>
                    prevBooks.filter((book) => book.id !== id)
                );
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Book not found!",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to delete book. Please try again later.",
                showConfirmButton: false,
                timer: 2000,
            });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { books, deleteBook, loading };
};

export default useDeleteBook;
