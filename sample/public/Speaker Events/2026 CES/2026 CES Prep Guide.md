# **CES 2026 Preparation Guide**

## **Session: Building Accessibility In: From Design Systems to Testing, Powered by Verizon**

Date: Wednesday, January 7, 2026 | Time: 12:20 PM \- 12:50 PM  
Location: Venetian Expo, Level 2, Accessibility Stage

### **Q1: (For Fred \- Your Context)**

*As the Chief Accessibility Officer at Verizon, why does the design system represent such a critical leverage point for building accessible experiences at enterprise scale?*

**Andrew’s Contextual Support:** Reinforce the **"People Partnership."** The design system is the "living agreement" that scales Fred’s vision. It’s the technology that enables our people to work together at the scale of Verizon.

### **Q2: (For Andrew)**

*From the design system side, how does thinking about accessibility at the component and pattern level change the way teams build and ship products?*

**Response:** "It moves us from reactive auditing to **'proactive compliance.'** We treat VDS components as reusable, fully-vetted UI patterns. By solving for keyboard behavior and ARIA roles once at the component level, we provide that accessibility to every product team. This moves us away from a manual, handcrafted approach toward an industrial-scale operation where inclusion is a foundational requirement, not a final polish."

### **Q3: (For Fred \- Your Context)**

*What tends to break down when accessibility is treated as a final checkpoint instead of something embedded earlier in the design and build process?*

**Andrew’s Contextual Support:** Reference the **"Status Quo"** from your previous talk: "When it’s a final checkpoint, it becomes a bottleneck. It forces 'component iterations' late in the game, which is inefficient. Shifting left isn't just about quality; it's about maintaining our speed-to-market."

### **Q4: (For Andrew)**

*How have you worked accessibility validation into the design system in a way that supports designers and engineers rather than slowing them down?*

**Response:** "We focus on 'meeting them where they are' within our **Intelligent Platform**. For quick, visual validation during the build phase, our teams use the **Evinced Flow Analyzer**. It’s like a browser inspect tool specifically for accessibility that provides real-time fix suggestions for our storybooks and live pages. By putting that intelligence directly in the hands of the creator, we prevent bugs from ever reaching the repository."

### **Q5: (For Fred \- Your Context)**

*When issues are identified in the design system versus production, how does that impact remediation cost, risk, and time to resolution?*

**Andrew’s Contextual Support:** Use the **1-10-100 rule**. Fixing an issue in the VDS "Source of Truth" resolves it for every downstream IT partner instantly. Fixing it in production is a massive, multi-team refactor effort.

### **Q6: (For Andrew)**

*What role do tools and automation play in giving designers and engineers confidence that components are accessible as they are being created?*

**Response:** "Automation provides the 'comprehensive safety net.' We've integrated the **Evinced Automation SDK via their Playwright SDK** directly into our CI/CD pipelines. This ensures that every component is checked **pre-merge**. It gives our engineers confidence that no regressions are slipping through. More importantly, because our downstream IT partners use the same standards, it prevents them from experiencing failures that would otherwise kick work back to our team. It creates a 'paved road' of trust between our design system and the product teams."

### **Q7: (For Fred \- Your Context)**

*At Verizon’s scale, human reviews alone are not enough. How do smarter testing approaches help your team prioritize where accessibility experts should spend their time?*

**Andrew’s Contextual Support:** Reference the **"Aggregate" pillar**: "By automating the repetitive 'binary' checks with our SDKs, we filter out the noise. This doesn't replace our people; it **elevates** them. It allows our accessibility experts to spend 100% of their time on high-impact usability and complex human-centered challenges that automation can't solve."

### **Q8: (For Andrew)**

*For design system leaders watching this, what is one concrete step they can take right now to start shifting accessibility testing earlier in their system?*

**Response:** "Standardize your **Accessibility Documentation**—your 'Source of Truth.' Define your 'Accessibility Intent'—keyboard patterns, roles, and labels—before code is written. Once you have that standard, leverage automation like the **Evinced Playwright SDK** to enforce it. You can't successfully 'Shift Left' if you haven't defined what the 'Right' looks like first."

### **Ethics & Strategy Check:**

* **Technical Integration vs. Endorsement:** By naming the **Flow Analyzer** and **Playwright SDK**, you are describing your *internal technical stack* rather than giving a marketing testimonial.  
* **Competitive Advantage:** Tie everything back to the **"Curb Cut Effect."** A system that passes an Automation SDK check is a higher-quality, more performant system for 100% of Verizon Business customers.