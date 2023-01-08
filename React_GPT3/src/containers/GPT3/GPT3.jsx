import React from "react";
import { Feature } from "../../components";
import './gpt3.css';

// title="" text=""

const GPT3 = () => {
    return ( 
        <div className="gpt section_margin" id="wgpt3">
            <div className="gpt_feature">
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
            </div>
            <div className="gpt_heading">
                <h1 className="gradient_text">The possibilities are beyond your imagination </h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt_container">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
            </div>

        </div>
     );
}
 
export default GPT3;