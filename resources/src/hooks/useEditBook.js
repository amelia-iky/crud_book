import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const useEditBook = () => {
    const [loading, setLoading] = useState(false);

    const editBook = async (id, data) => {
        setLoading(true);

        try {
            const response = await axios.put(
                `http://localhost:8000/books/${id}`,
                data,
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
                    text: "Berhasil mengedit data!",
                    showConfirmButton: false,
                    timer: 2000,
                });

                // Update books state
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }

            if (response.status === 422) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Gagal mengedit data!",
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

    return { editBook, loading };
};

export default useEditBook;
