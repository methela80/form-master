import Counsin from "../Cousins/Counsin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>uncle</h2>
            <section className="flex">
                <Counsin name={'Ritu'}></Counsin>
                <Counsin name={'Rafsan'} asset={asset}></Counsin>
                
            </section>
            
        </div>
    );
};

export default Uncle;