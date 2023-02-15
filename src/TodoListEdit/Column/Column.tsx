import { useState } from 'react';

interface Column {
    value: string;
    label: string;
}
function Columns(){
    const [columns, setColumns] = useState<Column[]>([]);
}
