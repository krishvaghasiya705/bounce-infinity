import React, { useState } from 'react';
import "./FaqTestRideSection.scss";

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


function FaqTestRideSection() {
    const accordionItems = [
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
    ];
    return (
        <div>
            <div className="faq-section-main">
                <div className="faq-container">
                    <div className="faq-title-main">
                        <h1>Have Any Question?</h1>
                    </div>
                </div>

                <div className="accordian-container">
                    <Accordion items={accordionItems} />
                </div>

            </div>
        </div>
    )
}

export default FaqTestRideSection;