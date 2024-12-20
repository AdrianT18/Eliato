import { Transition } from "@headlessui/react";

const CartDrawer = ({
  isOpen,
  checkout,
  updateQuantity,
  removeLineItem,
  closeCart,
}) => {
  return (
    <Transition show={isOpen}>
      <div className="fixed inset-0 overflow-hidden z-50">
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="absolute inset-0 bg-gray-600 bg-opacity-75"
              onClick={closeCart}
            ></div>
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              enter="transform transition ease-in-out duration-300 sm:duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen sm:max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          onClick={closeCart}
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      {checkout.lineItems.length > 0 ? (
                        checkout.lineItems.map((item) => (
                          <div key={item.id} className="flow-root mb-6">
                            <ul className="-my-6 divide-y divide-gray-200">
                              <li className="py-6 flex flex-col items-center">
                                <div className="flex-shrink-0 mb-4">
                                  <img
                                    src={item.variant.image.src}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded-md"
                                  />
                                </div>
                                <div className="flex-1 flex flex-col items-center">
                                  <h3 className="text-base font-medium text-gray-900">
                                    {item.title}
                                  </h3>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.variant.title}
                                  </p>
                                  <p className="mt-1 text-lg font-medium text-gray-900">
                                    {item.variant.priceV2.amount}{" "}
                                    {item.variant.priceV2.currencyCode}
                                  </p>
                                  <div className="flex items-center justify-center space-x-2 mt-4">
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          Math.max(1, item.quantity - 1)
                                        )
                                      }
                                      className="px-2 py-1 border border-gray-300 rounded-md"
                                    >
                                      -
                                    </button>
                                    <span className="px-2 py-1 border border-gray-300 rounded-md">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity + 1
                                        )
                                      }
                                      className="px-2 py-1 border border-gray-300 rounded-md"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => removeLineItem(item.id)}
                                    className="text-red-500 hover:text-red-700 transition-colors duration-200 mt-4"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        ))
                      ) : (
                        <p className="text-lg text-gray-700">
                          Your cart is empty.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>
                        {checkout.totalPriceV2.amount}{" "}
                        {checkout.totalPriceV2.currencyCode}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Tax included. Shipping calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-full bg-olive-600 text-white py-3 px-4 rounded-md transition-colors duration-200 hover:bg-olive-700 font-semibold text-lg"
                        onClick={() => (window.location.href = checkout.webUrl)}
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          className="text-olive-600 font-medium hover:text-olive-500"
                          onClick={closeCart}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default CartDrawer;
