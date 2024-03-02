import React from "react";
import dayjs from "dayjs";
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
import SidebarNoteItemHeader from "@/components/SidebarNoteItemHeader";

interface IProps {
    noteId: string | number
    note: {
        title: string
    }
}

export default function SidebarNoteItem({ noteId, note } : IProps): React.JSX.Element {
    const { title, content = '', updateTime } = note
    return (
        <SidebarNoteItemContent
            id={noteId}
            title={note.title}
            expandedChildren={
            <p className="sidebar-note-excerpt">
                { content.substring(0, 20) || <i>(No content)</i> }
            </p>
        }>
            <SidebarNoteItemHeader title={title} updateTime={updateTime} />
        </SidebarNoteItemContent>

    )
}
