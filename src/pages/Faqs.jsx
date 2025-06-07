import React from "react";

import Navbar from "../components/Navbar";
function Faqs() {
  return (
    <div className="font-[Ubuntu]">
      <Navbar />
      <section className="mt-10">
        <div className="text-center flex flex-col gap-3 mb-5">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="font-medium">
            Find Answers to the questions about our products
          </p>
        </div>

        <Questions />
      </section>
    </div>
  );
}

function Questions() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center w-[50%] ml-auto mr-auto ">
      <details className="flex flex-col self-start">
        <summary className="text-lg font-bold">How can I order online?</summary>
        <p className="indent-8">
          You can place an order online by browsing our products, adding items
          to your cart, and proceeding to checkout. You’ll need to provide your
          shipping details and make a payment to complete the order.
        </p>
      </details>

      <details className="self-start">
        <summary className=" font-bold text-lg">
          How can I ask for a refund?
        </summary>
        <p className="indent-8">
          You can request a refund by contacting our support team through the
          Contact Us page. Make sure to include your order number and the reason
          for the refund. Our team will review and get back to you within 2–3
          business days.
        </p>
      </details>

      <details className="self-start ">
        <summary className="font-bold text-lg">
          How do I be able to send messages?
        </summary>
        <p className="indent-8">
          You can send messages by logging into your account and navigating to
          the 'Support' or 'Messages' section. From there, you can communicate
          directly with our team regarding your order or concerns.
        </p>
      </details>

      <details className="self-start">
        <summary className="font-bold text-lg">
          Are products always available?
        </summary>
        <p className="indent-8">
          We strive to keep all products in stock. However, availability may
          vary depending on demand. If a product is out of stock, you’ll see a
          notification on the product page and can sign up to be alerted when
          it’s back.
        </p>
      </details>

      <details className="self-start">
        <summary className="font-bold text-lg">
          How can I contact the company?
        </summary>
        <p className="indent-8">
          You can contact us through our Contact Us page, by email at
          support@example.com, or by calling our customer service hotline at
          (123) 456-7890. We’re available Monday to Friday, 9 AM to 5 PM.
        </p>
      </details>
    </div>
  );
}

export default Faqs;
