import React from "react";
import dayjs from "dayjs";
import SidebarNoteItem from "@/components/SidebarNoteItem";
import {getAllNotes} from "@/lib/redis";


export default async function NoteList(): Promise<React.JSX.Element> {
    const sleep = ms => new Promise(r => setTimeout(r, ms))
    await sleep(3000)
    const notes = await getAllNotes()
    const arr = Object.entries(notes)
    console.log('arr', arr);
    if (arr.length === 0) {
        return <div className="notes-empty">
            {'No notes created yet'}
        </div>
    }

    return <>
        <ul className="notes-list">
            {arr.map(([noteId, note]) => {
                return <li key={noteId}>
                    <SidebarNoteItem note={JSON.parse(note)} noteId={noteId} />
                </li>
            })}
        </ul>
    </>
}
