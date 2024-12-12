<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Book;

class BookController extends Controller
{
    // Create
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'author' => 'required|string',
            'year' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $book = Book::create($validator->validated());
        return response()->json($book, 201);
    }

    // Read all
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
    }

    // Read one
    public function show($id)
    {
        $book = Book::find($id);

        if(!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        return response()->json($book);
    }

    // Update
    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if(!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'year' => 'required|integer'
        ]);

        $book->update($validated);

        return response()->json($book);
    }

    // Delete
    public function destroy($id)
    {
        $book = Book::find($id);

        if(!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $book->delete();

        return response()->json(['message' => 'Book deleted']);
    }
}
