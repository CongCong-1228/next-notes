
import React, { Suspense } from 'react'
import Link from 'next/link'
import { getAllNotes } from '@/lib/redis'
import NoteList from './SidebarNoteList'
import EditButton from "@/components/EditButton";
import NoteListSkeleton from "@/components/NoteListSkeletion";
export default function Sidebar() {
    return (
        <>
            <section className="col sidebar">
                <Link href={'/'} className='link--unstyled'>
                    <section className="sidebar-header">
                        <img src="/logo.svg" className='logo' width="22px" height="20px" alt="" role='presentation' />
                        <strong>React Notes</strong>
                    </section>
                </Link>
                <section className="sidebar-menu" role='menubar'>
                    <EditButton noteId={null}>New</EditButton>
                </section>
                <nav>
                    <Suspense fallback={<NoteListSkeleton/>}>
                        <NoteList />
                    </Suspense>
                </nav>
            </section>
        </>
    )
}
