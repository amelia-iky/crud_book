import { useState } from "react";
import useAddBook from "../hooks/useAddBook";
import Button from "./Button";

const BookForm = () => {
    const { addBook } = useAddBook();
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        year: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(formData);
    };

    return (
        <div className="text-center">
            <h1 className="text-xl mb-5">Isi Data Buku</h1>
            <form onSubmit={handleSubmit}>
                <div className="p-3">
                    <label className="text-gray-700 mr-5">Judul</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="p-3 border-y">
                    <label className="text-gray-700 mr-5">Penulis</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="p-3 mb-10 border-b">
                    <label className="text-gray-700 mr-5">Tahun</label>
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    />
                </div>

                <Button type="button" variant="edited" onClick={handleSubmit}>
                    Simpan
                </Button>
            </form>
        </div>
    );
};

export default BookForm;
