'use client'
import Project from '@/components/project/Project'
import { IProject } from '@/types'
import { notFound, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props { }

function Page() {
    const { id } = useParams()
    const allprojects = JSON.parse(localStorage.getItem('projects') ?? '[]')
    console.log(allprojects)
    const [project, setProject] = useState<IProject>()
    useEffect(() => {
        const proj = allprojects?.find((it: { id: string }) => it.id === id)
        setProject(proj)
    }, [])
    if(!project) return <></>
    return (
        <Project item={project} />
    )
}

export default Page
