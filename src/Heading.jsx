export default function Heading({color = "blue", text}) {
    return (
        <header>
            <h1 style={{color: {color}}}>{text}</h1>
            <p>Roll your favorite dice with ease!</p>
        </header>
    );
}