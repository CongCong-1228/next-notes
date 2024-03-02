import {getNote} from "@/lib/redis";
import Note from "@/components/Note";


export default async function Page({ params }) {
    console.log('params', params)
    const noteId = params.id
    const note = await getNote(noteId)


    // 为了让Suspense的效果更明显
    const sleep = ms => new Promise(r => setTimeout(r, ms))
    await sleep(5000)

    if (note === null) {
        return (
            <div className="note--empty-state">
                <span className="note-text--empty-state">
                    Click a note on the left to view something! 🥺
                </span>
            </div>
        )
    }
    return <Note note={note} noteId={noteId} />
}
