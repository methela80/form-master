import { useContext } from "react";
import Counsin from "../Cousins/Counsin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Counsin name={'Samaira'}></Counsin>
                <Counsin name={'Sayeem'}></Counsin>
            </section>
            <p>Money :{money} </p>
            <button onClick={()=> setMoney(money+1000)}>Add more 1000</button>
            
        </div>
    );
};

export default Aunty;