import { Helmet } from "react-helmet-async";
import faqIcon from "../assets/faq.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faqs = () => {
  return (
    <div>
      <Helmet>
        <title>FAQs | Gadget Heaven</title>
      </Helmet>
      <div className="h-48 w-full bg-purple-600">
        <div className="p-8 space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
            FAQs
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 text-center">
            Find answers to commonly asked questions about our products,
            services, and policies
          </p>
        </div>
      </div>
      <div className="mx-4">
        <div className="text-center font-bold my-12 text-2xl lg:text-4xl lg:flex justify-center items-center lg:gap-4">
          <h1>Frequently Asked Questions</h1>
          <img
            className="animate-bounce hidden lg:block"
            src={faqIcon}
            alt=""
          />
        </div>
        <div className="my-12 container mx-auto">
          <Accordion className="rounded-lg">
            {/* accordion 1 */}
            <AccordionItem>
              <AccordionItemHeading className="font-bold text-2xl">
                <AccordionItemButton>
                  What types of gadgets do you offer?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We offer a wide range of gadgets, including smartphones,
                  laptops, smartwatches, headphones, tablets, gaming
                  accessories, and more. Browse through our categories to
                  explore the latest gadgets.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            {/* accordion 2 */}
            <AccordionItem>
              <AccordionItemHeading className="font-bold text-2xl">
                <AccordionItemButton>
                  How do I add items to my cart or wishlist?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To add an item to your cart, simply click the "Add to Cart"
                  button on the product details page. If you'd like to save an
                  item for later, click the "Add to Wishlist" button. You can
                  view your cart and wishlist at any time by clicking the
                  respective icons at the top of the page.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* accordion -3 */}
            <AccordionItem>
              <AccordionItemHeading className="font-bold text-2xl">
                <AccordionItemButton>
                  How can I view the items in my cart or wishlist?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To view your cart, click the shopping cart icon at the top
                  right of the page. Similarly, to see your wishlist, click the
                  heart icon. Both will show all the items you’ve added for easy
                  access.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* accordion -4 */}
            <AccordionItem>
              <AccordionItemHeading className="font-bold text-2xl">
                <AccordionItemButton>
                  Can I purchase the items I’ve added to my cart or wishlist?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Currently, we only allow you to add items to your cart or
                  wishlist. Our website does not yet include a checkout system
                  for purchases. Please stay tuned for future updates on how you
                  can complete your purchase.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* accordion -5 */}
            <AccordionItem>
              <AccordionItemHeading className="font-bold text-2xl">
                <AccordionItemButton>
                  Do you offer warranties on your products?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes, most of our products come with a manufacturer warranty
                  that covers defects and malfunctions under normal use.
                  Warranty terms vary by product, so be sure to check the
                  product page for details.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
