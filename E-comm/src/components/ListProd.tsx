function ListProd (){
    const list = [1,2,3,4,5];

  
    // dua tung item cua list vao tung li

    return (
    <>
        <ul className="list-group">
            {list.map((prod) => (<li className="list-group-item" key = "{item}">{prod}</li>))}
        </ul>
    </>
    )
}
export default ListProd;