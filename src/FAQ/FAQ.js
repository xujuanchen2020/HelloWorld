import React, {useState} from 'react'
import items from './FAQdata';
import Question from './Question'
import Categories from './Categories';

const allCategories = [...new Set(items.map((item) => item.category))];

const FAQ = () => {
  const initial = items.filter((item) => item.category === allCategories[0]);
  
  const [questions, setQuestions] = useState(initial);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setQuestions(newItems);
  };

  return (
    <div>
      <div className="faq-logo">
        <img src={require("../../resources/logo.svg")}></img>
      </div>
      <section className="faq-info">
        <h1>FAQ</h1>

        <div className="faq-info-content">
          <div>
            <Categories categories={categories} filterItems={filterItems} />
          </div>
          <div>
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default FAQ

