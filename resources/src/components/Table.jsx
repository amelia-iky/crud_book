import useFetchBook from "../hooks/useFetchBook";
import useDeleteBook from "../hooks/useDeleteBook";
import useEditBook from "../hooks/useEditBook";
import Button from "./Button";
import BookForm from "./BookForm";
import { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const TableBook = () => {
    const { books = [], setBooks } = useFetchBook();
    const { editBook } = useEditBook();
    const { deleteBook } = useDeleteBook();
    const [showForm, setShowForm] = useState(false);
    const [editingBook, setEditingBook] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Hitung data buku yang akan ditampilkan berdasarkan halaman
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedBooks = books.slice(startIndex, endIndex);

    const totalPages = Math.ceil(books.length / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className="shadow-xl border rounded-lg border-gray-200 text-center my-5 mx-10">
                <h1 className="text-4xl font-bold p-4">Data Buku</h1>
            </div>

            {/* Add book */}
            <div className="justify-center p-4 mx-28">
                <Button
                    type="button"
                    variant="added"
                    onClick={() => {
                        setEditingBook(null);
                        setShowForm(true);
                    }}
                >
                    + Tambah
                </Button>

                {/* Table */}
                <div className="mt-3 h-full">
                    <table className="border border-gray-200 rounded-lg shadow-md w-full text-center">
                        <thead className="shadow-sm">
                            <tr className="text-sm border-b">
                                <th className="p-3">No.</th>
                                <th className="p-3">ID</th>
                                <th className="py-3">Judul</th>
                                <th className="py-3">Penulis</th>
                                <th className="py-3">Tahun</th>
                                <th className="py-3">Dibuat</th>
                                <th className="py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedBooks && paginatedBooks.length > 0 ? (
                                paginatedBooks.map((book) => (
                                    <tr
                                        className="text-gray-700 border-b"
                                        key={book.id}
                                    >
                                        <td className="py-2">
                                            {books.indexOf(book) + 1}
                                        </td>
                                        <td className="py-2">{book.id}</td>
                                        <td className="py-2">{book.title}</td>
                                        <td className="py-2">{book.author}</td>
                                        <td className="py-2">{book.year}</td>
                                        <td className="py-2">
                                            {format(
                                                new Date(book.created_at),
                                                "dd MMMM yyyy",
                                                { locale: id }
                                            )}
                                        </td>
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

                    {/* Pagination */}
                    <div className="flex justify-end items-center mt-4 gap-3">
                        <Button
                            type="button"
                            variant="pagination"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            <span>{"<"}</span>
                        </Button>
                        <span>
                            {currentPage} dari {totalPages}
                        </span>
                        <Button
                            type="button"
                            variant="pagination"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            <span>{">"}</span>
                        </Button>
                    </div>
                </div>

                {/* Form */}
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
