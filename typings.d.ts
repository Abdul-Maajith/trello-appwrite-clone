// Map is used to store key-value pairs!
interface Board {
    columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todos" | "inProgress" | "Done";

interface Column {
    id: TypedColumn
    todos: Todo[];
}

interface Todo {
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    image?: Image;
}

interface Image {
    bucketId: string;
    fileId: string;
}