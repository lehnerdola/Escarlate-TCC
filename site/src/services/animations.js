import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



    //função para verificar se um elemento está sendo exibido.
    const{ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity:[0,1],
                x:[-500,0],
                transition:{
                    delay:0.8, duration:2
                }
            })
        }
        if(!inView){
            animation.start({x:'100vw-'})
        }
        console.log("use effect hook, inView =", inView );
    }, [inView])

    export{ref};
    export{animation};