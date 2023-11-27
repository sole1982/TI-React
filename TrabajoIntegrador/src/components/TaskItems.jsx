
export const TaskItems = ({nombre, realizada}) => {
    return (
    <>
        <li>{nombre}
         {realizada ? "✅" : "👎" }</li>
    
    
    </>
  )
}
