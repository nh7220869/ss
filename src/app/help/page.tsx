function Help() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1">
        {/* Left side content */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <section className="mb-8">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h1>
          <p className="text-gray-600">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="flex flex-wrap gap-2 text-gray-600 ml-4 mt-4">
            <li>Visa,</li>
            <li>Mastercard,</li>
            <li>Diners Club,</li>
            <li>Discover,</li>
            <li>American Express,</li>
            <li>Visa Electron,</li>
            <li>Maestro,</li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-gray-600 mt-4 ml-4">
            If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
          </p>
          <p className="text-gray-600 mt-4">
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
          </p>
        </section>

        <div className="flex flex-wrap space-x-4 mb-8">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full shadow-md uppercase transition mb-2 md:mb-0">
            <a href="/joinus">Join us</a>
          </button>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full shadow-md transition uppercase">
            <a href="/allproducts">shop nike</a>
          </button>
        </div>

        <section className="mb-8">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">FAQs</h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-2 font-bold">
            Does my card need international purchases enabled?
          </h2>
          <p className="text-gray-600">
            Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
          </p>
          <p className="text-gray-600 mt-2">
            Please note, some banks may charge a small transaction fee for international orders.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-gray-700 mt-6 mb-2">
            Can I pay for my order with multiple methods?
          </h2>
          <p className="text-gray-600">
            No, payment for Nike orders can't be split between multiple payment methods.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-gray-700 mt-6 mb-2">
            What payment method is accepted for SNKRS orders?
          </h2>
          <p className="text-gray-600">
            You can use any accepted credit card to pay for your SNKRS order.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-gray-700 mt-6 mb-2">
            Why don't I see Apple Pay as an option?
          </h2>
          <p className="text-gray-600">
            To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
          </p>
        </section>

        <footer className="mt-8">
          <h1 className="text-lg font-medium text-gray-800">Was this answer helpful?</h1>

          <div className="flex items-center mt-4 mb-4">
            <button className="mr-2">
              <img src="f1.png" alt="Thumbs Up" className="w-8 h-8" />
            </button>
            <button>
              <img src="f2.png" alt="Thumbs Down" className="w-8 h-8" />
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-left mt-2">RELATED</p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <span className="text-gray-800 px-4 py-2 underline font-semibold">
              WHAT ARE NIKE'S DELIVERY OPTIONS?
            </span>
            <span className="text-gray-800 px-4 py-2 underline font-semibold">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </span>
          </div>
        </footer>
      </div>

      {/* Right side content */}
      <div className="w-full lg:w-1/3 bg-gray-50 border-l p-6">
        <h1 className="text-xl md:text-2xl mt-6 lg:mt-24 font-semibold text-gray-800 mb-4 text-center">
          CONTACT US
        </h1>

        <div className="mb-6 text-center mt-12">
          <img
            src="c1.png"
            alt="Contact Image 1"
            className="mb-4 w-16 md:w-20 h-16 md:h-20 mx-auto"
          />
          <p className="text-gray-600">000 800 919 0566</p>
          <p className="text-gray-600">Products & Orders: 24 hours a day,</p>
          <p className="text-gray-600">7 days a week</p>
          <p className="text-gray-600">Company Info & Enquiries: 07:30 -</p>
          <p className="text-gray-600">16:30, Monday - Friday</p>
        </div>

        <div className="mb-6 text-center mt-16">
          <img
            src="c2.png"
            alt="Contact Image 2"
            className="mb-4 w-16 md:w-20 h-16 md:h-20 mx-auto"
          />
          <p className="text-gray-600">24 hours a day</p>
          <p className="text-gray-600">7 days a week</p>
        </div>

        <div className="mb-6 text-center mt-16">
          <img
            src="c3.png"
            alt="Contact Image 3"
            className="mb-4 w-16 md:w-20 h-16 md:h-20 mx-auto"
          />
          <p className="text-gray-600">We'll reply within</p>
          <p className="text-gray-600">five business days</p>
        </div>

        <div className="mb-6 text-center mt-16">
          <img
            src="c4.png"
            alt="Contact Image 4"
            className="mb-4 w-16 md:w-20 h-16 md:h-20 mx-auto"
          />
          <p className="text-gray-600">STORE LOCATOR</p>
          <p className="text-gray-600">Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
 