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
                    text: "Berhasil menambahkan data!",
                    showConfirmButton: false,
                    timer: 2000,
                });

                // Update books state
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else if (response.status === 422) {
                Swal.fire({
                    icon: "error",
                    title: "Gagal",
                    text: "Anda belum mengisi semua data!",
                    showConfirmButton: false,
                    timer: 2000,
                });
                setLoading(false);
                return;
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
