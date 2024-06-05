import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);


const Home = () => {
    return (
        <div className='home'>
            <h1>Home</h1>
        </div>
    )
}

export default Home