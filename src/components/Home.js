import '../App.css';
import Card1 from "./Card";

const Home=({name})=> {

    const recipes =["chiken","pasta","taco"]

    return (

        <div className="App">
            {recipes.map(recipe =>(
                <Card1 title={recipe} />
            ))}
        </div>
    );
}

export default Home;
