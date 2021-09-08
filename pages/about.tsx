import type { NextPage } from "next"

const About: NextPage = () => {

    const props = {
        color: "red",
        width: "1rem"
    }

    const picovina = [1,2,3]

    console.log("priocinva", picovina)
    
    let cislo = 4141;
    const zmenit = true;

    if(cislo) {
        cislo *= 2;
    }



    console.log("cislo je ", cislo)

  return (
    <div>
        Tohle je about page
    </div>
  )
}

export default About
