import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const useAddBook = () => {
    const [loading, setLoading] = useState(false);

    const addBook = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:8000/books",
                data,
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
                    text: "Data ditambahkan!",
                    showConfirmButton: false,
                    timer: 2000,
                });

                // Update books state
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Gagal menambahkan data!",
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

    return { addBook, loading };
};

export default useAddBook;
