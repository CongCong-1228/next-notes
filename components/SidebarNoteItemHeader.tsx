import React from "react";
import dayjs from "dayjs";

interface IProps {
    title: string,
    updateTime: string
}

export default function SidebarNoteItemHeader ({ title, updateTime }: IProps) : React.JSX.Element {
    return <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
    </header>
}
