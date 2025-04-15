export default function ListPicker({values}){
    const randomIndex = Math.floor(Math.random() * values.length);
    const randEle = values[randomIndex];
    return (
       <div>
        <p> The list of values: {values}</p>
        <p>The random value is: {randEle}</p>
       </div>
    );
}