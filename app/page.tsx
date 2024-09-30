'use client'
import Dropzone from "@/components/dropzone/Dropzone";
import Project from "@/components/project/Project";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const allprojects = JSON.parse(localStorage.getItem('projects') || '[]')
  const [projects, setProjects] = useState(allprojects)
  const [name, setName] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')

  const handleAddProject = (name: string) => {
    const newProject = { name, id: uuidv4(), imageUrl, markers: [] }
    setProjects((p: any) => [...p, newProject])
  }
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])
  console.log(name)
  return (
    <>
      <div className="flex flex-col items-center justify-center py-32 gap-16">
        <div className="flex flex-col w-1/3 gap-4">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Название проекта" />
          <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Ссылка на картинку" />
          <Button onClick={() => handleAddProject(name)}>Создать новый проект</Button>
        </div>
        <div className="flex flex-col gap-4  w-1/3 ">
          <p>Проекты : </p>
          {projects?.map((it: any) => (
            <Link href={`/${it.id}`}>
              <Card>
                <CardHeader>
                  <CardDescription>{it.name}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
