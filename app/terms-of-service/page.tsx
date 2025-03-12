import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FileText, Shield, CheckCircle, AlertTriangle, Info, ChevronUp, Lock, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
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
              <span className="text-amber-400 font-medium">Legal Information</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
              Terms of Service
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By using Cricket Icons, you agree to these
              terms and conditions.
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
                  <p className="text-amber-800 font-medium">Effective Date: January 1, 2024</p>
                  <p className="text-amber-700 text-sm mt-1">
                    These Terms of Service govern your use of the Cricket Icons website. By using our services, you
                    agree to these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#020B2D] mb-4 flex items-center">
                <FileText className="h-5 w-5 text-amber-500 mr-2" />
                Table of Contents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[...Array(15)].map((_, i) => (
                  <a
                    key={i}
                    href={`#section-${i + 1}`}
                    className="text-blue-600 hover:text-amber-500 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-2 text-xs group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors duration-200">
                      {i + 1}
                    </span>
                    <span className="text-sm">
                      {i === 0
                        ? "General Conditions"
                        : i === 1
                          ? "Amendments to Terms"
                          : i === 2
                            ? "Product Information"
                            : i === 3
                              ? "Order Acceptance"
                              : i === 4
                                ? "User Account"
                                : i === 5
                                  ? "Prohibited Conduct"
                                  : i === 6
                                    ? "Intellectual Property"
                                    : i === 7
                                      ? "Privacy Policy"
                                      : i === 8
                                        ? "Third-Party Links"
                                        : i === 9
                                          ? "Limitation of Liability"
                                          : i === 10
                                            ? "Indemnification"
                                            : i === 11
                                              ? "Dispute Resolution"
                                              : i === 12
                                                ? "Termination"
                                                : i === 13
                                                  ? "Entire Agreement"
                                                  : "Contact Information"}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 id="section-1" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Shield className="h-6 w-6 text-amber-500 mr-2" />
                <span>1. GENERAL CONDITIONS</span>
                <a href="#section-1" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">1.1 Eligibility</h3>
                <p className="text-gray-700 mb-4">
                  You must be at least 18 years of age or the age of majority in your jurisdiction to use the services
                  provided by Cricket Icons. If you are under the age of majority, you may only use the Site with the
                  involvement of a parent or legal guardian who agrees to be bound by these Terms.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">1.2 Usage Rights</h3>
                <p className="text-gray-700 mb-4">
                  By using our Site, you warrant that you are not barred from receiving services under the applicable
                  laws of India or any other jurisdiction. You are responsible for complying with local laws and
                  regulations.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">1.3 Non-Commercial Use</h3>
                <p className="text-gray-700">
                  The products and services on the Site are for personal use only. You agree not to engage in any
                  commercial activity, such as reselling or distributing products, without express permission from
                  Cricket Icons.
                </p>
              </div>

              <h2 id="section-2" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <FileText className="h-6 w-6 text-amber-500 mr-2" />
                <span>2. AMENDMENTS TO TERMS</span>
                <a href="#section-2" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">2.1 Modifications</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify, update, or change these Terms at any time. Changes will be posted on
                  this page, and we will indicate the "Effective Date" at the top of this page. Continued use of the
                  Site after changes are posted constitutes your acceptance of those changes.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">2.2 Notification</h3>
                <p className="text-gray-700">
                  You agree to review these Terms periodically to stay informed about any changes. We are not obligated
                  to notify you directly of changes unless required by law.
                </p>
              </div>

              <h2 id="section-3" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <CheckCircle className="h-6 w-6 text-amber-500 mr-2" />
                <span>3. PRODUCT INFORMATION AND SERVICES</span>
                <a href="#section-3" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">3.1 Product Availability</h3>
                <p className="text-gray-700 mb-4">
                  Some products or services may only be available for purchase online through our website, while others
                  may also be available offline through our official distribution partners. These products are subject
                  to availability and may have specific terms related to returns and exchanges, which will be disclosed
                  in our Return Policy.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">3.2 Pricing</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify product pricing at our sole discretion. All prices are quoted in Indian
                  Rupees (INR), and taxes may apply as per local laws.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">3.3 Product Display</h3>
                <p className="text-gray-700 mb-4">
                  While we strive to provide accurate product images and descriptions, we cannot guarantee that the
                  color representation on your device will be completely accurate.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">3.4 Right to Limit Sales</h3>
                <p className="text-gray-700">
                  Cricket Icons reserves the right to limit the quantity of products sold to any person, geographic
                  location, or jurisdiction. We may exercise this right on a case-by-case basis.
                </p>
              </div>

              <h2 id="section-4" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <FileText className="h-6 w-6 text-amber-500 mr-2" />
                <span>4. ORDER ACCEPTANCE AND BILLING INFORMATION</span>
                <a href="#section-4" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">4.1 Order Acceptance</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to refuse or cancel orders at our discretion. We may limit or cancel orders based
                  on factors like product availability, pricing errors, or suspected fraud.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">4.2 Billing Information</h3>
                <p className="text-gray-700 mb-4">
                  You agree to provide accurate, complete, and up-to-date information for purchases made on the Site,
                  including shipping addresses, contact details, and credit card information. Failure to do so may
                  result in order cancellation.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">4.3 Fraud Prevention</h3>
                <p className="text-gray-700">
                  If you provide an address that does not match the billing address of your credit card, we may request
                  additional verification to prevent fraudulent transactions.
                </p>
              </div>

              <h2 id="section-5" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Shield className="h-6 w-6 text-amber-500 mr-2" />
                <span>5. USER ACCOUNT AND PASSWORD</span>
                <a href="#section-5" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">5.1 Account Responsibility</h3>
                <p className="text-gray-700 mb-4">
                  To access certain features of the Site, you may be required to create an account. You are responsible
                  for maintaining the confidentiality of your account details and for all activities that occur under
                  your account.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">5.2 Account Security</h3>
                <p className="text-gray-700">
                  You must notify Cricket Icons immediately of any unauthorized access or use of your account. We are
                  not liable for any damages arising from unauthorized use.
                </p>
              </div>

              <h2 id="section-6" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                <span>6. PROHIBITED CONDUCT</span>
                <a href="#section-6" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">6.1 Illegal Activities</h3>
                <p className="text-gray-700 mb-4">
                  You agree not to use the Site for any illegal purpose, including violating Indian laws, such as those
                  related to intellectual property, consumer protection, or cybersecurity.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">6.2 Content Violations</h3>
                <p className="text-gray-700 mb-4">
                  You shall not upload, post, or transmit any unlawful, defamatory, libelous, obscene, or offensive
                  content on the Site.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">6.3 Malware</h3>
                <p className="text-gray-700 mb-4">
                  You are prohibited from uploading or transmitting viruses, worms, or any other harmful software or
                  code that may damage or impair the Site.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">6.4 Interference</h3>
                <p className="text-gray-700">
                  You agree not to interfere with the proper functioning of the Site, including attempting to bypass any
                  security measures or accessing the Site in an unauthorized manner.
                </p>
              </div>

              <h2 id="section-7" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <FileText className="h-6 w-6 text-amber-500 mr-2" />
                <span>7. INTELLECTUAL PROPERTY</span>
                <a href="#section-7" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">7.1 Ownership</h3>
                <p className="text-gray-700">
                  All content on the Site, including but not limited to text, images, logos, graphics, software, and
                  product descriptions, is the intellectual property of Cricket Icons or its licensors and is protected
                  by Indian copyright and trademark laws.
                </p>
              </div>

              <h2 id="section-8" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Shield className="h-6 w-6 text-amber-500 mr-2" />
                <span>8. PRIVACY POLICY</span>
                <a href="#section-8" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">8.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  The personal information you submit to Cricket Icons Store is governed by our Privacy Policy. By using
                  the Site, you consent to the collection, use, and processing of your personal data as described in the
                  Privacy Policy.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">8.2 Data Protection</h3>
                <p className="text-gray-700">
                  We comply with applicable Indian data protection laws, including the Information Technology
                  (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
                  under the Information Technology Act, 2000.
                </p>
              </div>

              <h2 id="section-9" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <FileText className="h-6 w-6 text-amber-500 mr-2" />
                <span>9. THIRD-PARTY LINKS</span>
                <a href="#section-9" className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">9.1 External Websites</h3>
                <p className="text-gray-700 mb-4">
                  The Site may contain links to third-party websites. These links are provided for your convenience, and
                  Cricket Icons does not endorse or take responsibility for the content, accuracy, or practices of these
                  third-party websites.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">9.2 Transactions with Third Parties</h3>
                <p className="text-gray-700">
                  Any dealings or transactions you conduct with third parties, including purchases, are solely between
                  you and the third party. Cricket Icons is not responsible for any claims or disputes arising from
                  third-party transactions.
                </p>
              </div>

              <h2 id="section-10" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                <span>10. LIMITATION OF LIABILITY</span>
                <a
                  href="#section-10"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">10.1 No Guarantee</h3>
                <p className="text-gray-700 mb-4">
                  Cricket Icons does not guarantee that the Site will be free from errors, interruptions, or viruses. We
                  are not liable for any damages arising from the use or inability to use the Site.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">10.2 Limitation of Damages</h3>
                <p className="text-gray-700">
                  In no event shall Cricket Icons be liable for any indirect, incidental, punitive, or consequential
                  damages, including but not limited to loss of profits or data, arising from the use of our services.
                </p>
              </div>

              <h2 id="section-11" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Shield className="h-6 w-6 text-amber-500 mr-2" />
                <span>11. INDEMNIFICATION</span>
                <a
                  href="#section-11"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">11.1 User Liability</h3>
                <p className="text-gray-700">
                  You agree to indemnify and hold harmless Cricket Icons, its employees, affiliates, agents, and
                  contractors from any claims, losses, or damages (including legal fees) arising from your breach of
                  these Terms or violation of any laws or rights of third parties.
                </p>
              </div>

              <h2 id="section-12" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <FileText className="h-6 w-6 text-amber-500 mr-2" />
                <span>12. DISPUTE RESOLUTION AND GOVERNING LAW</span>
                <a
                  href="#section-12"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">12.1 Governing Law</h3>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                  arising out of or in connection with these Terms shall be subject to the jurisdiction of the courts
                  located in Pune, India.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">12.2 Dispute Resolution</h3>
                <p className="text-gray-700">
                  Any disputes or claims shall be resolved through arbitration under the Arbitration and Conciliation
                  Act, 1996. The arbitration shall take place in Pune, India, and the language of arbitration will be
                  English.
                </p>
              </div>

              <h2 id="section-13" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                <span>13. TERMINATION</span>
                <a
                  href="#section-13"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">13.1 Termination by Us</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to suspend or terminate your access to the Site if you fail to comply with any
                  provision of these Terms, including but not limited to illegal or unauthorized activities.
                </p>

                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">13.2 Survival of Terms</h3>
                <p className="text-gray-700">
                  Upon termination, the provisions of these Terms that by their nature should survive termination (e.g.,
                  intellectual property rights, limitation of liability) will remain in effect.
                </p>
              </div>

              <h2 id="section-14" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <FileText className="h-6 w-6 text-amber-500 mr-2" />
                <span>14. ENTIRE AGREEMENT</span>
                <a
                  href="#section-14"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <h3 className="text-xl font-semibold text-[#0C1B4D] mb-2">14.1 Complete Agreement</h3>
                <p className="text-gray-700">
                  These Terms, along with our Privacy Policy and any other legal notices or agreements posted on the
                  Site, constitute the entire agreement between you and Cricket Icons regarding your use of the Site.
                </p>
              </div>

              <h2 id="section-15" className="text-2xl font-bold text-[#020B2D] mb-4 flex items-center group">
                <Info className="h-6 w-6 text-amber-500 mr-2" />
                <span>15. CONTACT INFORMATION</span>
                <a
                  href="#section-15"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <span className="text-amber-500 text-sm">#</span>
                </a>
              </h2>
              <div className="pl-8 mb-8">
                <p className="text-gray-700">
                  If you have any questions or concerns about these Terms, please contact us at:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Email: Support@infinitytoytronics.com</li>
                  <li>
                    Company's Address: Vantage C Tower by Bramha Corp, Opposite Bavdhan Police Chowki, 902, NDA Pashan
                    Rd, Ram Nagar, Bavdhan, Pune, Maharashtra 411021
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
                href="/privacy-policy"
                className="px-6 py-3 bg-gradient-to-r from-[#020B2D] to-[#1E2761] text-white rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
              >
                Privacy Policy
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
            href="/privacy-policy"
            className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-800 transition-colors duration-200"
            title="Privacy Policy"
          >
            <Lock className="h-5 w-5" />
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

