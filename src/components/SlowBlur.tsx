import AnimateTextComp from "./AnimateText";
import { AnimationSequencesComp } from "./AnimationSequences";

function SlowBlurComp(){
    return <div className="flex items-center justify-center min-h-screen bg-black">
        {/* <AnimateTextComp /> */}
        <AnimationSequencesComp />
    </div>
}

export default SlowBlurComp;