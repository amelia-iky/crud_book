import useFetchBook from "../hooks/useFetchBook";
import useDeleteBook from "../hooks/useDeleteBook";
import Button from "./Button";
import BookForm from "./BookForm";
import { useState } from "react";

const TableBook = () => {
    const { books, setBooks } = useFetchBook();
    const { deleteBook } = useDeleteBook();
    const [showForm, setShowForm] = useState(false);

    const handleAddClick = () => {
        setShowForm(true);
    };

    return (
        <>
            <div className="shadow-lg border border-gray-200 text-center m-10">
                <h1 className="text-4xl p-4">Data Buku</h1>
            </div>

            <div className="justify-center p-4 mx-28">
                <Button type="button" variant="added" onClick={handleAddClick}>
                    + Tambah
                </Button>

                <div className="border border-gray-200 rounded-lg shadow-md mt-3">
                    <table className="w-full text-center">
                        <thead>
                            <tr className="text-gray-500 text-sm border-b">
                                <th className="p-3">ID</th>
                                <th className="py-3">Judul</th>
                                <th className="py-3">Penulis</th>
                                <th className="py-3">Tahun</th>
                                <th className="py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books && books.length > 0 ? (
                                books.map((book) => (
                                    <tr className="text-gray-700" key={book.id}>
                                        <td className="py-2">{book.id}</td>
                                        <td className="py-2">{book.title}</td>
                                        <td className="py-2">{book.author}</td>
                                        <td className="py-2">{book.year}</td>
                                        <td className="py-2">
                                            <span className="flex gap-2 justify-center">
                                                <Button
                                                    type="button"
                                                    variant="edited"
                                                    onClick={() =>
                                                        alert(
                                                            "Secondary Button Clicked!"
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    type="button"
                                                    variant="deleted"
                                                    onClick={() => {
                                                        deleteBook(book.id);
                                                        setBooks((prevBooks) =>
                                                            prevBooks.filter(
                                                                (b) =>
                                                                    b.id !==
                                                                    book.id
                                                            )
                                                        );
                                                    }}
                                                >
                                                    Hapus
                                                </Button>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-2"
                                    >
                                        Data buku kosong
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {showForm && (
                    <>
                        <div
                            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10"
                            onClick={() => setShowForm(false)}
                        />

                        <div className="fixed inset-0 flex justify-center items-center z-20">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <BookForm onClose={() => setShowForm(false)} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default TableBook;
