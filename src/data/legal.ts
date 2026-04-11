export interface LegalHighlight {
	title: string;
	description: string;
}

export interface LegalSection {
	title: string;
	html: string;
}

export const legalLastUpdated = 'April 10, 2026';

export const privacyHighlights: LegalHighlight[] = [
	{
		title: 'Data stays tied to the service',
		description:
			'Foldnote uses your information to run notes, sync, sharing, support, and security. It is not sold for advertising.'
	},
	{
		title: 'You keep ownership of your notes',
		description:
			'Your notes, attachments, and shared content remain yours. Foldnote only uses them to provide storage, sync, and collaboration.'
	},
	{
		title: 'Controls are available in-product',
		description:
			'You can export data, edit profile details, disable optional analytics, or request deletion from the app settings.'
	}
];

export const privacySections: LegalSection[] = [
	{
		title: 'Introduction',
		html: `<p>Welcome to Foldnote. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you use the Foldnote mobile application and related services.</p>
<p>Foldnote is a collaborative note-taking app that helps people create, organize, and share notes for personal planning and shared spaces.</p>`
	},
	{
		title: 'Information we collect',
		html: `<h3>Account information</h3>
<ul>
<li>Email address used for sign-in</li>
<li>Display name</li>
<li>Profile picture, if you choose to add one</li>
</ul>
<h3>Content you create</h3>
<ul>
<li>Notes and note content</li>
<li>Images and attachments added to notes</li>
<li>Group messages and collaborative content</li>
<li>Folders and organization preferences</li>
</ul>
<h3>Usage information</h3>
<ul>
<li>Device model and operating system version</li>
<li>App usage analytics, only if you consent</li>
<li>Error logs and crash reports</li>
</ul>
<h3>Authentication data</h3>
<ul>
<li>Google Sign-In credentials handled by Google</li>
<li>Sign in with Apple credentials handled by Apple</li>
</ul>`
	},
	{
		title: 'How we use your information',
		html: `<p>We use your information to provide and maintain Foldnote, sync your notes across devices, enable collaboration, improve performance, fix bugs, send important service notices, and respond to support requests.</p>
<p>We do not sell your personal information to third parties, use note content for advertising, or share your content without permission except as required to operate the service or comply with law.</p>`
	},
	{
		title: 'Data storage and security',
		html: `<h3>Where data is stored</h3>
<ul>
<li>Apple CloudKit for personal note storage and sync</li>
<li>Firebase services for group collaboration features</li>
<li>On-device local cache to support app performance</li>
</ul>
<h3>Security measures</h3>
<ul>
<li>Encryption in transit</li>
<li>Encrypted storage where supported by the platform providers</li>
<li>Secure authentication flows</li>
<li>Ongoing maintenance and security updates</li>
</ul>
<h3>Retention</h3>
<ul>
<li>Active notes are stored while you use the service</li>
<li>Deleted notes may be removed after a retention window used for sync and recovery workflows</li>
<li>Account data is deleted when you delete your account, subject to technical and legal retention needs</li>
</ul>`
	},
	{
		title: 'Third-party services',
		html: `<p>Foldnote uses third-party infrastructure and identity providers to operate core features.</p>
<ul>
<li><strong>Firebase (Google):</strong> authentication, shared content storage, and optional analytics</li>
<li><strong>Apple CloudKit:</strong> personal note storage and cross-device sync</li>
<li><strong>Google Sign-In:</strong> optional account authentication</li>
</ul>
<p>These providers maintain their own privacy policies and terms.</p>`
	},
	{
		title: 'Your privacy rights',
		html: `<p>You may have rights under privacy laws that apply to you, including the right to access, correct, delete, export, or object to certain processing of your information.</p>
<ul>
<li>Export your data from the app when available</li>
<li>Edit account information in profile settings</li>
<li>Delete your account and associated data from account settings</li>
<li>Disable optional analytics in privacy settings</li>
<li>Contact us for access or objection requests at <a href="mailto:info@foldnote.app">info@foldnote.app</a></li>
</ul>`
	},
	{
		title: "Children's privacy",
		html: `<p>Foldnote is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If you believe a child provided personal information to Foldnote, contact us so we can investigate and take appropriate action.</p>`
	},
	{
		title: 'Analytics and tracking',
		html: `<p>Foldnote may use Firebase Analytics to understand feature usage, screen views, and app stability. Analytics is optional and should only be enabled when you consent.</p>
<p>Foldnote does not use note content, keystrokes, or location data for analytics reporting.</p>`
	},
	{
		title: 'International data transfers',
		html: `<p>Your data may be processed on servers located in countries outside your home country, including infrastructure operated by Apple and Google. Foldnote relies on the safeguards made available by these providers and applicable law for cross-border transfers.</p>`
	},
	{
		title: 'Changes to this policy',
		html: `<p>We may update this Privacy Policy from time to time. Material changes may be communicated through the app, by email if available, or by requesting renewed consent where required. Continued use of Foldnote after an update means you accept the revised policy.</p>`
	},
	{
		title: 'Contact us',
		html: `<p>If you have questions about this Privacy Policy or Foldnote's data practices, contact <a href="mailto:info@foldnote.app">info@foldnote.app</a>.</p>
<p>For privacy-specific requests, include enough detail for us to identify your account and respond within a reasonable period.</p>`
	},
	{
		title: 'Legal compliance',
		html: `<p>Foldnote is designed with common privacy and platform requirements in mind, including GDPR, CCPA, COPPA, and major app marketplace policies. Availability of specific rights and remedies may depend on your jurisdiction.</p>`
	}
];

