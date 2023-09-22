import Card from "../Components/card";
import kevine from '../assets/Images/kevine.jpg'


const CardsScreen = () => {

const infos =[

{
    names:['Kevine','Mugisha'],
    id :1,
    imgPath: {kevine},
    role:'The gym trainee',
    title:' Artificial Intelligence: The Boundless Horizon of Possibilities'

},
{
    names:['Jacob','Zuma'],
    imgPath: {kevine},
    id :2,

    role:'AOS Developer',
    title:' Artificial Intelligence: AI taking over the world?'

},
{
    names:['Micheal','Jackson'],
    imgPath: {kevine},
    id :3,

    role:'Ojemba Developer',
    title:' Artificial Intelligence: Exploring the world of Ai'

},



]


    return ( <>
<div className="flex flex-col gap-8 items-center justify-center border border-red-300">
    <h1 className="text-3xl">Re-Using Components in react</h1>
    {infos.map(info => {
    
    return <Card
    key={info.id}
    image={info.imgPath}
    title ={info.title}
    names= {info.names[0] + ' ' + info.names[1]
    }
    role= {info.role}
    />
    
    } )}
</div>
    
    
    
    </> );
}
 
export default CardsScreen;