import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const useFetchBook = () => {
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            setLoading(true);

            try {
                const response = await axios.get(
                    "http://localhost:8000/books",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                setBooks(response.data);

                if (response.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Berhasil",
                        text: "Data tersedia!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }

                if (response.data.length === 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Data kosong!",
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

        fetchBook();
    }, []);

    return { books, loading };
};

export default useFetchBook;
