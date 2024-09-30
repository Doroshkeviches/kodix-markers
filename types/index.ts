import { Marker } from "image-marker"


export type IProject = {
    imageUrl: string,
    markers: Marker[]
    id: string,
    name: string
}