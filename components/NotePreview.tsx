// 清理html，比如一些不良的写法，转义特殊字符等
import sanitizeHtml from "sanitize-html";

// 将markdown转换成html
import {marked} from "marked";


const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
    'img',
    'h1',
    'h2',
    'h3'
])

const allowedAttributes = Object.assign({}, sanitizeHtml.defaults.allowedAttributes, { img: ['alt', 'src']})

export default function NotePreview({children}) {
    return (
        <div
            className="text-with-markdown"
            dangerouslySetInnerHTML={{
                __html: sanitizeHtml(marked(children || '') as string, {
                    allowedTags,
                    allowedAttributes
            })}}>
        </div>
    )
}
