"use client"

import React, { useRef, useState, useTransition} from "react";
import {usePathname, useRouter} from "next/navigation";

export default function SidebarNoteItemContent({ id, title, children, expandedChildren}) {
    const router = useRouter()
    const pathname = usePathname()
    const selectedId = pathname.split('/')[1] || null
    const itemRef = useRef<HTMLDivElement | null>(null)
    const [isPending] = useTransition()
    const [isExpanded, setIsExpanded] = useState<Boolean>(false)
    const isActive = id === selectedId

    const buttonStyle: React.CSSProperties  = {
        backgroundColor: isPending ? 'var(--gray-80)' : isActive ? 'var(--tertiary-blue)' : '',
        border: isActive ? '1px solid var(--primary-border)' : '1px solid transparent',
    }

    const onSidebarNoteOpen = () => {
        console.log('aaa')
        const sidebarToggle: HTMLElement = document.getElementById('sidebar-toggle')
        console.log('sidebarToggle', sidebarToggle)
        if (sidebarToggle) {
            sidebarToggle.checked = true
        }
        router.push(`/note/${id}`)
    }

    const onSidebarNoteToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    }

    return <div
        ref={itemRef}
        onAnimationEnd={()=>{
            itemRef.current?.classList.remove('flash')}}
        className={[
            'sidebar-note-list-item',
            isExpanded ? 'note-expanded' : ''
        ].join(' ')}>
        {children}
        <button
            className="sidebar-note-open"
            style={buttonStyle}
            onClick={onSidebarNoteOpen}
        >
            Open note for preview
        </button>
        <button
            className="sidebar-note-toggle-expand"
            onClick={(e) => onSidebarNoteToggle(e) }>
            {isExpanded ? (
                <img
                    src="/chevron-down.svg"
                    width="10px"
                    height="10px"
                    alt="Collapse"
                />
            ) : (
                <img src="/chevron-up.svg" width="10px" height="10px" alt="Expand" />
            )}
        </button>
        {isExpanded && expandedChildren}
    </div>
}
