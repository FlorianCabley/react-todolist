import { useState } from "react";

interface Item {
    id: string;
    columnId: string;
    label: string;
}
function items(){
    const [items, setItems] = useState<Item[]>([]);
}
