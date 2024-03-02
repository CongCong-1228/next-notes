import dayjs from "dayjs";
import EditButton from "@/components/EditButton";
import NotePreview from "@/components/NotePreview";
import React from "react";

interface IProps {
    noteId: string | number | null
    note: {
        title: string,
        content: string,
        updateTime: string
    }
}

export default function Note({ noteId, note }: IProps): React.JSX.Element {
    const { title, content, updateTime } = note

    return (
        <div className="note">
            <div className="note-header">
                <h1 className="note-title">{title}</h1>
                <div className="note-menu" role="menubar">
                    <small className="note-update-at" role="status">
                        Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
                    </small>
                    <EditButton noteId={noteId}>Edit</EditButton>
                </div>
            </div>
            <NotePreview>{content}</NotePreview>
        </div>
    )
}
