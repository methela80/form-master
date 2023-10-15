import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Counsin = ({name, asset}) => {
    return (
        <div>
            <h2>Counsin</h2>
            <p>{name}</p>
            <section>
            { asset && <Special asset={asset}></Special>}
            {name === 'Sayeem' && <Friend></Friend>}
            </section>
            
            
            
        </div>
    );
};

export default Counsin;