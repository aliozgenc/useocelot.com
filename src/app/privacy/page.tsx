export default function PrivacyPage() {
    return (
        <div className="container-narrow py-16">
            <h1 className="text-3xl font-semibold">Ocelot AI – Privacy Policy</h1>
            <p className="mt-2 text-sm opacity-70">Effective date: 2025-09-01</p>

            <div className="prose prose-zinc max-w-none mt-8">
                <h2 className="text-xl font-semibold">1) Who we are</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>App name: Ocelot AI (“the App”)</li>
                    <li>Provider: Goa Digital Solutions</li>
                    <li>Contact: <a className="underline" href="mailto:aliozgenc@hotmail.com">aliozgenc@hotmail.com</a></li>
                </ul>

                <h2 className="text-xl font-semibold mt-8">2) What the App does</h2>
                <p className="mt-2">The App helps merchants generate AI images, optionally remove backgrounds, and create Shopify products with print‑ready 300 DPI PNG assets. It operates within the merchant’s Shopify admin.</p>

                <h2 className="text-xl font-semibold mt-8">3) Data we process</h2>
                <p className="mt-2 font-medium">Merchant/store data (non-customer):</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Shopify shop domain and app session identifiers</li>
                    <li>Admin user profile fields returned by Shopify OAuth (for example: first name, last name, email, locale) to operate sessions and authorization</li>
                    <li>App configuration and subscription data (plan, limits/usage)</li>
                </ul>
                <p className="mt-4 font-medium">Product data:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Product titles, descriptions, tags, media uploaded to the merchant’s Shopify store</li>
                </ul>
                <p className="mt-4 font-medium">Image processing data:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>AI-generated images provided by the merchant in the App and processed in memory or transiently to produce 300 DPI PNGs</li>
                </ul>
                <p className="mt-4">We do not collect or process protected customer data (PCD) such as order, customer, contact, address, or phone information. The App does not query Customers, Orders, DraftOrders, Checkout, or similar PCD resources.</p>

                <h2 className="text-xl font-semibold mt-8">4) Purpose and legal basis</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>Provide core functionality: image generation, image enhancement (300 DPI), background removal, and product creation</li>
                    <li>Maintain sessions and enforce usage limits</li>
                    <li>Improve reliability and prevent abuse (rate limiting and security logging)</li>
                </ul>
                <p className="mt-2">Processing is necessary to perform the service the merchant requests by installing and using the App.</p>

                <h2 className="text-xl font-semibold mt-8">5) Protected customer data (PCD)</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>The App is designed at Level 0 (no customer data) under Shopify’s protected customer data framework.</li>
                    <li>We don’t request access to PCD or to PCD fields (name, address, email, phone).</li>
                    <li>If future functionality needs PCD, we will request access through Partner Dashboard and meet the applicable Level 1/2 requirements before enabling such features for merchants. See Shopify’s guidance: Work with protected customer data.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8">6) Data minimization and retention</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>We collect only the data needed to run the App.</li>
                    <li>Session and subscription records are retained while the app is installed and for a limited period after uninstall (up to 30 days) for audit and billing reconciliation, then deleted.</li>
                    <li>Image processing is performed in memory or via short‑lived uploads; we don’t keep permanent copies outside the merchant’s store unless explicitly necessary to deliver the feature.</li>
                    <li>Logs are retained for a limited period for security and troubleshooting.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8">7) Security</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>Encryption in transit (TLS) and at rest (platform-managed encryption).</li>
                    <li>Role-based access controls; least privilege for operational staff.</li>
                    <li>Database protections (row-level security enabled, server-side only access via service role).</li>
                    <li>Protection against abuse (server-side rate limiting, input validation).</li>
                    <li>Security incident response process; we will notify merchants of material incidents as required by law.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8">8) Subprocessors / data recipients</h2>
                <p className="mt-2">To operate the App, we use:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Shopify Admin API and media storage (to create products and attach media)</li>
                    <li>Vercel (application hosting)</li>
                    <li>Supabase/Postgres (application database)</li>
                    <li>Stability AI (optional image generation when merchant requests it)</li>
                </ul>
                <p className="mt-2">We share only the minimum necessary data with these processors to provide the service.</p>

                <h2 className="text-xl font-semibold mt-8">9) International transfers</h2>
                <p className="mt-2">Data may be processed in data centers outside your jurisdiction by our hosting and database providers subject to their standard contractual safeguards and encryption.</p>

                <h2 className="text-xl font-semibold mt-8">10) Merchant/admin user rights</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>Access, correction, deletion of App‑stored data related to your shop</li>
                    <li>Uninstalling the App removes our access tokens; we delete residual data according to the retention schedule above</li>
                    <li>Contact us at <a className="underline" href="mailto:aliozgenc@hotmail.com">aliozgenc@hotmail.com</a> for requests</li>
                </ul>

                <h2 className="text-xl font-semibold mt-8">11) Children</h2>
                <p className="mt-2">The App is intended for business use in Shopify admin and not directed to children.</p>

                <h2 className="text-xl font-semibold mt-8">12) Changes to this Policy</h2>
                <p className="mt-2">We may update this Policy as the App or laws evolve. Material changes will be communicated through the App or by email to the store owner on file.</p>

                <h2 className="text-xl font-semibold mt-8">13) Contact</h2>
                <p className="mt-2">Goa Digital Solutions<br /> <a className="underline" href="mailto:aliozgenc@hotmail.com">aliozgenc@hotmail.com</a></p>
            </div>
        </div>
    );
}
