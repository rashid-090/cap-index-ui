import React, { useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  once: true,
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease",
});

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(false);
  const [showMore, setShowMore] = useState(false); // State to control showing more FAQs

  const faqs = [
    // {
    //   question: `What is an investment?`,
    //   answer: `Investment refers to the process of allocating money or resources in order to generate income or profit in the future. Common types of investments include stocks, bonds, real estate, and mutual funds.`,
    // },
    {
      question: `Why should I invest my money instead of keeping it in a savings account? `,
      answer: `Investing helps your money grow over time, often at a faster rate than inflation. Savings accounts typically offer lower returns, while investments can yield higher returns through dividends, interest, and appreciation in value.`,
    },
    {
      question: `What are stocks, and how do they work?`,
      answer: `Stocks represent ownership in a company. When you buy a stock, you own a small portion of that company. The value of stocks fluctuates based on the company’s performance and market conditions, and investors can profit from dividends and stock price appreciation.`,
    },
    {
      question: `How do bonds differ from stocks?`,
      answer: `Bonds are loans made by investors to governments or corporations. In return, the issuer pays periodic interest and returns the principal amount on the bond's maturity date. Bonds are generally considered lower-risk than stocks but offer lower potential returns.`,
    },
    {
      question: `What is investment risk, and how can I manage it?`,
      answer: `Investment risk refers to the possibility of losing money on an investment. Different investments carry varying levels of risk. You can manage risk by diversifying your portfolio—spreading your investments across different asset classes (stocks, bonds, etc.) and industries.`,
    },
    {
      question: `What is diversification? What does it mean to diversify your investments? `,
      answer: `Diversification is the practice of spreading investments across various assets (stocks, bonds, real estate, etc.) to reduce the impact of any one investment's poor performance on the overall portfolio.`,
    },
    {
      question: `What is a mutual fund? How does a mutual fund work? `,
      answer: `A mutual fund pools money from multiple investors to buy a diversified portfolio of stocks, bonds, or other securities. It’s managed by professionals and provides an easy way for individual investors to diversify without having to pick individual investments.`,
    },
    {
      question: `What is an ETF? What is an Exchange-Traded Fund (ETF)? `,
      answer: `An ETF is a type of investment fund that holds a collection of assets (like stocks or bonds) and trades on stock exchanges. ETFs offer diversification like mutual funds but are traded like individual stocks.`,
    },
    {
      question: `What is dollar-cost averaging, and why is it used? `,
      answer: `Dollar-cost averaging is an investment strategy where you regularly invest a fixed amount of money, regardless of the market conditions. This reduces the impact of volatility and lowers the average cost per share over time.`,
    },
    {
      question: "What is Capital Market?",
      answer:
        "The capital market is where long term securities like stocks, bonds, debentures, etc are traded. It is the arena where long-term financing is facilitated and capital requirements are met. Out of the various instruments that are traded in the capital market, Stocks and indices are what our firm deals with. Our services range throughout the different aspects of stock trading.",
    },
    {
      question: "What is Stock Market?",
      answer:
        "The stock market is where shares of public companies are bought and sold. Here, you can make money by investing in stocks or by trading in them. Investing in the stock market is a great way of creating wealth. It is an efficient way of enhancing your saving habits. If you are willing to invest in the stock market, you can assuredly expect substantial returns in the long run. On the other hand, trading in stocks also has its perks. The difference is that it is focused on generating profits in short or specific periods of time. Although the presence of risk is inevitable, trading and investing in the stock market are sure ways to make good money. However, it is not possible for an individual to buy or sell shares on his/her own. This is where stock broking comes into play.",
    },
    {
      question: "Why Do You Need A Stock Broker?",
      answer:
        "It is not possible for a person to directly trade in stocks in the market. It can only be done through stock brokers. They act as middlemen who carry out the trade on behalf of the investors.",
    },
    {
      question: "What Are The Myths About Investing?",
      answer:
        "The stock market is a realm of opportunities and promises, but also of risks and chances. Stepping into it with false mindsets and unrealistic expectations is impractical. It can steer you away from the real opportunities it offers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center gap-5">
          <h2
            data-aos="fade-up"
            className="text-2xl xl:text-5xl font-bold text-secclr"
          >
            Got Questions? <br />
            We’ve Got <span className="text-prmclr">Answers.</span>
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-0">
          {faqs.slice(0, showMore ? faqs.length : 5).map((faq, index) => (
            <div key={index} className={`border-b-2 last:border-b-0 `}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-base font-semibold text-secclr">
                  {faq.question}
                </span>
                <span className="text-2xl text-secclr">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="px-2 pb-4 text-mygray">{faq.answer}</div>
              </div>
            </div>
          ))}
          <div className="">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-secclr hover:text-prmclr font-semibold text-sm mt-3"
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
