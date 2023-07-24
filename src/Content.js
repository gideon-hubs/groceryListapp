import LineItem from "./LineItem"

const Content = ({items, handleCheck, handleDelete, setItems}) => {
    
    return (
        <>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                   <LineItem
                        key={item.id}
                        item={item}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}/>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content