export const termsHighlights: LegalHighlight[] = [
	{
		title: 'You keep ownership of your content',
		description:
			'Foldnote does not claim ownership of the notes you create. The service only receives the limited rights needed to store, sync, and share them.'
	},
	{
		title: 'Use must stay lawful and respectful',
		description:
			'The app cannot be used for abuse, illegal activity, infringement, malware, harassment, or attempts to compromise the service.'
	},
	{
		title: 'The service can change over time',
		description:
			'Features, pricing, and availability may evolve. Foldnote may suspend or terminate accounts that violate the Terms.'
	}
];

export const termsSections: LegalSection[] = [
	{
		title: 'Acceptance of terms',
		html: `<p>By downloading, installing, or using Foldnote, you agree to be bound by these Terms of Service. If you do not agree, do not use the app.</p>
<p>These Terms form a legally binding agreement between you and Foldnote for use of the app and related services.</p>`
	},
	{
		title: 'License to use Foldnote',
		html: `<p>Foldnote grants you a limited, non-exclusive, non-transferable, revocable license to use the app for personal or internal business purposes.</p>
<h3>You may</h3>
<ul>
<li>Create and manage notes</li>
<li>Collaborate with others in shared spaces</li>
<li>Sync your data across your devices</li>
<li>Export your data when those features are available</li>
</ul>
<h3>You may not</h3>
<ul>
<li>Reverse engineer or decompile the app</li>
<li>Copy, modify, or distribute the app without permission</li>
<li>Remove copyright or proprietary notices</li>
<li>Use the app for illegal purposes</li>
<li>Attempt to gain unauthorized access to Foldnote systems</li>
</ul>`
	},
	{
		title: 'User accounts',
		html: `<h3>Account creation</h3>
<ul>
<li>You must provide accurate account information</li>
<li>You must be at least 13 years old</li>
<li>You are responsible for maintaining account security</li>
<li>Each account should represent a single person or legal entity</li>
</ul>
<h3>Account security</h3>
<ul>
<li>Keep your sign-in credentials confidential</li>
<li>Notify us if you believe your account has been accessed without authorization</li>
<li>You are responsible for activity that occurs under your account</li>
</ul>
<h3>Account termination</h3>
<ul>
<li>You may delete your account at any time</li>
<li>Foldnote may suspend or terminate accounts that violate these Terms</li>
<li>Data handling after termination is governed by the Privacy Policy and operational retention needs</li>
</ul>`
	},
	{
		title: 'User content and ownership',
		html: `<p>You retain ownership of the notes, documents, media, and other content you create in Foldnote.</p>
<p>You grant Foldnote a limited license to host, store, back up, process, and transmit that content solely as needed to provide the service. This license ends when your content or account is deleted, subject to technical retention periods and legal obligations.</p>
<p>You are responsible for the content you create or share, for confirming that you have rights to upload it, and for complying with applicable law and third-party rights.</p>
<h3>Prohibited content includes</h3>
<ul>
<li>Unlawful or infringing material</li>
<li>Malware, viruses, or harmful code</li>
<li>Harassment, threats, or abuse</li>
<li>Explicit or illegal material</li>
<li>Content promoting violence or discrimination</li>
</ul>`
	},
	{
		title: 'Group collaboration',
		html: `<p>If you use shared spaces, groups, or invite features, you agree to respect the purpose of the group, other members, and admin decisions.</p>
<ul>
<li>Do not spam or abuse shared messaging or editing features</li>
<li>Group creators and admins may manage members and moderation actions</li>
<li>When you leave a group, shared content may remain visible to that group if it is part of the shared workspace</li>
<li>Invite codes should be kept private unless intentionally shared by the group owner or admins</li>
</ul>`
	},
	{
		title: 'Intellectual property rights',
		html: `<p>Foldnote and its licensors own the app, code, design, branding, documentation, and related materials. Foldnote logos, names, and marks may not be used without permission.</p>
<p>All materials provided as part of the app are protected by intellectual property laws. Copying, redistribution, or creating derivative works is prohibited unless applicable law or written permission allows it.</p>`
	},
	{
		title: 'Prohibited uses',
		html: `<p>You agree not to misuse Foldnote, including by engaging in technical abuse, content abuse, or commercial abuse.</p>
<ul>
<li>Do not overload or attempt to crash the service</li>
<li>Do not circumvent security measures or use automated systems to exploit the app</li>
<li>Do not post spam, scrape data, harvest user information, or impersonate others</li>
<li>Do not resell, mirror, or redistribute the service in a competing way</li>
<li>Do not violate laws or third-party rights through your use of Foldnote</li>
</ul>`
	},
	{
		title: 'Service availability',
		html: `<p>Foldnote aims for reliable service but does not guarantee uninterrupted availability. Downtime can occur because of maintenance, technical issues, provider outages, or events outside our control.</p>
<p>Foldnote may update features, change pricing with notice where required, or discontinue features or the service over time.</p>
<p>The app is provided on an "as is" and "as available" basis to the fullest extent permitted by law.</p>`
	},
	{
		title: 'Disclaimers and limitation of liability',
		html: `<p>To the fullest extent permitted by law, Foldnote disclaims warranties and is not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or service interruptions.</p>
<p>You are responsible for maintaining backups of important content. If liability cannot be excluded, Foldnote's aggregate liability is limited to the amount you paid for the service in the 12 months before the event giving rise to the claim.</p>`
	},
	{
		title: 'Indemnification',
		html: `<p>You agree to indemnify and hold harmless Foldnote from claims, damages, liabilities, and expenses arising out of your use of the app, your violation of these Terms, your violation of third-party rights, or content you create or share through the service.</p>`
	},
	{
		title: 'Privacy',
		html: `<p>Your use of Foldnote is also governed by the <a href="/privacy">Privacy Policy</a>, which explains how information is collected, used, and protected.</p>`
	},
	{
		title: 'Copyright infringement',
		html: `<p>If you believe content in Foldnote infringes your copyright, contact <a href="mailto:info@foldnote.app">info@foldnote.app</a> with a description of the work, the location of the material, your contact information, and a good-faith statement supporting your claim.</p>`
	},
	{
		title: 'Termination',
		html: `<p>You may stop using Foldnote and delete your account at any time. Foldnote may suspend or terminate your access if you violate these Terms, engage in fraud, harm other users, or misuse the service.</p>
<p>On termination, your right to use the app ends immediately. Provisions that by their nature should survive termination, including ownership, limitations of liability, and indemnification, will continue to apply.</p>`
	},
	{
		title: 'Governing law and disputes',
		html: `<p>Please contact <a href="mailto:info@foldnote.app">info@foldnote.app</a> first so we can attempt to resolve disputes informally.</p>
<p>Any dispute that cannot be resolved informally will be handled under the laws and dispute forums that apply to Foldnote and the user relationship, excluding conflict-of-law principles where permitted. Where applicable law allows it, disputes must be brought on an individual basis and not as part of a class or representative action.</p>`
	},
	{
		title: 'Changes to these terms',
		html: `<p>Foldnote may modify these Terms from time to time. Updated Terms become effective when posted or when otherwise communicated to you, subject to applicable legal requirements.</p>
<p>If you do not agree to the updated Terms, you should stop using Foldnote and may delete your account.</p>`
	},
	{
		title: 'Severability and entire agreement',
		html: `<p>If any provision of these Terms is found unenforceable, the remaining provisions remain in effect. These Terms, together with the Privacy Policy and any applicable product-specific terms, form the entire agreement regarding your use of Foldnote.</p>`
	},
	{
		title: 'Contact us',
		html: `<p>For questions about these Terms of Service, contact <a href="mailto:info@foldnote.app">info@foldnote.app</a>.</p>`
	}
];
