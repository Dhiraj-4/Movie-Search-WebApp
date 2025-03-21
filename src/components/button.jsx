export function Button({ text, hanlder }) {

    return (
        <button className="bg-blue-500" onClick={hanlder}>{text}</button>
    )
}