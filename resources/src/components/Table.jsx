import useFetchBook from "../hooks/useFetchBook";
import useDeleteBook from "../hooks/useDeleteBook";
import useEditBook from "../hooks/useEditBook";
import Button from "./Button";
import BookForm from "./BookForm";
import { useState } from "react";

const TableBook = () => {
    const { books, setBooks } = useFetchBook();
    const { editBook } = useEditBook();
    const { deleteBook } = useDeleteBook();
    const [showForm, setShowForm] = useState(false);
    const [editingBook, setEditingBook] = useState(null);

    return (
        <>
            <div className="shadow-lg border rounded-lg border-gray-200 text-center m-10">
                <h1 className="text-4xl p-4">Data Buku</h1>
            </div>

            <div className="justify-center p-4 mx-28">
                <Button
                    type="button"
                    variant="added"
                    onClick={() => {
                        setEditingBook(books);
                        setShowForm(true);
                    }}
                >
                    + Tambah
                </Button>

                <div className="border border-gray-200 rounded-lg shadow-md mt-3">
                    <table className="w-full text-center">
                        <thead>
                            <tr className="text-sm border-b">
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
                                    <tr
                                        className="text-gray-700 border-b"
                                        key={book.id}
                                    >
                                        <td className="py-2">{book.id}</td>
                                        <td className="py-2">{book.title}</td>
                                        <td className="py-2">{book.author}</td>
                                        <td className="py-2">{book.year}</td>
                                        <td className="py-2">
                                            <span className="flex gap-2 justify-center">
                                                {/* Form delete */}
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

                                                {/* Form edit */}
                                                <Button
                                                    type="button"
                                                    variant="edited"
                                                    onClick={() => {
                                                        setEditingBook(book);
                                                        setShowForm(true);
                                                    }}
                                                >
                                                    Edit
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
                                        Data buku kosong . . .
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {showForm && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={() => setShowForm(false)}
                    >
                        <div className="fixed inset-0 flex justify-center items-center z-20">
                            <div
                                className="bg-white rounded-lg shadow-lg p-6"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <BookForm
                                    book={editingBook}
                                    onClose={() => setShowForm(false)}
                                    onSave={(updatedBook) => {
                                        editBook(updatedBook.id, updatedBook);
                                        setBooks((prevBooks) =>
                                            prevBooks.map((b) =>
                                                b.id === updatedBook.id
                                                    ? updatedBook
                                                    : b
                                            )
                                        );
                                        setShowForm(false);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default TableBook;
