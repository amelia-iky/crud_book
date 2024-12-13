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
                    title: "Berhasil",
                    text: "Berhasil menghapus data!",
                    showConfirmButton: false,
                    timer: 2000,
                });

                // Update books state
                setBooks((prevBooks) =>
                    prevBooks.filter((book) => book.id !== id)
                );

                // Update books state
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Data buku tidak ditemukan",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { books, deleteBook, loading };
};

export default useDeleteBook;
