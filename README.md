# Columbus Housing homepage concept

Open `index.html` in a browser. This is a single responsive HTML home page created for the RFP 26-712 design review. The generated hero photograph is illustrative and does not depict a verified HACG property or resident.

## What the home page demonstrates

- Clear paths for applicants, residents, landlords, and community partners.
- An anonymous three-path guidance interaction for applications, voucher porting, and resident transfers.
- An accessible suggested search of the **home page topics** with “Section 8” and HCV synonyms.
- A staff-publishable waitlist status pattern. The current static snapshot reflects HACG's Section 8 page as reviewed on October 27, 2026; visitors are told to verify status on the official site.
- Prominent external RentCafé links for applicant, resident and landlord access.
- A theme-matched Columbus map preview with five labeled HACG community pins. Search by name or address and combine area, bedroom, and amenity filters; the pins and property list update together. Each result links to its official HACG page.
- Resource, community, Moving to Work and contact sections drawn from the current HACG website.

## RFP boundaries

The later Q&A clarifies that Yardi/RentCafé remains the system of record. Public applications, personal statuses, and other constituent data must stay outside the public CMS. Waitlist opening information is to be updated by HACG staff. Spanish translation is deferred at launch. The official minimum is WCAG 2.1 AA, while this concept is designed toward the requested WCAG 2.2 AA target.

The community map uses a static schematic base and a small, locally stored property dataset. Its five property names, addresses, bedroom ranges, amenities, and approximate pin positions were checked against the [official HACG community pages](https://columbushousing.org/housing-opportunities/communities/); the one-to-three-bedroom range for The Banks at Mill Village comes from [its development partner](https://www.columbiares.com/news/grand-opening-the-banks-of-mill-village-celebrated/). Search and filters operate on these five featured communities only. They do not represent current apartment availability. A full CMS-backed map requires verified HACG property data and an update process. The page also does not claim completed calculators, document migration, translated content, a secure board area, or accessibility certification. Those require HACG content, approved rules, system access, development, and manual assistive-technology testing. Links to sections beyond the home page currently return to the official HACG website.

## Design and accessibility notes

The visual direction uses warm editorial imagery, restrained green tones, clear service cards, and generous spacing inspired by public service and nonprofit housing work seen on Behance and Pinterest. The header and footer use the [official HACG logo asset](https://columbushousing.org/images/logo.svg); the white source asset is color-adjusted in the header for contrast on the existing light background. Homepage messaging, service names, contact details, and resource destinations were checked against the [current HACG website](https://columbushousing.org/) and related pages. Body copy was adapted for this layout rather than reproduced wholesale. The implementation includes semantic landmarks, a skip link, visible focus outlines, large controls, mobile navigation, keyboard-operable interactions, reduced-motion support, and no collection or storage of user input. Search queries remain in browser memory and are never sent to a server.

Reference links: [Bellwether Housing on Behance](https://www.behance.net/gallery/177323353/Bellwether-Housing-Branding-Website), [Project Own on Behance](https://www.behance.net/gallery/230383213/Project-Own), [Pinterest nonprofit design reference](https://www.pinterest.com/pin/care-fund-nonprofit-website-design-case-study--202169470766811029/), [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

The concept image was generated with the built-in ImageGen tool. Prompt: “Photorealistic editorial website hero photograph for a public affordable housing authority homepage in Columbus, Georgia. A welcoming multigenerational diverse family walking together on a shaded sidewalk in front of attractive modest brick townhomes and mature trees, warm late-afternoon natural light, genuine candid moment, grounded civic community feeling, wide horizontal composition with subjects on the right half and calm uncluttered space on the left for text overlay; no logos, signs, text, watermarks, or luxury styling.”

The four Programs and Services images were generated with built-in ImageGen and saved as optimized WebP assets in `assets/`. The prompt set described: a resident using a laptop at home; a landlord and housing representative talking outside a modest brick home; a tree-lined apartment courtyard with neighbors; and a resident planning with a counselor. All four prompts specified a consistent warm Georgia daylight, muted sage and brick palette, candid editorial style, and no logos or legible text. These images are illustrative, not photographs of HACG residents, staff, or properties.
"# thehousingauthority" 
