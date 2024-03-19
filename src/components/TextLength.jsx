

const TextLength = (props) => {
    return (
        <>
            <h1>Entered text: {props.theChange}</h1>
            <input onChange={props.autotext} type="text" />
            {/* <p>{props.children} {props.theLength}</p> */}
        </>
    )
}

export default TextLength
