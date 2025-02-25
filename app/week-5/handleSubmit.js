import NewItem from "./new-item"

function newForm() 
{

    const handleSubmit = (event) => {
        event.preventDefault();
        // do something
    }


    return(
        <form onSubmit={handleSubmit}>
            <label for="nameField">Name</label>
            <input type="text" id="nameField" name="nameField" value={name} onChange={setName(value)} />
        </form>
    )
}