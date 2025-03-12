import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  RefreshCw,
  Package,
  TruckIcon as TruckReturn,
  DollarSign,
  Gift,
  Info,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
  FileText,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#020B2D] via-[#0C1B4D] to-[#1E2761] text-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl"></div>

          {/* Animated pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] animate-[pulse_15s_linear_infinite]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-1 w-20 mx-auto mb-4 rounded-full"></div>
              <span className="text-amber-400 font-medium">Customer Satisfaction</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
              Return, Refund, and Exchange Policy
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We want you to be completely satisfied with your purchase. Learn about our policies for returns, refunds,
              and exchanges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
              <div className="flex items-start">
                <Info className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-amber-800 font-medium">Customer Satisfaction Commitment</p>
                  <p className="text-amber-700 text-sm mt-1">
                    At Cricket Icons Store, customer satisfaction is at the core of our business values. We are
                    dedicated to providing high-quality products and ensuring a seamless and positive shopping
                    experience for all our customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#020B2D] mb-4 flex items-center">
                <FileText className="h-5 w-5 text-amber-500 mr-2" />
                Refund Policy Sections
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[...Array(5)].map((_, i) => (
                  <a
                    key={i}
                    href={`#refund-section-${i + 1}`}
                    className="text-blue-600 hover:text-amber-500 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-2 text-xs group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors duration-200">
                      {i + 1}
                    </span>
                    <span className="text-sm">
                      {i === 0
                        ? "Returns"
                        : i === 1
                          ? "Refunds"
                          : i === 2
                            ? "Exchanges"
                            : i === 3
                              ? "Gifts"
                              : "Shipping"}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Visual Process Timeline */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#020B2D] mb-6 text-center">Return & Refund Process</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

                {/* Timeline steps */}
                <div className="grid grid-cols-1 gap-8 relative z-10">
                  {/* Step 1 */}
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="font-semibold text-[#0C1B4D]">Contact Customer Service</h4>
                      <p className="text-sm text-gray-600">
                        Email us at Support@infinitytoytronics.com with your order details and reason for return
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#020B2D] text-white flex items-center justify-center z-20 text-sm font-bold">
                      1
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-10 h-10 rounded-full bg-[#0C1B4D] text-white flex items-center justify-center z-20 text-sm font-bold">
                      2
                    </div>
                    <div className="w-1/2 pl-8">
                      <h4 className="font-semibold text-[#0C1B4D]">Receive Return Authorization</h4>
                      <p className="text-sm text-gray-600">
                        We'll review your request and provide return instructions if approved
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="font-semibold text-[#0C1B4D]">Ship the Item Back</h4>
                      <p className="text-sm text-gray-600">
                        Package the item securely and ship it to our return address
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1E2761] text-white flex items-center justify-center z-20 text-sm font-bold">
                      3
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center z-20 text-sm font-bold">
                      4
                    </div>
                    <div className="w-1/2 pl-8">
                      <h4 className="font-semibold text-amber-700">Quality Inspection</h4>
                      <p className="text-sm text-gray-600">
                        We'll inspect the returned item to ensure it meets our return policy requirements
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="font-semibold text-green-700">Refund Processed</h4>
                      <p className="text-sm text-gray-600">
                        If approved, we'll process your refund to your original payment method
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center z-20 text-sm font-bold">
                      5
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 id="refund-section-1" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <TruckReturn className="h-6 w-6 text-amber-500 mr-2" />
                <span>1) RETURNS</span>
                <a
                  href="#refund-section-1"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">A. General Policy</h3>
                <div className="pl-4">
                  <h4 className="text-lg font-medium text-[#0C1B4D] mb-2">a) Duration</h4>
                  <p className="text-gray-700 mb-4">
                    Our return policy allows returns within 30 days from the date of purchase. Unfortunately, we are
                    unable to process refunds or exchanges once this 30-day period has passed.
                  </p>

                  <h4 className="text-lg font-medium text-[#0C1B4D] mb-2">b) Eligibility for Returns</h4>
                  <p className="text-gray-700 mb-2">
                    Product Condition: To ensure a smooth and hassle-free return process, the following conditions must
                    be met for a product to qualify for a return:
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>The product must be in its original condition, unused, and free from any damage.</li>
                    <li>
                      It should be returned in the exact state as it was delivered, with no alterations, wear, or
                      visible signs of use, especially considering the handcrafted nature of the plastic replicas.
                    </li>
                    <li>
                      The products (plastic products if any) should be free from any scratches, chips, or marks, and
                      must not show signs of environmental damage such as moisture or heat exposure.
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-2">
                    Packaging and Component: The product must be accompanied by all original components, including:
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>Manufacturer's box or packaging (intact and undamaged).</li>
                    <li>Tags, labels, and stickers (unremoved and in their original position).</li>
                  </ul>

                  <p className="text-gray-700 mb-2">Handling and Use Restrictions:</p>
                  <p className="text-gray-700 mb-2">The product must not show signs of:</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>Misuse or inappropriate use beyond its intended purpose.</li>
                    <li>Abuse, mishandling, or neglect during use or storage.</li>
                    <li>
                      Unauthorized repairs, modifications, or alterations performed by the customer or third parties.
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-2">Verification Requirements:</p>
                  <p className="text-gray-700 mb-2">
                    Returns will only be processed if all the following conditions are verified:
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>The product was not damaged while in your possession.</li>
                    <li>
                      The product matches the one originally shipped to you in terms of model, variant, color, and
                      specifications.
                    </li>
                    <li>
                      All components, including the manufacturer's box, MRP tag, labels, user manual, warranty card, and
                      other accessories, are returned in their original condition.
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-2">Non-Returnable Items:</p>
                  <p className="text-gray-700 mb-2">
                    Certain items are non-returnable unless proven defective or damaged at the time of delivery. These
                    include:
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Custom-made or Personalized Products: This includes any items that are specially designed,
                      custom-engraved, or made-to-order according to customer specifications.
                    </li>
                    <li>
                      Miniatures or Models Altered or Painted by the Customer: Products that have been painted,
                      weathered, or otherwise modified by the customer are non-returnable.
                    </li>
                    <li>
                      Limited Edition or Special Release Items: Miniatures or models produced in limited quantities or
                      as part of a special edition, which are not available for general sale.
                    </li>
                    <li>
                      Gift Cards or Promotional Vouchers: Any form of gift card, voucher, or coupon issued for products
                      or services, which cannot be returned or refunded.
                    </li>
                    <li>
                      Bulk or Wholesale Orders: Large orders of miniatures or models that were customized or
                      specifically ordered in bulk quantities.
                    </li>
                    <li>
                      Prototype or Special Edition Models: Products that are prototypes or one-of-a-kind items, or those
                      produced for limited-time promotions or events.
                    </li>
                    <li>
                      Items with Altered Packaging: Miniatures or models that have been removed from their original
                      packaging, or where the packaging has been tampered with.
                    </li>
                  </ul>

                  <div className="my-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Condition
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Eligible for Return
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Eligible for Exchange
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Unopened, original packaging
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Defective on arrival
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Changed mind (unused)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Case by case
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Used or damaged by customer
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              No
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              No
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Custom or personalized items
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              No
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              No
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 mb-2">Compliance with Time Frame:</p>
                  <p className="text-gray-700 mb-4">
                    The return request must be raised within 30 days from the date of purchase or delivery. Requests
                    beyond this time frame will not be considered unless required under applicable consumer protection
                    laws.
                  </p>

                  <p className="text-gray-700 mb-2">Inspection and Approval</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Returns will be processed only after a detailed inspection of the returned product to confirm
                      adherence to the above criteria.
                    </li>
                    <li>
                      If the product does not meet the outlined conditions, the return request may be denied, and the
                      item will be shipped back to you.
                    </li>
                    <li>
                      Returns will be processed within 7-10 business days after the item has been received. You will be
                      notified via email once your return or exchange has been processed.
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-2">Condition of Returned Items:</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Returned items must be in original, unused, and undamaged condition with all original packaging,
                      components, and documentation intact. If the product shows signs of misuse or damage not related
                      to delivery issues, your return may be denied.
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">B. Documentation Required</h3>
                <div className="pl-4">
                  <p className="text-gray-700 mb-2">To process your return, please provide:</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>A valid receipt or proof of purchase.</li>
                    <li>Any additional documentation, such as warranty cards or invoices, if applicable.</li>
                  </ul>
                </div>
              </div>

              <h2 id="refund-section-2" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <DollarSign className="h-6 w-6 text-amber-500 mr-2" />
                <span>2) REFUNDS</span>
                <a
                  href="#refund-section-2"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">A. Refund Approval Process</h3>
                <div className="pl-4">
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>Upon receiving your returned item, we will inspect it thoroughly.</li>
                    <li>
                      You will be notified via email about the status of your refund—whether it is approved or
                      rejected—based on compliance with the return policy.
                    </li>
                    <li>
                      If approved, the refund will be processed and credited to your original method of payment (e.g.,
                      credit card, bank account) within 7–10 business days.
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">B. Deductions</h3>
                <p className="text-gray-700 pl-4 mb-4">
                  If the item is returned due to reasons not covered under "defective or damaged," the cost of return
                  shipping will be deducted from the refund amount.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">C. Refund for Sale Items</h3>
                <p className="text-gray-700 pl-4 mb-4">
                  Refunds are applicable only for regular-priced items. Items purchased during sales, discounts, or
                  special promotions are non-refundable, unless they are defective.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">D. Late or Missing Refunds</h3>
                <div className="pl-4">
                  <p className="text-gray-700 mb-2">
                    If you haven't received your refund within the expected timeline:
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>Check your bank account or credit card statement.</li>
                    <li>Contact your bank or credit card company, as processing times may vary.</li>
                    <li>If you still haven't received your refund, contact us at Support@infinitytoytronics.com.</li>
                  </ul>
                </div>
              </div>

              <h2 id="refund-section-3" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <RefreshCw className="h-6 w-6 text-amber-500 mr-2" />
                <span>3) EXCHANGES</span>
                <a
                  href="#refund-section-3"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">A. Eligibility</h3>
                <div className="pl-4">
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Exchanges are only available for items that are defective or damaged at the time of delivery. We
                      do not accept exchanges for products that are simply unwanted or do not meet customer
                      expectations.
                    </li>
                    <li>
                      Defective or Damaged Items: If your product arrives defective, damaged, or with significant
                      quality issues (such as broken parts, scratches, chips, or manufacturing defects), you are
                      eligible for an exchange
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">B. Requesting an Exchange</h3>
                <p className="text-gray-700 pl-4 mb-4">
                  If you wish to exchange an item for the same product or a similar replacement, please email us at
                  Support@infinitytoytronics.com with your order details, and attach clear photos of the damage or
                  defect. Once we have verified the issue, we will guide you through the exchange process.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">C. Time Frame</h3>
                <div className="pl-4">
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Processing Time: The time it takes to process and deliver an exchanged product may vary depending
                      on your location, product availability, and shipping times.
                    </li>
                    <li>
                      Exchange Timeline: We aim to process exchanges within 7-10 business days of receiving the returned
                      product. However, during peak times or holidays, this may take longer.
                    </li>
                  </ul>
                </div>
              </div>

              <h2 id="refund-section-4" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Gift className="h-6 w-6 text-amber-500 mr-2" />
                <span>4) GIFTS</span>
                <a
                  href="#refund-section-4"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">A. Gift Returns (Marked at Purchase)</h3>
                <p className="text-gray-700 pl-4 mb-4">
                  If the item was marked as a gift during the purchase and shipped directly to you, the recipient will
                  receive a gift credit for the value of the returned item. Once the return is processed, a gift
                  certificate will be issued to the recipient for the same amount as the original purchase.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">B. Non-Gift Purchases</h3>
                <p className="text-gray-700 pl-4">
                  If the item was not marked as a gift during purchase, the refund will be processed to the original
                  purchaser. The purchaser will be notified of the return and refund.
                </p>
              </div>

              <h2 id="refund-section-5" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Package className="h-6 w-6 text-amber-500 mr-2" />
                <span>5) SHIPPING</span>
                <a
                  href="#refund-section-5"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">A. Return Address</h3>
                <div className="pl-4">
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      To initiate a return, send the item to the following address: Infinity Toy Tronics Private
                      Limited, Vantage-C Tower by Bramha Corp, Opposite Bavdhan Police Chowki, 902, NDA Pashan Rd, Ram
                      Nagar, Bavdhan, Pune, Maharashtra 411021.
                    </li>
                    <li>
                      Ensure that the product is carefully packaged to prevent damage during transit. We recommend using
                      the original packaging, if possible. If not, make sure the product is wrapped securely with
                      appropriate padding materials (e.g., bubble wrap, packing peanuts).
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">B. Shipping Costs</h3>
                <div className="pl-4">
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Customer Responsibility: Customers are responsible for paying their own shipping costs for
                      returning items to us. Return shipping costs are non-refundable. If your return qualifies for a
                      refund, the return shipping cost will be deducted from the refund amount.
                    </li>
                    <li>
                      Refunds and Deductions: The refund issued will be for the product purchase price only, excluding
                      any shipping fees associated with the return.
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">C. Shipping Timeline</h3>
                <div className="pl-4">
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Return Shipping Duration: Depending on your location, return shipping may take several business
                      days to weeks, especially for international orders.
                    </li>
                    <li>
                      Exchanged Product Delivery: Once your exchange is processed and shipped, delivery times will vary
                      depending on the shipping method and your location.
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">D. Shipping Recommendations</h3>
                <div className="pl-4">
                  <p className="text-gray-700 mb-2">To ensure your return or exchange is processed smoothly:</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Trackable Shipping: We recommend using a trackable shipping service for returns. If you use a
                      non-trackable shipping method, we cannot guarantee receipt of your returned item.
                    </li>
                    <li>
                      Shipping Insurance: For valuable or fragile items (like plastic replicas), we suggest purchasing
                      shipping insurance to protect against damage or loss during transit.
                    </li>
                    <li>
                      Proof of Delivery: We are not responsible for lost returns unless you provide proof of delivery
                      (e.g., tracking number, receipt of shipment).
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">E. International Returns</h3>
                <div className="pl-4">
                  <p className="text-gray-700 mb-2">For international returns, customers are responsible for:</p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700">
                    <li>
                      Import Taxes or Customs Duties: Any taxes or duties incurred during return shipment must be paid
                      by the customer.
                    </li>
                    <li>
                      Return Shipping Costs: International return shipping will also be at the customer's expense.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 my-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#020B2D] mb-6 text-center">Frequently Asked Questions</h3>

              <div className="space-y-4">
                {[
                  {
                    question: "How long do I have to return an item?",
                    answer:
                      "You have 30 days from the date of purchase to return an item. After this period, returns will not be accepted unless required by applicable consumer protection laws.",
                  },
                  {
                    question: "Do I have to pay for return shipping?",
                    answer:
                      "Yes, customers are responsible for return shipping costs unless the return is due to our error or a defective product.",
                  },
                  {
                    question: "How long does it take to process a refund?",
                    answer:
                      "Once we receive your return, we'll inspect it and process your refund within 7-10 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution.",
                  },
                  {
                    question: "Can I exchange an item instead of returning it?",
                    answer:
                      "Exchanges are only available for items that are defective or damaged at the time of delivery. We do not offer exchanges for items that are simply unwanted.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        </span>
                      </summary>
                      <p className="p-4 text-gray-700 bg-white">{faq.answer}</p>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center my-12">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-amber-100 text-gray-800 rounded-full transition-colors duration-200"
              >
                <ChevronUp className="h-4 w-4 mr-1" />
                Back to Top
              </a>
            </div>

            <div className="bg-gradient-to-r from-[#020B2D] to-[#1E2761] p-6 rounded-xl text-white mt-8 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">Important Note</h3>
                  <p className="text-gray-200">
                    This policy is subject to change without prior notice. We recommend checking our website for the
                    most up-to-date version before initiating a return or exchange. If you have any questions about our
                    Return, Refund, and Exchange Policy, please contact our customer service team.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/terms-of-service"
                className="px-6 py-3 bg-gradient-to-r from-[#020B2D] to-[#1E2761] text-white rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Quick Nav */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-white rounded-full shadow-lg p-3 flex flex-col items-center space-y-2 border border-gray-200">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center text-amber-800 transition-colors duration-200"
            title="Back to Top"
          >
            <ChevronUp className="h-5 w-5" />
          </a>
          <a
            href="/terms-of-service"
            className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-800 transition-colors duration-200"
            title="Terms of Service"
          >
            <FileText className="h-5 w-5" />
          </a>
          <a
            href="/privacy-policy"
            className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-800 transition-colors duration-200"
            title="Privacy Policy"
          >
            <Lock className="h-5 w-5" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

