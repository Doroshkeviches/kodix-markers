import { Marker } from "image-marker";

export const handleDownload = (markers: Marker[]) => {
    const element = document.createElement('a');
    const text = markers.map((it) => (
        `\n\n\n${JSON.stringify(it)}`
    ))
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + text);
    element.setAttribute('download', 'file.txt');

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

export function updateItemById(items: any[], id: string, updates: any) {
    // Найти индекс объекта с нужным id
    const index = items.findIndex(item => item.id === id);
    
    // Если объект найден, обновляем его
    if (index !== -1) {
        items[index] = { ...items[index], ...updates }; // Обновляем объект, используя spread-оператор
    }
    
    return items;
}