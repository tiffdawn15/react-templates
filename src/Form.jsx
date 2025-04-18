function handleFormSubmit(event) {
    // Needs to prevent the default form so it doesn't refresh the page
    event.preventDefault();
    console.log("Form submitted!");
}

export default function Form(){
    return (
    
        <form onSubmit={handleFormSubmit}>
        <button>Submit</button>

        </form>
    
    )
}