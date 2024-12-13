import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const useFetchBook = () => {
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    const [shouldReload, setShouldReload] = useState(false);

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
                        title: "Success",
                        text: "Data fetched successfully!",
                        showConfirmButton: false,
                        timer: 2000,
                    });

                    setShouldReload(true);
                }

                if (response.data.length === 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Data not found!",
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

    return { books, loading, shouldReload };
};

export default useFetchBook;
