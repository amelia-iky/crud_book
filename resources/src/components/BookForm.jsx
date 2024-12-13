import { useState } from "react";
import PropTypes from "prop-types";
import useAddBook from "../hooks/useAddBook";
import Button from "./Button";

const BookForm = ({ book, onClose, onSave }) => {
    const { addBook } = useAddBook();
    const [formData, setFormData] = useState(
        book || {
            title: "",
            author: "",
            year: "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.id) {
            onSave(formData);
        } else {
            addBook(formData);
        }
    };

    return (
        <div className="text-center">
            <h1 className="text-2xl border-b rounded-md shadow-lg mb-5 mx-3">
                Isi Data Buku
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="p-3">
                    <label className="text-gray-700 mr-5">Judul</label>
                    <input
                        className="h-10 px-3 border border-gray-300 hover:border-gray-400 rounded-lg"
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
                        className="h-10 px-3 border border-gray-300 hover:border-gray-400 rounded-lg"
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
                        className="h-10 px-3 border border-gray-300 hover:border-gray-400 rounded-lg"
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-row gap-2 justify-center">
                    <Button type="button" variant="deleted" onClick={onClose}>
                        Batal
                    </Button>

                    <Button
                        type="submit"
                        variant="edited"
                        onClick={handleSubmit}
                    >
                        Simpan
                    </Button>
                </div>
            </form>
        </div>
    );
};

BookForm.propTypes = {
    book: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default BookForm;
