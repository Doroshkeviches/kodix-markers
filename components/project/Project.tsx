'use client'
import ImageMarker, { Marker } from 'image-marker'
import { useEffect, useState } from 'react'
import SwitchWrapper from '@/components/switchWrapper/SwitchWrapper'
import { IProject } from '@/types'
import { handleDownload, updateItemById } from '@/utils'
import { Card, CardHeader, CardDescription } from '../ui/card'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'

interface Props {
    item: IProject
}

function Project(props: Props) {
    const { item } = props
    const allprojects = JSON.parse(localStorage.getItem('projects') ?? '[]')
    const { toast } = useToast()
    const [markers, setMarkers] = useState<Array<Marker>>(item.markers)
    const [isEditMode, setIsEditMode] = useState(false)

    const handleAddMarker = (marker: Marker) => {
        if (!isEditMode) {
            toast({
                title: "Включите режим редактирования",
                description: "в верхнем правом углу страницы",
            })
            return
        }
        setMarkers([...markers, marker])
    }
    useEffect(() => {
        const updatedProject = {
            ...item,
            markers
        }
        console.log(updatedProject)
        const updatepProjects = updateItemById(allprojects, item.id, updatedProject)
        localStorage.setItem('projects', JSON.stringify(updatepProjects))
    }, [markers])
    return (
        <div className='p-4 flex flex-col items-center'>
            <div className='flex justify-between items-center w-full'>
                <Card>
                    <CardHeader>
                        <CardDescription>{item.name}</CardDescription>
                    </CardHeader>
                </Card>
                <SwitchWrapper isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
            </div>
            <div className='p-20'>
                <ImageMarker
                    src={item.imageUrl}
                    markers={markers}
                    onAddMarker={handleAddMarker}
                />
            </div>
            <Button onClick={() => handleDownload(markers)}>export markers</Button>
        </div>
    )
}

export default Project
