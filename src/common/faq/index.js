import React, { useState } from "react";
import "./faq.scss";

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggleItem(index)}>
                    <div className={`accordion-title ${openIndex === index ? 'open' : ''}`} onClick={() => toggleItem(index)}>
                        <h3>{item.title}</h3>
                        <span className={`icon ${openIndex === index ? 'minus' : 'plus'}`}></span>
                    </div>
                    <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                        <p>
                            {item.content}
                        </p>
                        <div className={`accordion-content-side-line ${openIndex === index ? 'open' : ''}`}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}


const Faq = () => {

    const accordionItems = [
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
    ];

    return (
        <div>
            <div class="faq-section-main" data-aos="fade-up">
                <div class="faq-container">
                    <div class="faq-title-main">
                        <h1>Have Any Question?</h1>
                    </div>
                </div>

                <div class="accordian-container">
                    <Accordion items={accordionItems} />
                </div>
            </div>
        </div>
    )
}


export default Faq;