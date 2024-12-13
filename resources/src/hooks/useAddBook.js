import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const useAddBook = () => {
    const [loading, setLoading] = useState(false);
    const [shouldReload, setShouldReload] = useState(false);

    const addBook = async (bookData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:8000/books",
                bookData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Buku berhasil ditambahkan!",
                    showConfirmButton: false,
                    timer: 2000,
                });
                setShouldReload(true);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to add data!",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        } catch (error) {
            console.error("Error adding book:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong!",
            });
        } finally {
            setLoading(false);
        }
    };

    return { addBook, loading, shouldReload };
};

export default useAddBook;
