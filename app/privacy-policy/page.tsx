import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Lock,
  Shield,
  Database,
  Cookie,
  Mail,
  Info,
  Clock,
  User,
  FileText,
  ChevronUp,
  RefreshCw,
  ShoppingBag,
  BarChart,
} from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
              <span className="text-amber-400 font-medium">Data Protection</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
              Privacy Policy
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We value your privacy and are committed to protecting your personal information. This policy explains how
              we collect, use, and safeguard your data.
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
                  <p className="text-amber-800 font-medium">Last Updated: January 1, 2024</p>
                  <p className="text-amber-700 text-sm mt-1">
                    This Privacy Policy outlines how Cricket Icons Store collects, uses, and discloses your personal
                    information when you visit, use our services, or make a purchase from Cricketicons.co, or otherwise
                    communicate with us.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#020B2D] mb-4 flex items-center">
                <FileText className="h-5 w-5 text-amber-500 mr-2" />
                Privacy Policy Sections
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[...Array(10)].map((_, i) => (
                  <a
                    key={i}
                    href={`#privacy-section-${i + 1}`}
                    className="text-blue-600 hover:text-amber-500 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-2 text-xs group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors duration-200">
                      {i + 1}
                    </span>
                    <span className="text-sm">
                      {i === 0
                        ? "Information Usage"
                        : i === 1
                          ? "Consent"
                          : i === 2
                            ? "Disclosure"
                            : i === 3
                              ? "Hosting & Data Security"
                              : i === 4
                                ? "Third-Party Services"
                                : i === 5
                                  ? "Security"
                                  : i === 6
                                    ? "Cookies"
                                    : i === 7
                                      ? "Age of Consent"
                                      : i === 8
                                        ? "Policy Changes"
                                        : "Contact Information"}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  We kindly ask that you read this Privacy Policy carefully. By using and accessing any of the Services,
                  you consent to the collection, use, and disclosure of your information as described in this Privacy
                  Policy. If you do not agree with this Privacy Policy, we respectfully ask that you refrain from using
                  or accessing any of the Services.
                </p>
              </div>

              <h2 id="privacy-section-1" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Database className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</span>
                <a
                  href="#privacy-section-1"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6 my-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#020B2D] mb-4">How We Use Your Data</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-blue-800">Order Processing</h4>
                    </div>
                    <p className="text-sm text-blue-700">
                      We use your information to process and fulfill your orders and provide customer support.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                        <Mail className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-purple-800">Communication</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      We may send you updates about your orders, customer service responses, and promotional content
                      (with consent).
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <BarChart className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-green-800">Site Improvement</h4>
                    </div>
                    <p className="text-sm text-green-700">
                      We analyze usage data to improve our website functionality and enhance your shopping experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pl-8 mb-8">
                <p className="text-gray-700 mb-4">
                  When you make a purchase or use our services, we collect the following personal information:
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>
                    Name, email address, phone number, shipping address, billing information, and any other information
                    you provide to us.
                  </li>
                  <li>
                    We may also automatically collect IP address, browser type, device type, and operating system when
                    you visit the Site.
                  </li>
                </ul>

                <p className="text-gray-700 mb-4">We may use the information we collect to:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Process and fulfill your orders and requests.</li>
                  <li>
                    Communicate with you regarding your orders, customer service inquiries, or promotions (with your
                    consent).
                  </li>
                  <li>Improve the functionality of the Site and enhance user experience.</li>
                  <li>Send you promotional or marketing emails (if you have opted in).</li>
                  <li>Meet legal or regulatory requirements.</li>
                </ul>

                <p className="text-gray-700 mb-4">Email marketing (if applicable):</p>
                <p className="text-gray-700">
                  With your permission, we may send you updates regarding our store, new products, and promotions. You
                  can opt-out of receiving marketing communications at any time by using the unsubscribe option in our
                  emails.
                </p>
              </div>

              <h2 id="privacy-section-2" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <User className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 2 - CONSENT</span>
                <a
                  href="#privacy-section-2"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">How do we obtain your consent?</h3>
                <p className="text-gray-700 mb-4">
                  When you provide us with personal information to complete a transaction, place an order, arrange for
                  delivery, or request a return, you consent to the collection and use of your information for those
                  purposes. If we request your information for other reasons, such as marketing, we will either seek
                  your explicit consent or offer you the opportunity to opt-out.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">How can you withdraw your consent?</h3>
                <p className="text-gray-700">
                  You have the right to withdraw your consent at any time. To do so, please contact us at (Your Contact
                  Email). Withdrawal of consent may affect our ability to provide you with certain services, such as
                  processing transactions.
                </p>
              </div>

              <h2 id="privacy-section-3" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <FileText className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 3 - DISCLOSURE</span>
                <a
                  href="#privacy-section-3"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700 mb-4">
                  We may disclose your personal information if we are required to do so by law, regulation, or
                  government request, or if you violate our Terms of Service. We may also disclose your personal data in
                  the following circumstances:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>
                    Legal requirements: If required by law or regulation, we may disclose your data to government
                    authorities, courts, or law enforcement agencies.
                  </li>
                  <li>
                    Service providers: We may share information with third-party service providers, such as payment
                    processors or delivery companies, to complete your transactions and provide our services.
                  </li>
                </ul>
              </div>

              <h2 id="privacy-section-4" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Database className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 4 - HOSTING AND DATA SECURITY</span>
                <a
                  href="#privacy-section-4"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700 mb-4">
                  Our website is hosted by Amazon Web Services, which provides the infrastructure required to offer our
                  services to you. We take appropriate measures to ensure the security of your personal data, utilizing
                  industry-standard encryption protocols, such as SSL (Secure Sockets Layer) and AES-256 encryption,
                  DDoS attack protection measures to safeguard sensitive information like payment details.
                </p>
                <p className="text-gray-700 mb-4">
                  We adhere to the best practices outlined by relevant laws, including the Information Technology
                  (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011,
                  to maintain the confidentiality and integrity of your data. However, while we implement strict
                  security measures, no method of data transmission or storage can be guaranteed to be 100% secure. We
                  strive to ensure the highest level of protection for your data, but we cannot guarantee absolute
                  security.
                </p>
                <p className="text-gray-700">
                  Payment Processing: We use third-party payment gateways to process your financial transactions. These
                  providers maintain their own privacy policies regarding how they handle your data. We strongly
                  recommend reviewing their privacy policies to ensure you understand how your personal information is
                  processed when making payments through our services.
                </p>
              </div>

              <h2 id="privacy-section-5" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Shield className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 5 - THIRD-PARTY SERVICES</span>
                <a
                  href="#privacy-section-5"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700 mb-4">
                  In order to provide specific services, such as payment processing or customer support, we may engage
                  third-party service providers. These providers will have access to your personal data only to the
                  extent necessary to fulfil their functions. However, please note that third-party services, such as
                  payment gateways, have their own independent privacy policies. We recommend that you review the
                  privacy policy of these third-party services before providing your personal information to them.
                </p>
                <p className="text-gray-700">
                  Additionally, some third-party service providers may be located outside India. In such cases, your
                  personal information may be transferred to countries with data protection laws that may differ from
                  those in India. By proceeding with such transactions, you consent to the transfer of your data to
                  jurisdictions outside India and to be governed by the laws of those jurisdictions.
                </p>
              </div>

              <h2 id="privacy-section-6" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Lock className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 6 - SECURITY</span>
                <a
                  href="#privacy-section-6"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700">
                  We understand the importance of securing your personal information and use appropriate measures to
                  protect it from unauthorized access, misuse, or loss. Our security procedures include encryption and
                  various other industry-standard security practices designed to protect your data. While we take
                  reasonable steps to safeguard your information, we would like to remind you that no method of data
                  transmission over the internet or method of electronic storage is entirely secure. As a result, we
                  cannot guarantee absolute security, but we are committed to safeguarding your data to the best of our
                  ability.
                </p>
              </div>

              <h2 id="privacy-section-7" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Cookie className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 7 – COOKIES</span>
                <a
                  href="#privacy-section-7"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. We use cookies
                  and similar tracking technologies to improve your browsing experience, track website activity, and
                  store your preferences. Cookies help us personalize your experience by remembering your preferences
                  and providing you with a more tailored service.
                </p>
                <p className="text-gray-700 mb-4">The cookies we use include:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>_session_id: Tracks user sessions for analytics purposes.</li>
                  <li>shopify_visit: Tracks website visits and improves the functionality of the Site.</li>
                  <li>cart: Stores your shopping cart information.</li>
                  <li>_shopify_uniq: Tracks the number of visits by a single customer.</li>
                </ul>
                <p className="text-gray-700">
                  You can control cookie settings through your browser. However, please note that disabling cookies may
                  affect some features of the Site, such as shopping cart functionality and personalized
                  recommendations.
                </p>
              </div>

              <h2 id="privacy-section-8" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <User className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 8 - AGE OF CONSENT</span>
                <a
                  href="#privacy-section-8"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700">
                  By using our website, you confirm that you are at least 18 years old or have obtained parental consent
                  to use the Site. If you are under the age of 18, please ensure that you have obtained the necessary
                  consent before accessing or using any services on the Site.
                </p>
              </div>

              <h2 id="privacy-section-9" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Clock className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 9 - CHANGES TO THIS PRIVACY POLICY</span>
                <a
                  href="#privacy-section-9"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700">
                  We may update or modify this Privacy Policy from time to time. Any changes will be posted on this
                  page, and the effective date will be updated. We encourage you to review this Privacy Policy
                  periodically. If we make significant changes, we will notify you by posting a prominent notice on the
                  Site.
                </p>
              </div>

              <h2 id="privacy-section-10" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Mail className="h-6 w-6 text-amber-500 mr-2" />
                <span>SECTION 10 - CONTACT US</span>
                <a
                  href="#privacy-section-10"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns regarding this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Email: Support@infinitytoytronics.com</li>
                  <li>
                    Address: Vantage-C Tower by Bramha Corp, Opposite Bavdhan Police Chowki, 902, NDA Pashan Rd, Ram
                    Nagar, Bavdhan, Pune, Maharashtra 411021
                  </li>
                </ul>
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

            <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/terms-of-service"
                className="px-6 py-3 bg-gradient-to-r from-[#020B2D] to-[#1E2761] text-white rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
              >
                Terms of Service
              </Link>
              <Link
                href="/refund-policy"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
              >
                Refund Policy
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
            href="/refund-policy"
            className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-green-800 transition-colors duration-200"
            title="Refund Policy"
          >
            <RefreshCw className="h-5 w-5" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

