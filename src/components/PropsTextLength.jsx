function PropsTextLength (props){
    return(
        <>
        <p>{props.children} {props.theLength}  </p>
        <p> {props.tooLongShort} </p>
        </>
    )
}

export default PropsTextLength;
