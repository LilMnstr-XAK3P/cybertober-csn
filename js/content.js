/* Cyber October 2026 — course content. Edit here: videos, KnowBe4 module IDs, readings, games, quizzes, resources. */
var CONTENT = {
  config: {
    year: 2026, month: 9,            // month is 0-based: 9 = October
    unlockAll: false,                // true = instructor preview build (all days open)
    passPct: 70,
    kitUrl: "https://www.knowbe4.com/resources/kits/cybersecurity-awareness-month",
    edition: "web",                  // "lms" = Canvas copy; "web" = GitHub Pages site (both with logos); "public" = no logos (set by build.py)
    disclaimer: '<b>Unofficial resource.</b> This course was created by Lily Morningstar, Cybersecurity Instructor, for College of Southern Nevada students. It is an instructor-made learning resource, not an official CSN publication. The CSN logo is used with approval from CSN Marketing.',
    author: "Lily Morningstar",
    authorTitle: "Cybersecurity Instructor"
  },

  weeks: {
    k:  { n: "Kickoff", c: "--w0" },
    w1: { n: "Wk 1 · Phishing & Social Engineering", c: "--w1" },
    w2: { n: "Wk 2 · AI Safety & Deepfakes", c: "--w2" },
    w3: { n: "Wk 3 · Data Security & Passwords", c: "--w3" },
    w4: { n: "Wk 4 · Incident Reporting", c: "--w4" },
    b:  { n: "Halloween Boss Fight", c: "--boss" }
  },

  badges: [
    { id: "recruit", name: "Recruit", w: "k", days: [1, 2], how: "Complete October 1 and 2.", msg: "You've joined the Workforce Risk Division. Your training starts now." },
    { id: "ghost", name: "The Ghost", w: "w1", days: [5, 6, 7, 8, 9], img: "img/badge-ghost.webp", how: "Complete every Week 1 weekday (Oct 5–9).", msg: "Counter-intelligence specialist. Motto: <b>Trust, but verify… then verify again.</b> If an email creates a false sense of urgency, it's probably a trap." },
    { id: "gadget", name: "Gadget", w: "w2", days: [12, 13, 14, 15, 16], img: "img/badge-gadget.webp", how: "Complete every Week 2 weekday (Oct 12–16).", msg: "Tech specialist in AI safety and deepfake detection. Motto: <b>Keep your tools sharp and your mind sharper.</b> Use a code word to verify identity during “urgent” calls." },
    { id: "locknkey", name: "Lock n' Key", w: "w3", days: [19, 20, 21, 22, 23], img: "img/badge-locknkey.webp", how: "Complete every Week 3 weekday (Oct 19–23).", msg: "Cryptographer: passkeys, MFA and encryption. Motto: <b>[REDACTED]</b>. Your password shouldn't be a word; it should be a story only you know." },
    { id: "scout", name: "Scout", w: "w4", days: [26, 27, 28, 29, 30], img: "img/badge-scout.webp", how: "Complete every Week 4 weekday (Oct 26–30).", msg: "Field operative for incident reporting and physical security. Motto: <b>If it walks like a data breach and talks like a data breach, you'd better tell someone.</b>" },
    { id: "defender", name: "Cyber Defender", w: "b", days: [31], how: "Beat the October 31 Boss Fight.", msg: "You finished Cyber October. Open October 31 to see your certificate once your score reaches 70%." }
  ],

  days: [
  /* ================= KICKOFF ================= */
  { d: 1, w: "k", kind: "core", title: "Welcome to Cyber October",
    video: { yt: "2BnIUyXbxYo", title: "Cybersecurity Awareness Month 2026 Kickoff", by: "CISA" },
    read: '<p><b>Cybersecurity Awareness Month</b> has run every October for more than 20 years. CISA and the National Cybersecurity Alliance lead it together, and it reminds everyone to take regular, simple actions that cut risk online.</p>' +
      '<p>The <b>2026 theme is “Securing the Next 250.”</b> As the United States marks its 250th anniversary, the campaign stresses acting now: attackers are using AI to find and exploit weak spots faster than ever.</p>' +
      '<p>Everything this month builds on <b>four essential behaviors</b>:</p><ul>' +
      '<li><b>Recognize and report phishing.</b> Verify the sender before clicking links or opening attachments.</li>' +
      '<li><b>Use strong passwords and a password manager.</b> Long (16+ characters), random and unique for every account.</li>' +
      '<li><b>Turn on multifactor authentication (MFA).</b> A physical security key gives the best protection.</li>' +
      '<li><b>Update software.</b> Install updates right away, or turn on automatic updates.</li></ul>' +
      '<div class="callout" style="--c:var(--w0)"><b>How this course works:</b> one lesson every weekday, a tabletop mission every Friday, optional bonus days on weekends, and a Boss Fight on Halloween. Each lesson is worth 100 XP. Reach 70% to pass.</div>',
    poster: { f: "img/poster-cisa-4-essentials.webp", alt: "CISA poster: the four cybersecurity essentials" },
    src: "Adapted from CISA's Cybersecurity Awareness Month 2026 presentations and “Basics: 4 Essentials” poster.",
    docs: [{ f: "docs/sow-4-easy-ways.pdf", t: "4 Easy Ways to Stay Safe Online (CISA)" }],
    games: [{ type: "sort", title: "Sort the Four Essentials", prompt: "Tap a card, then tap the essential it belongs to.",
      bins: [["phish", "Recognize & report phishing"], ["pass", "Strong passwords & manager"], ["mfa", "Turn on MFA"], ["upd", "Update software"]],
      cards: [["A text says your bank account is locked. Tap the link to unlock it.", "phish", "Urgent texts with links are classic phishing."],
        ["Forward a strange email from “the Dean” to your school's reporting address.", "phish", "Reporting is half of this habit."],
        ["You use the same password for Canvas and Instagram.", "pass", "Reused passwords let one breach unlock many accounts."],
        ["Let a password manager generate a 20-character password.", "pass", "Long, random and unique, without memorizing it."],
        ["Approve your login with a code from an authenticator app.", "mfa", "A second factor stops most stolen-password logins."],
        ["Plug in a security key when you sign in to email.", "mfa", "Security keys are the strongest form of MFA."],
        ["Your laptop says a security update is ready. You click Install now.", "upd", "Updates patch the holes attackers use."],
        ["Turn on automatic app updates on your phone.", "upd", "Automatic updates make this habit effortless."]],
      end: "You know the four essentials." }],
    quiz: [
      { q: "What is the 2026 Cybersecurity Awareness Month theme?", o: ["Secure Our World", "Securing the Next 250", "See Yourself in Cyber"], a: 1, why: "“Securing the Next 250” ties cybersecurity to the nation's 250th anniversary." },
      { q: "Why does the 2026 campaign stress acting now?", o: ["AI is helping attackers find and exploit weaknesses faster", "Passwords are being phased out this year", "Phishing has stopped being a major threat"], a: 0, why: "CISA warns that AI is accelerating how fast attackers find weak spots." },
      { q: "Which of these is NOT one of the four essential behaviors?", o: ["Turn on multifactor authentication", "Update software", "Buy a VPN subscription", "Use strong passwords and a password manager"], a: 2, why: "The four are phishing awareness, strong passwords, MFA and updates." }] },

  { d: 2, w: "k", kind: "core", title: "The Four Essentials",
    video: { yt: "fgd-osFId00", title: "Four Easy Ways to Stay Safe Online", by: "CISA" },
    extras: [{ yt: "kWJa_tMg7ZM", title: "We Can Secure Our World", by: "CISA" }],
    read: '<p>Today goes one level deeper on each essential, using CISA\'s own guidance.</p><ul>' +
      '<li><b>Phishing:</b> most successful intrusions start with someone clicking a phishing link or handing over personal information. Watch for alarming language or offers that are too good to be true. Report the phish, then delete it.</li>' +
      '<li><b>Passwords:</b> at least <b>16 characters</b>, <b>random</b> (a random string, or a passphrase of 5–7 unrelated words) and <b>unique</b> for every account. A password manager creates, stores and fills them for you.</li>' +
      '<li><b>MFA:</b> use it on every account that offers it, especially email, banking and social media. From most to least secure: a physical <b>security key</b>, an <b>authenticator app</b>, then codes sent by text or email.</li>' +
      '<li><b>Updates:</b> updates close security bugs. Don\'t click “Remind me later.” Turn on automatic updates and install the rest as soon as you\'re notified.</li></ul>',
    src: "Adapted from CISA's “Key Ways to Stay Secure Online” presentation and Secure Our World tip sheets.",
    docs: [{ f: "docs/sow-phishing.pdf", t: "Phishing tip sheet" }, { f: "docs/sow-passwords.pdf", t: "Passwords tip sheet" }, { f: "docs/sow-mfa.pdf", t: "MFA tip sheet" }, { f: "docs/sow-software-updates.pdf", t: "Software updates tip sheet" }],
    games: [{ type: "bingo", title: "Cyber Bingo", prompt: "Do these for real, then tap each square you've done. Get three in a row (across, down or diagonal) for BINGO. Be honest: this is about building habits.",
      cells: ["Turned on MFA for my email", "Installed a waiting update on my phone", "Checked that my laptop has automatic updates on", "Changed a reused password", "Reported or deleted a spam message", "Told a friend or family member one tip", "Turned on MFA for a social media account", "Looked at a password manager", "Updated my web browser"],
      end: "Keep going: every square you fill makes you harder to hack." }],
    quiz: [
      { q: "CISA's minimum password length is:", o: ["8 characters", "12 characters", "16 characters"], a: 2, why: "CISA recommends at least 16 characters." },
      { q: "Which MFA method does CISA rank as most secure?", o: ["A code sent by text message", "A physical security key", "A code sent by email"], a: 1, why: "Security keys resist phishing and are easy to use." },
      { q: "An update notice pops up during class. The safest habit is to:", o: ["Click “Remind me later” every time", "Install it as soon as you can, or turn on automatic updates", "Ignore it; updates only add features"], a: 1, why: "Updates patch security holes, and attackers won't wait." }] },

  { d: 3, w: "k", kind: "bonus", title: "Puzzle: Cyber Anagrams",
    games: [{ type: "anagram", title: "Cyber Anagrams", prompt: "Unscramble each cybersecurity word. Use a hint if you're stuck.",
      words: [["PHISHING", "Fake messages that try to trick you"], ["PASSWORD", "It should be 16+ characters"], ["UPDATE", "Patches security bugs"], ["MALWARE", "Malicious software"], ["DEEPFAKE", "AI-generated fake video or voice"], ["BACKUP", "A copy that saves you from ransomware"], ["ENCRYPT", "Scramble data so only the key holder can read it"], ["REPORT", "What to do with a suspicious message"]],
      end: "Want more? Try the printable puzzles from Secure Our World below." }],
    read: '<p>Puzzles help vocabulary stick. When you finish, try CISA\'s printable Secure Our World puzzles for a bigger challenge.</p>',
    readTitle: "Bonus resources",
    docs: [{ f: "docs/sow-puzzles.pdf", t: "Secure Our World puzzles (printable)" }] },

  { d: 4, w: "k", kind: "bonus", title: "Explore Stay Safe Online",
    video: { yt: "pT16EGy3FYo", title: "Welcome to Kubikle: a cybersecurity comedy series", by: "National Cybersecurity Alliance (StaySafeOnline.org)" },
    read: '<p>The <b>National Cybersecurity Alliance</b> co-leads Cybersecurity Awareness Month with CISA. Its site, <a href="https://www.staysafeonline.org/" target="_blank" rel="noopener">staysafeonline.org</a>, has hundreds of free articles, videos and toolkits.</p><ul>' +
      '<li><b>Online Safety and Privacy:</b> plain-language guides on passwords, MFA, phishing, updates and privacy settings.</li>' +
      '<li><b>Videos:</b> how-to videos, the Security Awareness series you\'ll see in this course, and comedy series like <i>Kubikle</i> and <i>Mom Don\'t Click That</i>.</li>' +
      '<li><b>Careers and Education:</b> resources if you\'re thinking about a cybersecurity career.</li>' +
      '<li><b>Cyber Glossary:</b> quick definitions for terms you\'ll meet this month.</li></ul>' +
      '<div class="row"><a class="btn ghost" href="https://www.staysafeonline.org/" target="_blank" rel="noopener">Visit StaySafeOnline.org ↗</a></div>',
    readTitle: "Take the tour",
    quiz: [
      { q: "Which two organizations co-lead Cybersecurity Awareness Month?", o: ["CISA and the National Cybersecurity Alliance", "The FBI and the FTC", "NIST and KnowBe4"], a: 0 },
      { q: "Where on StaySafeOnline would you look up the meaning of a term like “smishing”?", o: ["Toolkits", "Cyber Glossary", "The NCA Store"], a: 1 }] },

  /* ================= WEEK 1 · PHISHING & SOCIAL ENGINEERING ================= */
  { d: 5, w: "w1", kind: "core", title: "Anatomy of a Phish",
    poster: { f: "img/oct05-think-before-you-click.webp", alt: "Poster: Think Before You Click. Created by Lily Morningstar." },
    video: { yt: "D_yAYhjNE-0", title: "Security Awareness Episode 4: Phishing and Ransomware", by: "National Cybersecurity Alliance" },
    extras: [{ yt: "sg0kQYvTlnc", title: "How to Avoid Phishing! (We Can Secure Our World)", by: "CISA" }, { kal: "0_pw4dqnp3", title: "You've Been Phished", by: "NIST" }],
    read: '<p>Phishing messages are designed to look like they come from someone you trust. Check these before you click:</p><ul>' +
      '<li><b>Sender:</b> is it an unknown address, or a lookalike or misspelled domain? Does the address match who it claims to be?</li>' +
      '<li><b>Urgency or emotion:</b> does it demand action “immediately,” threaten a penalty, or promise something too good to be true?</li>' +
      '<li><b>The ask:</b> does it want your password, bank details, gift cards or personal information?</li>' +
      '<li><b>Links and attachments:</b> unexpected attachments and shortened or disguised links are red flags. Hover (or long-press) to see where a link really goes.</li>' +
      '<li><b>Polish isn\'t proof:</b> attackers now use AI to write perfect grammar and copy real logos. Poor spelling is a less common clue than it used to be.</li></ul>' +
      '<div class="callout" style="--c:var(--w1)"><b>What to do:</b> don\'t reply, click, or even hit “unsubscribe.” Report it (use your email\'s Report phishing button or your organization\'s process), then delete it. If it might be real, contact the sender using a phone number or website you already know.</div>',
    src: "Adapted from KnowBe4 “Your Role in Internet Security” and the CISA Secure Our World phishing tip sheet.",
    docs: [{ f: "docs/sow-phishing.pdf", t: "Phishing tip sheet (CISA)" }],
    games: [{ type: "choice", skin: "mail", title: "Phish or Legit?", prompt: "Decide whether each email is a phish.", actions: ["🎣 Phish", "✓ Legit"],
      items: [
        { from: '"CSN IT Help Desk" <helpdesk@csn-edu-support.com>', subj: "ACTION REQUIRED: Password expires in 2 hours", body: 'Your network password expires today. To keep your current password, verify now: <code>http://csn-edu-support.com/keep-password</code>', best: 0, why: "Lookalike domain (csn-edu-support.com is not csn.edu), a 2-hour deadline, and a request to “verify” your password. IT departments don't ask for that by email." },
        { from: '"Canvas Notifications" <notifications@instructure.com>', subj: "New announcement: CIT 173 — Week 6 lab posted", body: 'Your instructor posted a new announcement. View it in Canvas: <code>https://csn.instructure.com/courses/…</code>', best: 1, why: "An expected sender for Canvas, no request for credentials or money, and a link to the real Canvas domain. When unsure, open Canvas yourself instead of clicking." },
        { from: '"Financial Aid Office" <finaid.csn.refunds@gmail.com>', subj: "Refund pending — confirm bank details", body: "Your refund of $1,184.00 is on hold. Reply with your bank routing and account number within 24 hours or the refund will be cancelled.", best: 0, why: "A college office using a free Gmail address, money as bait, a 24-hour deadline, and a request for bank details. Call the office using the number on its official website." },
        { from: '"Amazon" <support@amazon-customer-center.com>', subj: "URGENT: Your package [#A29875431] is held", body: 'Your package will be returned to the warehouse within 24 hours. Release it here: <code>http://amazon-customer-center.com/tracking.php</code>', best: 0, why: "Not an amazon.com address, an unencrypted http link, and pressure to act fast. Check orders by opening the Amazon app or site yourself." },
        { from: '"Prof. Rivera" <arivera@csn.edu>', subj: "Re: Lab 4 question", body: "Good question. The subnet mask in step 3 should be /26, not /24. I've updated the lab instructions in Canvas. See you Thursday.", best: 1, why: "A reply to your own question, from an address that matches, with no links, attachments or requests. Nothing here asks you to act." },
        { from: '"DocuSign" <dse@docu-sign-secure.net>', subj: "Scholarship award letter waiting for signature", body: 'You have been selected for the Foundation Scholarship. Review and sign within 48 hours: <code>https://bit.ly/3xSchol26</code>', att: "Award_Letter.html", best: 0, why: "An unexpected “award,” a hyphenated lookalike of DocuSign's domain, a shortened link that hides the destination, and an HTML attachment. Check scholarships through the official CSN portal." }],
      end: "Remember: when in doubt, don't click. Report it and verify another way." }],
    quiz: [
      { q: "Attackers now use AI to write phishing emails. What does that change?", o: ["Phishing emails are easy to spot by their spelling mistakes", "You can't rely on spelling and grammar. Check the sender, the request and the urgency", "AI-written emails are always caught by spam filters"], a: 1, why: "Perfect writing is now cheap, so behavior clues matter more than typos." },
      { q: "Why shouldn't you click “unsubscribe” in a suspicious email?", o: ["The unsubscribe link can itself lead to a phishing site", "It's against email etiquette", "It deletes your account"], a: 0, why: "CISA warns the unsubscribe button can carry a phishing link. Just delete." },
      { q: "You think an email is a phish. What should you do first?", o: ["Reply and ask whether it's real", "Click the link to see where it goes", "Don't click. Report it using your email's report button or your organization's process"], a: 2, why: "Report, then delete. Verify through a channel you already trust." }] },

  { d: 6, w: "w1", kind: "core", title: "Smishing & Vishing",
    poster: { f: "img/oct06-question-the-message.webp", alt: "Poster: Question The Message. Created by Lily Morningstar." },
    video: { yt: "Hc01oZPvByg", title: "Security Awareness Episode 6: Vishing", by: "National Cybersecurity Alliance" },
    kb4: { id: "af44ce18-ea58-47c9-a352-fb1f277ec903", title: "Smishing Frenzy" },
    read: '<p><b>Smishing</b> is phishing by text message (SMS). <b>Vishing</b> is phishing by voice call. Both work because people trust their phones and act fast on short messages.</p><ul>' +
      '<li><b>Common lures:</b> package delivery problems, bank or card alerts, unpaid tolls, prize winnings, “your account is locked,” and fake two-factor codes.</li>' +
      '<li><b>Red flags:</b> unknown numbers, short or odd links, urgency, and requests for codes, payment or personal details.</li>' +
      '<li><b>Never share a one-time code.</b> A real company will not call or text to ask for the code it just sent you.</li>' +
      '<li><b>Caller ID can be faked,</b> and AI can clone a familiar voice. A call that “looks like” your bank may not be.</li>' +
      '<li><b>Verify another way:</b> open the official app, or call the number on the back of your card or on the official website.</li>' +
      '<li><b>Report and delete:</b> forward spam texts to <b>7726</b> (SPAM) and use your phone\'s “Report junk” option.</li></ul>',
    src: "Adapted from the CISA Secure Our World phishing tip sheet and KnowBe4 Week 1 materials.",
    games: [{ type: "choice", skin: "sms", title: "Smishing Text Simulator", prompt: "A text arrives. What do you do?", actions: ["Use it / it's safe", "Verify another way first", "Report junk & delete"],
      items: [
        { who: "+1 (702) 555-0148", msg: "USPS: Your package is on hold due to an incomplete address. Update within 12 hrs: usps-redelivery-help.top/track", best: 2, why: "USPS doesn't text links to fix addresses, and .top is not usps.com. Report it and delete it. Check tracking only at usps.com." },
        { who: "Mom", msg: "Hey, it's me. I lost my phone, this is my new number. Can you send $200 on Zelle? I'll explain later 🙏", best: 1, why: "A “new number” plus an urgent money request is a classic impersonation scam. Call your mom's real number before doing anything." },
        { who: "Microsoft", msg: "Use 482913 as your Microsoft account security code. Don't share this code with anyone.", best: 0, why: "If you just requested this code, it's safe to use it yourself. Never read it to anyone. If you didn't request it, someone may have your password, so change it." },
        { who: "+1 (725) 555-0193", msg: "NV DMV NOTICE: Unpaid toll of $6.85. Pay today to avoid a $50 late fee and license suspension: nv-tollpay.com", best: 2, why: "Unpaid-toll texts are one of the most reported smishing scams. A small amount, a big threatened penalty and an unofficial domain. Report it and delete it." },
        { who: "+1 (888) 555-0122", msg: "Chase Fraud Alert: Did you attempt a $689.00 purchase at BestBuy.com? Reply YES or NO. A specialist will call you to verify.", best: 1, why: "Even if it might be real, don't reply or wait for “a specialist” to call. Open your bank's app or call the number on your card." }],
      end: "Your phone is a target too. Slow down before you tap." }],
    quiz: [
      { q: "A text from your “bank” asks you to reply with the 6-digit code it just sent. What should you do?", o: ["Reply with the code so the bank can verify you", "Never share it. Contact the bank through its official app or the number on your card", "Reply STOP to unsubscribe"], a: 1, why: "Sharing a one-time code hands over your MFA." },
      { q: "What makes vishing calls convincing today?", o: ["Callers always have strong accents", "AI can clone a familiar voice, and caller ID can be spoofed", "Calls only come from overseas numbers"], a: 1 },
      { q: "Where can you forward a spam text in the U.S.?", o: ["7726 (SPAM)", "911", "Your contacts, to warn them"], a: 0 }] },

  { d: 7, w: "w1", kind: "core", title: "Social Engineering Tricks",
    poster: { f: "img/oct07-see-something-say-something.webp", alt: "Poster: See Something Say Something. Created by Lily Morningstar." },
    video: { yt: "FRxrHduwPjY", title: "Security Awareness Episode 5: Removable Media", by: "National Cybersecurity Alliance" },
    read: '<p><b>Social engineering</b> manipulates people instead of hacking machines. Attackers exploit emotions like fear, helpfulness, curiosity and respect for authority. Common techniques:</p><ul>' +
      '<li><b>Pretexting:</b> inventing a believable story (“I\'m from IT, I need to verify your account”) to get information.</li>' +
      '<li><b>Impersonation and authority:</b> posing as a boss, professor, police officer or vendor so you don\'t question the request.</li>' +
      '<li><b>Baiting:</b> leaving infected USB drives or offering free downloads so curiosity does the work.</li>' +
      '<li><b>Quid pro quo:</b> offering a favor or prize in exchange for access or information.</li>' +
      '<li><b>Tailgating (piggybacking):</b> following an authorized person through a locked door.</li></ul>' +
      '<div class="callout" style="--c:var(--w1)"><b>The Ghost\'s rule:</b> trust, but verify… then verify again. Found a USB drive? Don\'t plug it in. Turn it in to IT or campus security.</div>',
    src: "Adapted from KnowBe4 Week 1 materials and the KnowBe4 “The Ghost” Specialist card.",
    games: [{ type: "sort", title: "Name That Tactic", prompt: "Match each attack to the technique it uses.",
      bins: [["pre", "Pretexting"], ["imp", "Impersonation / authority"], ["bait", "Baiting"], ["qpq", "Quid pro quo"], ["tail", "Tailgating"]],
      cards: [["A caller says she's from the registrar and needs your student ID and birth date to “fix your transcript.”", "pre", "A made-up story to justify the request."],
        ["A USB drive labeled “Salary Info 2026” is left in the library.", "bait", "Curiosity is the lure."],
        ["Someone carrying boxes asks you to hold the badge-access door to the server room.", "tail", "Getting in on someone else's access."],
        ["An email from the “Dean” orders you to buy gift cards for an event right away.", "imp", "Authority pressure stops people from questioning."],
        ["A pop-up offers a free gaming gift card if you log in with your school account.", "qpq", "Something “free” in exchange for your credentials."],
        ["A “vendor” calls the help desk claiming to be locked out and asks for a password reset.", "pre", "A believable pretext aimed at the help desk."],
        ["A free movie download turns out to install malware.", "bait", "The free file is the bait."],
        ["A text claiming to be from campus police says to pay a parking fine immediately.", "imp", "Posing as an authority figure."]],
      end: "Naming the trick makes it easier to resist." }],
    quiz: [
      { q: "What do social engineers mainly exploit?", o: ["Software bugs", "Human emotions like fear, helpfulness and trust in authority", "Weak Wi-Fi signals"], a: 1 },
      { q: "You find a USB drive in the parking lot. What should you do?", o: ["Plug it in to find the owner", "Turn it in to IT or campus security without plugging it in", "Format it and keep it"], a: 1, why: "Dropped drives are a classic baiting attack." },
      { q: "Someone without a badge follows you through a secure door. This is called:", o: ["Tailgating", "Pretexting", "Smishing"], a: 0 }] },

  { d: 8, w: "w1", kind: "core", title: "Read the Link",
    poster: { f: "img/oct08-be-cyber-ready.webp", alt: "Poster: Be Cyber Ready. Created by Lily Morningstar." },
    video: { yt: "7Apu1EWZPhQ", title: "Security Awareness Episode 7: Internet Downloads", by: "National Cybersecurity Alliance" },
    read: '<p>Before you click, read the link like an analyst.</p><p class="mono">https://<b>login</b>.<b style="color:var(--ok)">microsoft.com</b>/oauth?id=123</p><ul>' +
      '<li><b>Find the real domain.</b> It\'s the name just before the first single slash, ending in .com, .edu, .gov and so on. Everything to the left is a subdomain the owner controls.</li>' +
      '<li><b>The subdomain trick:</b> <span class="mono">microsoft.com.account-verify.net</span> belongs to <b>account-verify.net</b>, not Microsoft.</li>' +
      '<li><b>Lookalikes:</b> swapped letters (<span class="mono">rn</span> for <span class="mono">m</span>, <span class="mono">0</span> for <span class="mono">o</span>), extra words (<span class="mono">paypal-secure-login.com</span>) or odd endings (<span class="mono">.top</span>, <span class="mono">.zip</span>).</li>' +
      '<li><b>Shortened links and QR codes</b> hide the destination. Preview them first.</li>' +
      '<li><b>HTTPS and the padlock</b> only mean the connection is encrypted. Scam sites use HTTPS too.</li>' +
      '<li><b>Downloads:</b> only install software from the official site or app store. Unexpected attachments, especially .zip, .html, .exe or macro-enabled Office files, are risky.</li></ul>' +
      '<p>When in doubt, don\'t click. Type the address you already know, or search for the official site.</p>',
    src: "Adapted from KnowBe4 Week 1 materials and the CISA Secure Our World phishing tip sheet.",
    games: [{ type: "choice", skin: "card", title: "Spot the Real Link", prompt: "Pick the link that really goes to the organization named.", keep: false,
      items: [
        { who: "Which link goes to Microsoft?", text: "You want to sign in to your Microsoft account.", opts: ["microsoft.com.account-verify.net/login", "login.microsoft.com/oauth", "rnicrosoft.com/login"], best: 1, why: "login.microsoft.com is a subdomain of microsoft.com. The others belong to account-verify.net and rnicrosoft.com (r + n looks like m)." },
        { who: "Which link goes to PayPal?", text: "You got a “payment received” email.", opts: ["paypal-secure-login.com", "paypa1.com/activity", "www.paypal.com/myaccount"], best: 2, why: "Only paypal.com is PayPal. Extra words and a 1 for an l are lookalike tricks." },
        { who: "Which link goes to CSN?", text: "An email asks you to update your student profile.", opts: ["csn.edu.student-update.info", "www.csn.edu/students", "csn-edu.com/portal"], best: 1, why: "csn.edu is the college. The first belongs to student-update.info, the third to csn-edu.com." },
        { who: "Which link goes to Google?", text: "A shared document link arrives.", opts: ["docs.google.com/document/d/1x…", "google.docs-share.app/d/1x…", "goog1e.com/docs"], best: 0, why: "docs.google.com is under google.com. docs-share.app and goog1e.com are someone else's." },
        { who: "Which link goes to the IRS?", text: "A message says you have a tax refund waiting.", opts: ["irs.gov.refund-claim.com", "www.irs.gov/refunds", "irs-refunds.org"], best: 1, why: "Only irs.gov. And the IRS doesn't start contact about refunds by email or text." }],
      end: "Read right to left from the first slash: the real owner is the name just before it." }],
    quiz: [
      { q: "Who owns <span class=\"mono\">bankofamerica.com.secure-alerts.net</span>?", o: ["Bank of America", "secure-alerts.net", "Nobody, it's invalid"], a: 1 },
      { q: "A site shows a padlock and uses HTTPS. That means:", o: ["The site is safe and legitimate", "The connection is encrypted, but the site could still be a scam", "The government verified the site"], a: 1 },
      { q: "Which attachment type is the most suspicious if you weren't expecting it?", o: ["A .zip or .html file", "A .txt note", "A .jpg photo from a friend you were texting"], a: 0 }] },

  { d: 9, w: "w1", kind: "tabletop", title: "Tabletop: Unmasking a Whale", intro: "Mission briefing inside",
    poster: { f: "img/oct09-same-look-higher-risk.webp", alt: "Poster: Same Look Higher Risk. Created by Lily Morningstar." },
    video: { yt: "-89h8FGgypQ", title: "Let's Talk About How Impersonation Scams Work", by: "Federal Trade Commission" },
    readTitle: "Mission briefing",
    read: '<p><b>Whaling</b> (CEO fraud) is phishing aimed at an organization by impersonating a top executive. It exploits authority and urgency, and today it often arrives with perfect grammar and real logos.</p>' +
      '<div class="callout" style="--c:var(--w1)"><b>Scenario:</b> Summit View Logistics is expanding into Europe. CEO <b>Marcus Vance</b> has been in Germany all week to secure a major warehouse lease, and everyone knows the deal is a priority. CFO <b>Elena Smith</b> is on a 10-hour flight and can\'t be reached. <b>Taylor Reese</b>, Accounts Payable Manager, receives this email:</div>' +
      '<div class="mail"><div class="mh"><span>From: <code>Marcus Vance &lt;m.vance@summitview-logistics-internal.com&gt;</code></span><span>To: Taylor Reese</span><span>Subject: <b>URGENT : Berlin Warehouse Deposit</b></span></div><div class="mb">Hi Taylor,<br><br>I am sitting with the brokers in Berlin. We are ready to sign the warehouse lease we discussed at Monday\'s all-hands meeting.<br><br>We have a major problem. Another firm just put an offer on the facility. The broker said if we do not clear the €50,000 security deposit in the next hour, they are giving the lease to the other company.<br><br>Elena Smith is on a flight, and I cannot wait for her approval. The broker is not in our vendor portal yet, and that will take too long.<br><br>I need you to process a direct wire to the account details attached below right now. Keep this between us until Elena lands so people don\'t panic about the deal falling through. Let me know the second the wire is confirmed.<br><br>Best,<br>Marcus</div><div class="att">📎 Wire_Transfer_Details.pdf</div></div>' +
      '<p>Your mission has two parts: annotate the email, then make Taylor\'s decisions.</p>',
    src: "Adapted from the KnowBe4 Tabletop Experience “Unmasking Phishing and Whaling Attacks” (2026).",
    games: [
      { type: "sort", title: "Annotate the Email", prompt: "Sort each detail. False trust indicators make the email feel real. Behavioral warning signs give the scam away.",
        bins: [["trust", "False trust indicator"], ["warn", "Behavioral warning sign"]],
        cards: [["Says he's “sitting with the brokers in Berlin”", "trust", "The location matches what everyone knows about the trip."],
          ["Mentions the lease from Monday's all-hands meeting", "trust", "Real project details are easy to scrape from LinkedIn or company sites."],
          ["Knows CFO Elena Smith is on a flight", "trust", "Insider-sounding details build false confidence."],
          ["“Clear the deposit in the next hour”", "warn", "Extreme urgency."],
          ["“The broker is not in our vendor portal yet”", "warn", "Asks you to bypass standard payment procedures."],
          ["“Keep this between us until Elena lands”", "warn", "Isolation: secrecy from the people who would stop it."],
          ["Sender domain summitview-logistics-internal.com", "warn", "A lookalike domain, not the company's real one."],
          ["Perfect grammar and a professional tone", "trust", "AI makes polished writing free. It proves nothing."]],
        end: "The authentic-looking details are a smokescreen. The behavioral warning signs are the real danger." },
      { type: "choice", skin: "card", title: "Taylor's Decisions", prompt: "Make the call at each step.", keep: true,
        items: [
          { who: "Step 1 · 9:02 AM", text: "The email just arrived. What does Taylor do first?", opts: ["Process the wire. The CEO said it's urgent.", "Reply to the email asking Marcus to confirm.", "Stop. Don't act on the email, and verify through a channel Taylor already trusts."], best: 2, why: "Replying goes straight to the attacker, who will happily “confirm.” Verify out of band." },
          { who: "Step 2 · 9:05 AM", text: "How should Taylor verify?", opts: ["Call the phone number in Marcus's email signature.", "Call Marcus on the number in the company directory, or reach his assistant.", "Ask a coworker if the email looks real."], best: 1, why: "Contact details in a suspicious message may belong to the attacker. Use a known number." },
          { who: "Step 3 · 9:10 AM", text: "Taylor can't reach Marcus. A second email arrives: “Why is this taking so long?? Do it NOW.” What now?", opts: ["Send the wire to avoid getting in trouble.", "Follow the payment policy: no wire without approval through the normal process, and report the emails to security.", "Delete the emails and forget about it."], best: 1, why: "Pressure escalation is part of the script. Policy protects Taylor. Reporting protects everyone else." },
          { who: "Step 4 · 9:15 AM", text: "What should Taylor include in the report?", opts: ["Just a quick message saying “weird email.”", "Forward the emails as attachments (with full headers), and include the time received and what was requested.", "A screenshot of the email body only."], best: 1, why: "Full headers and a timeline help the security team trace and block the attack." }],
        end: "Spotting the warning sign is step one. Following the procedure and reporting it is step two." }] },

  { d: 10, w: "w1", kind: "bonus", title: "Red Flag Hunt: Don't Get Hooked",
    poster: { f: "img/oct10-see-something-say-something-report-it.webp", alt: "Poster: See Something Say Something Report It. Created by Lily Morningstar." },
    games: [{ type: "findrisks", title: "Find the Red Flags", img: "img/oct10-game-dont-get-hooked.webp", alt: "Poster: Don't Get Hooked. Created by Lily Morningstar.",
      prompt: "Study the poster (tap it to zoom). Which of these red flags appear in its fake Amazon email?",
      items: [
        { ic: "📧", label: "Sender is not an amazon.com address", risk: true, why: "support@amazon-customer-center.com is a lookalike." },
        { ic: "⏰", label: "Threat that the package returns in 24 hours", risk: true, why: "Artificial deadlines push you to act without thinking." },
        { ic: "🔗", label: "Link to a non-Amazon http:// site", risk: true, why: "amazon-customer-center.com/tracking.php isn't Amazon, and it isn't even HTTPS." },
        { ic: "🔐", label: "Asks you to “verify your order information”", risk: true, why: "Verification requests are how attackers harvest data." },
        { ic: "🚨", label: "“URGENT: Action Required” subject line", risk: true, why: "Urgency in the subject line is a classic lure." },
        { ic: "🔤", label: "Lots of obvious spelling mistakes", risk: false, why: "This email is mostly well written. Don't count on typos." },
        { ic: "💳", label: "Asks for a gift card payment", risk: false, why: "Not in this one. It goes after your order information instead." },
        { ic: "📎", label: "A .zip file attachment", risk: false, why: "There's no attachment here. The danger is the link." }] }],
    read: '<p>Week 1 in one line: <b>report every phishing attempt</b>. Your quick report protects everyone, because the security team can block the same message for others.</p>',
    readTitle: "Why report?" },

  { d: 11, w: "w1", kind: "bonus", title: "Quishing: QR Code Phishing",
    read: '<p><b>Quishing</b> hides a phishing link inside a QR code. Your camera can\'t tell a real code from a fake one, and phones make it hard to inspect the link.</p><ul>' +
      '<li>Watch for <b>stickers placed over</b> real QR codes on parking meters, posters and flyers.</li>' +
      '<li>Be suspicious of QR codes in <b>emails</b>, especially ones about MFA, passwords, payroll or packages. Real services rarely ask you to scan a code to “re-verify.”</li>' +
      '<li>Before opening, <b>read the link preview</b> your camera shows. If it isn\'t the domain you expect, don\'t open it.</li>' +
      '<li>For payments, <b>type the official website or use the official app</b> instead of scanning.</li></ul>',
    readTitle: "Read",
    games: [{ type: "choice", skin: "card", title: "Scan or Skip?", prompt: "Would you scan this QR code?", actions: ["Scan it", "Skip it / verify first"],
      items: [
        { who: "Parking meter", text: "A QR sticker on a city parking meter says “Pay faster here.” It looks slightly crooked, like it was stuck on top of something.", best: 1, why: "Stickers over real codes are a common parking scam. Use the city's official parking app or the meter itself." },
        { who: "Email", text: "An email from “IT Security” says your MFA expires today. Scan the QR code to re-enroll.", best: 1, why: "QR codes in email bypass link scanners. MFA doesn't “expire” this way. Report it." },
        { who: "Restaurant", text: "A printed menu card on your table has a QR code. The camera preview shows the restaurant's own website.", best: 0, why: "It matches the expected domain and only shows a menu. Still, never enter payment details from a scanned page you didn't expect." },
        { who: "Flyer", text: "A flyer on a campus bulletin board offers “Free textbooks, scan and log in with your CSN account.”", best: 1, why: "Free stuff plus a request to log in is a credential-harvesting pattern." }],
      end: "Treat a QR code like any other link: check where it goes before you open it." }] },

  /* ================= WEEK 2 · AI SAFETY & DEEPFAKES ================= */
  { d: 12, w: "w2", kind: "core", title: "AI Makes Phishing Smarter",
    poster: { f: "img/oct12-ai-powered-phishing.webp", alt: "Poster: Ai Powered Phishing. Created by Lily Morningstar." },
    video: { yt: "BrJVb9lftqU", title: "AI · Kubikle (Part 2, Episode 7)", by: "National Cybersecurity Alliance" },
    read: '<p>AI is changing how scams look and feel:</p><ul>' +
      '<li><b>Personalized attacks:</b> AI can comb your social media and public info to write messages that seem made just for you.</li>' +
      '<li><b>Better writing:</b> fewer mistakes make malicious messages look legitimate.</li>' +
      '<li><b>Voice and video tricks:</b> AI can copy a voice or create a fake video of someone you know.</li>' +
      '<li><b>Adaptive attacks:</b> attackers analyze results in real time, fine-tune their messages, and learn from every attempt.</li></ul>' +
      '<p><b>Your defense:</b> the clues that still work are about behavior, not polish. Pause on urgency, check the sender, verify unexpected requests through a channel you already trust, and keep using the core four: strong passwords, MFA, updates and reporting phishing.</p>',
    src: "Adapted from KnowBe4 “Phishing Gets Smarter: How AI Is Changing Online Scams” and CISA's Using AI tip sheet.",
    games: [{ type: "choice", skin: "card", title: "Still a Reliable Clue?", prompt: "In the age of AI, is this still a reliable sign of phishing?", actions: ["Reliable red flag", "No longer proof"],
      items: [
        { who: "Clue", text: "The message has spelling and grammar mistakes.", best: 1, why: "Typos still happen, but AI-written phishing is often flawless. A clean message proves nothing." },
        { who: "Clue", text: "The sender's address doesn't match the organization's real domain.", best: 0, why: "Still one of the strongest clues." },
        { who: "Clue", text: "It pressures you to act within minutes or hours.", best: 0, why: "Urgency is a behavior attackers rely on, with or without AI." },
        { who: "Clue", text: "It includes the company's official logo.", best: 1, why: "Logos are trivial to copy." },
        { who: "Clue", text: "It mentions personal details like your major or recent trip.", best: 1, why: "AI can scrape those details from public profiles. Personal details don't prove the sender is real." },
        { who: "Clue", text: "It asks you to skip the normal process: a new payment account, gift cards, or “don't tell anyone.”", best: 0, why: "Bypassing procedures is a top behavioral warning sign." },
        { who: "Clue", text: "The caller's voice sounds exactly like your manager.", best: 1, why: "Voice cloning makes a familiar voice unreliable. Verify on a known number." }],
      end: "Judge the request, not the polish." }],
    quiz: [
      { q: "Which clue has become LESS reliable because of AI?", o: ["Urgent pressure to act", "Poor spelling and grammar", "A mismatched sender domain"], a: 1 },
      { q: "How can AI make phishing more personal?", o: ["By analyzing your public social media and online info", "By reading your mind", "By hacking your camera"], a: 0 },
      { q: "What's the best response to an unusual, urgent request, even if it looks perfect?", o: ["Act quickly to be helpful", "Verify through a channel you already trust before acting", "Forward it to friends"], a: 1 }] },

  { d: 13, w: "w2", kind: "core", title: "Deepfakes: Real or Fake?",
    poster: { f: "img/oct13-deepfakes-common-signs.webp", alt: "Poster: Deepfakes Common Signs. Created by Lily Morningstar." },
    video: { yt: "eGAQyO2JCqE", title: "Deepfakes!", by: "KnowBe4" },
    extras: [{ yt: "QEPdo_DvakY", title: "Family Emergency Imposter Scams", by: "Federal Trade Commission" }],
    kb4: { id: null, title: "A Deepfake Social Engineering Attack" },
    read: '<p>A <b>deepfake</b> is AI-generated audio, video or images that make someone appear to say or do something they never did. Criminals use them to steal money or harass people.</p>' +
      '<p><b>Possible tells</b> (not always present): unnatural blinking or facial movement, lips out of sync, odd lighting or edges around the face, robotic tone or strange pauses in audio, and a story that pushes you to act fast.</p>' +
      '<p><b>Detection is getting harder</b>, so don\'t rely on spotting glitches. Rely on process:</p><ul>' +
      '<li><b>Verify requests through a trusted source.</b> Hang up and call back on a number you know.</li>' +
      '<li><b>Use a code word</b> with family or colleagues for “urgent” calls (Gadget\'s advice).</li>' +
      '<li><b>Money, passwords or secrecy</b> in a call or video chat? Slow down and verify.</li></ul>',
    src: "Adapted from the KnowBe4 Week 2 poster “Real or Fake? Spotting Deepfakes” and CISA's Using AI tip sheet.",
    docs: [{ f: "docs/sow-using-ai.pdf", t: "Stay Safe Online When Using AI (CISA)" }],
    games: [{ type: "choice", skin: "card", title: "Verify or Proceed?", prompt: "Could this be a deepfake attack? Decide what to do.", actions: ["Proceed", "Stop and verify"],
      items: [
        { who: "Video call", text: "Your “CFO” joins a video call with two other executives and asks you to wire $25,000 to a new supplier today. The video looks a little stiff.", best: 1, why: "This mirrors real deepfake fraud cases. Verify on a known number and follow the payment process." },
        { who: "Phone call", text: "Your “grandson” calls crying: he's in jail and needs bail money in gift cards. Don't tell his parents.", best: 1, why: "A family-emergency imposter script, now easier with voice cloning. Hang up and call him or his parents directly." },
        { who: "Voicemail", text: "Your manager leaves a voicemail asking you to buy gift cards for a client and text her the codes.", best: 1, why: "Gift cards plus urgency is a scam pattern, voice or not." },
        { who: "Teams message", text: "Your study group partner posts in your shared class channel: “Meeting moved to 4 PM, same room.”", best: 0, why: "Routine, low-risk information through an expected channel. Nothing to verify." },
        { who: "Video clip", text: "A viral clip shows a celebrity telling fans to send crypto to “double it.”", best: 1, why: "Celebrity crypto giveaways are a common deepfake scam. Real people don't double your money." }],
      end: "When money, credentials or secrecy are involved, verify through a trusted source." }],
    quiz: [
      { q: "What is the most reliable defense against deepfake requests?", o: ["Looking closely for visual glitches", "Verifying the request through a trusted channel, like calling back on a known number", "Asking the caller to prove who they are on the same call"], a: 1 },
      { q: "Why agree on a family or team code word?", o: ["To unlock your phone", "To confirm identity during a suspicious “urgent” call", "To speed up group chats"], a: 1 },
      { q: "Which is a common deepfake scam?", o: ["A cloned voice of a relative asking for emergency money", "A software update notice", "A Canvas assignment reminder"], a: 0 }] },

  { d: 14, w: "w2", kind: "core", title: "Using AI Safely",
    poster: { f: "img/oct14-prompt-smart.webp", alt: "Poster: Prompt Smart. Created by Lily Morningstar." },
    read: '<p>AI tools can help you study and work, but what you type can travel further than you think. CISA\'s tips:</p><ul>' +
      '<li><b>Mind your inputs.</b> AI systems may learn from what you enter. If you wouldn\'t post it on social media, don\'t share it with AI. That includes company data and personal details.</li>' +
      '<li><b>Be privacy aware.</b> AI models scrape the public web, so what you post publicly may end up in AI tools.</li>' +
      '<li><b>Know how hackers use AI:</b> fake voices, fake images and convincing scams.</li>' +
      '<li><b>AI is a tool.</b> Keep your own skills sharp, and check AI output for errors. Prompting isn\'t the same as creating.</li></ul>' +
      '<div class="callout" style="--c:var(--w2)"><b>At CSN:</b> follow each instructor\'s AI policy in the syllabus, and never paste other students\' information, grades, or your login details into an AI tool. Even approved tools have rules about sensitive data.</div>',
    src: "Adapted from CISA's Secure Our World “Stay Safe Online When Using AI” tip sheet and the KnowBe4 AI Prompt Challenge.",
    docs: [{ f: "docs/sow-using-ai.pdf", t: "Stay Safe Online When Using AI (CISA)" }],
    games: [{ type: "sort", title: "Prompt or Keep Private?", prompt: "Would you put this into a public AI chatbot?",
      bins: [["ok", "OK to ask AI"], ["no", "Keep it out of AI"]],
      cards: [["“Explain the difference between TCP and UDP with an example.”", "ok", "General knowledge, no private data."],
        ["Your student ID number and date of birth", "no", "Personally identifiable information (PII)."],
        ["“Give me 10 name ideas for our cybersecurity club's CTF night.”", "ok", "Creative brainstorming is a safe use."],
        ["Your Canvas password, so it can “remember it for you”", "no", "Never enter passwords into any AI tool."],
        ["A screenshot of your bank statement to “find savings”", "no", "Financial details and account numbers stay private."],
        ["A list of classmates' names and grades from a group project", "no", "Other people's personal and educational records aren't yours to share."],
        ["“Quiz me on the OSI model layers.”", "ok", "A great study use with no sensitive data."],
        ["Your internship company's confidential client list", "no", "Confidential business data. Follow the employer's policy."]],
      end: "If you wouldn't post it publicly, don't paste it into AI." }],
    quiz: [
      { q: "CISA's rule of thumb for AI inputs is:", o: ["Anything is fine if the tool is popular", "If you wouldn't post it on social media, don't share it with AI", "Only share passwords with paid AI tools"], a: 1 },
      { q: "Why does what you post publicly matter for AI?", o: ["AI models may scrape public data", "It doesn't matter at all", "AI can only read private data"], a: 0 },
      { q: "Where do you find whether AI is allowed in a CSN course?", o: ["Your instructor's syllabus and course policies", "Any AI chatbot", "A classmate's opinion"], a: 0 }] },

  { d: 15, w: "w2", kind: "core", title: "Protecting Intellectual Property",
    poster: { f: "img/oct15-smart-prompts-safer-results.webp", alt: "Poster: Smart Prompts Safer Results. Created by Lily Morningstar." },
    kb4: { id: null, title: "Protecting Intellectual Property" },
    read: '<p><b>Intellectual property (IP)</b> is valuable information an organization or person creates: source code, designs, research data, product plans, trade secrets and creative work. Attackers, including deepfake social engineers, target IP because it\'s worth money.</p><ul>' +
      '<li><b>Know the label.</b> Many organizations classify data as public, internal or confidential. Handle each level by the rules.</li>' +
      '<li><b>Student records are protected.</b> At colleges, grades and other education records are covered by a federal privacy law called FERPA. Don\'t share another student\'s information.</li>' +
      '<li><b>Watch for impersonation.</b> A “colleague” or “executive” asking for files through an unusual channel is a red flag. Verify first.</li>' +
      '<li><b>Use approved tools.</b> Don\'t move work files to personal email, personal cloud drives or unapproved AI tools.</li>' +
      '<li><b>Your own work counts.</b> Protect unreleased capstone code and research until you choose to share it.</li></ul>',
    src: "Adapted from KnowBe4 Week 2 module topics and KnowBe4 “Sensitive Data: Keep it Secret, Keep it Safe.”",
    games: [{ type: "sort", title: "Label the Data", prompt: "How should each item be handled?",
      bins: [["pub", "Public: OK to share"], ["int", "Internal: team only"], ["conf", "Confidential: restricted"]],
      cards: [["CSN's published class schedule", "pub", "It's already public."],
        ["A press release your internship employer posted online", "pub", "Published on purpose."],
        ["Notes from your internship team's weekly meeting", "int", "Shared inside the team, not outside."],
        ["Your club's internal Discord planning channel", "int", "Meant for members only."],
        ["Another student's grades", "conf", "Education records are protected under FERPA."],
        ["Your employer's unreleased product roadmap", "conf", "Trade secrets need the highest protection."],
        ["Customer credit card numbers", "conf", "Highly regulated financial data."],
        ["Source code for a client project at your internship", "conf", "Proprietary IP. Never paste it into public tools."]],
      end: "When unsure about a label, treat it as confidential and ask." }],
    quiz: [
      { q: "Which is an example of intellectual property?", o: ["A company's unreleased source code", "The weather forecast", "A public bus schedule"], a: 0 },
      { q: "Which federal law protects student education records?", o: ["HIPAA", "FERPA", "COPPA"], a: 1 },
      { q: "A “vice president” you've never met messages you on social media asking for project files. You should:", o: ["Send them, he's senior", "Verify his identity through official channels before sharing anything", "Send only half the files"], a: 1 }] },

  { d: 16, w: "w2", kind: "tabletop", title: "Tabletop: The AI Prompt Challenge", intro: "Mission briefing inside",
    poster: { f: "img/oct16-gadget-keep-your-tools-sharp.webp", alt: "Poster: Gadget Keep Your Tools Sharp. Created by Lily Morningstar." },
    readTitle: "Mission briefing",
    read: '<p>Your organization approved an AI tool for all employees. It\'s a <b>private lane</b>: your data isn\'t shared with the public. You still must follow these prompt safety policies:</p><ul>' +
      '<li>Never input <b>personally identifiable information</b> (PII: names, IDs, birth dates) or <b>protected health information</b> (PHI).</li>' +
      '<li>Don\'t use <b>trade secrets or confidential documents</b> in prompts.</li>' +
      '<li>Don\'t input <b>bank details, logins or passwords</b>.</li></ul>' +
      '<p>After the first month, your manager shares a prompt usage report and asks your team to sort the prompts into safe and unsafe. Then you\'ll fix the unsafe ones.</p>',
    src: "Adapted from the KnowBe4 Tabletop Experience “The AI Prompt Challenge” (2026).",
    games: [
      { type: "sort", title: "Sort the Prompt Report", prompt: "Sort each employee prompt using the policy.",
        bins: [["safe", "Safe"], ["unsafe", "Unsafe"]],
        cards: [["Generate 10 catchy headlines for our new logistics tracking service.", "safe", "Creative brainstorming."],
          ["This is my to-do list for the week. Organize the tasks by complexity.", "safe", "Personal organization inside the approved private lane."],
          ["Write a summary of this confidential merger document for the CEO.", "unsafe", "Confidential documents are off-limits by policy, even in approved tools."],
          ["Draft a reply to a customer who is happy with our new Berlin warehouse.", "safe", "General information to improve communication."],
          ["I'm logged in as a guest. Here is my personal bank password. Can you help me remember it?", "unsafe", "Never enter passwords into any AI tool."],
          ["Draft a polite email to a colleague asking for an update on a task due yesterday.", "safe", "Routine writing help."],
          ["Here's a list of our top customers' full names, birthdays and locations. Draft personalized birthday messages.", "unsafe", "That's PII."],
          ["Explain the difference between a Project Manager and a Product Manager in a startup.", "safe", "A high-level question with nothing proprietary."]],
        end: "Approved tools reduce risk, but what you type still matters." },
      { type: "choice", skin: "card", title: "Fix the Unsafe Prompts", prompt: "Pick the safest rewrite.", keep: true,
        items: [
          { who: "Unsafe prompt", text: "“Write a summary of this confidential merger document for the CEO.”", opts: ["Paste only the first half of the document.", "Ask for a general template: “What should an executive summary of a merger proposal include?” and write it yourself.", "Remove the company names and paste the rest."], best: 1, why: "Get the structure from AI and keep the confidential content out. Partial or lightly edited confidential text is still confidential." },
          { who: "Unsafe prompt", text: "“Here's a list of our top customers' names, birthdays and locations. Draft personalized birthday messages.”", opts: ["“Write a warm, short birthday message template for a valued customer, with a placeholder for the name.”", "Paste the list but leave out the locations.", "Paste just one customer at a time."], best: 0, why: "A template with placeholders gets the job done with zero PII." },
          { who: "Unsafe prompt", text: "“Here is my personal bank password. Can you help me remember it?”", opts: ["Ask the AI to hide it.", "Use a password manager instead. It's built to store passwords securely.", "Type the password with spaces so the AI can't read it."], best: 1, why: "Password managers exist for exactly this. AI chatbots don't." }],
        end: "Spotting the unsafe prompt is step one. Rewriting it safely is the skill." }] },

  { d: 17, w: "w2", kind: "bonus", title: "Deepfake Detective",
    poster: { f: "img/oct17-deepfakes-pause-verify-protect.webp", alt: "Poster: Deepfakes Pause Verify Protect. Created by Lily Morningstar." },
    readTitle: "Study the poster",
    read: '<p>Study this poster (tap it to see it full size), then mark it read.</p>',
    video: { yt: "LvXoGSwpP8o", title: "8+ Million Deepfakes Online… Can You Tell What's Real?", by: "KnowBe4" },
    quizTitle: "Detective check",
    quiz: [
      { q: "You can't tell whether a video of your manager is real. The best move is to:", o: ["Study it frame by frame", "Verify the request with your manager through a known channel", "Assume it's real if the voice matches"], a: 1, why: "Process beats pixel-peeping." },
      { q: "Which of these is a possible deepfake tell?", o: ["Lips slightly out of sync with the words", "The video has captions", "The person is wearing glasses"], a: 0 },
      { q: "Why is “I'll just spot the glitches” a weak strategy?", o: ["Deepfakes keep getting more realistic", "Glitches are illegal to look for", "Glitches only appear on phones"], a: 0 }] },

  { d: 18, w: "w2", kind: "bonus", title: "AI Safety Word Search",
    poster: { f: "img/oct18-deepfakes-always-verify.webp", alt: "Poster: Deepfakes Always Verify. Created by Lily Morningstar." },
    readTitle: "Study the poster",
    read: '<p>Study this poster (tap it to see it full size), then mark it read.</p>',
    games: [{ type: "wordsearch", title: "AI Safety Word Search", prompt: "Find all the words. Drag across a word, or tap its first and last letters.", size: 12,
      words: ["DEEPFAKE", "PROMPT", "VERIFY", "PHISHING", "CODEWORD", "PRIVACY", "PASSKEY", "POLICY", "CLONE", "MFA"] }] },

  /* ================= WEEK 3 · DATA SECURITY & PASSWORDS ================= */
  { d: 19, w: "w3", kind: "core", title: "Long, Random, Unique",
    poster: { f: "img/oct19-strong-passwords-dont-reuse-it.webp", alt: "Poster: Strong Passwords Don't Reuse It. Created by Lily Morningstar." },
    video: { yt: "0Wd3JoUHXno", title: "Security Awareness Episode 1: Passwords", by: "National Cybersecurity Alliance" },
    extras: [{ yt: "XXrbut5xRbE", title: "How to Make Strong Passwords! (We Can Secure Our World)", by: "CISA" }, { yt: "KyHrFe2ljXI", title: "Password Security: Sing a Song · Kubikle", by: "National Cybersecurity Alliance" }],
    kb4: { id: null, title: "Strong Passwords, Secure Accounts" },
    read: '<p>Weak passwords are the most common way criminals get into accounts. CISA\'s three rules:</p><ul>' +
      '<li><b>Long:</b> at least 16 characters. Longer is stronger.</li>' +
      '<li><b>Random:</b> a random string of upper- and lowercase letters, numbers and symbols (strongest), or a passphrase of 5–7 unrelated words.</li>' +
      '<li><b>Unique:</b> a different password for every account, so one breach doesn\'t unlock the rest.</li></ul>' +
      '<p><b>What NIST says.</b> NIST\'s digital identity guidelines (SP 800-63-4) shape how organizations set password rules. They favor <b>length over complexity</b>, say systems should check new passwords against lists of known-compromised ones, and say you shouldn\'t be forced to change passwords on a schedule unless there\'s evidence of compromise.</p>' +
      '<div class="callout" style="--c:var(--w3)"><b>Lock n\' Key\'s advice:</b> your password shouldn\'t be a word; it should be a story only you know. Keep personal details (pets, birthdays, teams, hometown) out of it.</div>',
    src: "Adapted from the CISA Secure Our World passwords tip sheet, NIST SP 800-63-4 and the KnowBe4 Week 3 materials.",
    docs: [{ f: "docs/sow-passwords.pdf", t: "Passwords tip sheet (CISA)" }],
    games: [{ type: "password", title: "Password Builder", personal: ["fluffy", "rebels", "henderson", "summerlin", "spring valley"] }],
    quiz: [
      { q: "Which password is strongest?", o: ["Tr0ub4dor&3", "lantern orbit cactus violin tidepool", "Vegas2018!"], a: 1, why: "Five unrelated words beat short “complex” passwords, and Vegas2018! uses personal details." },
      { q: "Why must every password be unique?", o: ["So one breached site doesn't unlock your other accounts", "Because websites require it", "It makes typing faster"], a: 0 },
      { q: "According to NIST guidance, what matters most?", o: ["Changing passwords every 30 days", "Length, and not using known-compromised passwords", "Using at least one symbol"], a: 1 }] },

  { d: 20, w: "w3", kind: "core", title: "Password Managers & Passkeys",
    poster: { f: "img/oct20-password-power.webp", alt: "Poster: Password Power. Created by Lily Morningstar." },
    video: { yt: "yIPl7JYUD8Q", title: "We Got Passwords! · Kubikle (Part 1, Episode 11)", by: "National Cybersecurity Alliance" },
    read: '<p>Nobody can memorize 100 unique 16-character passwords. That\'s what a <b>password manager</b> is for. It:</p><ul>' +
      '<li><b>Generates</b> strong passwords and <b>stores</b> them encrypted.</li>' +
      '<li><b>Fills</b> them in for you and <b>alerts</b> you to reused or weak passwords.</li>' +
      '<li><b>Won\'t fall for a phishing site</b>, because it only autofills on the real domain, even if you\'re fooled.</li></ul>' +
      '<p>You only remember one strong master password (protect it with MFA). CISA suggests comparing options through trusted reviewers like Consumer Reports.</p>' +
      '<p><b>Passkeys</b> replace passwords with a pair of cryptographic keys. The private key stays on your device (unlocked with your face, fingerprint or PIN), and the website only stores the public key. There\'s nothing to type, reuse or phish. Turn on passkeys wherever they\'re offered.</p>',
    src: "Adapted from CISA's “Key Ways to Stay Secure Online” presentation, the Secure Our World passwords tip sheet and the KnowBe4 Lock n' Key card.",
    games: [{ type: "choice", skin: "card", title: "Myth or Fact?", prompt: "Myth or fact?", actions: ["Myth", "Fact"],
      items: [
        { who: "Statement", text: "Putting all my passwords in one password manager is riskier than reusing one good password everywhere.", best: 0, why: "Reuse means one breach opens everything. Managers encrypt each unique password behind a master password plus MFA." },
        { who: "Statement", text: "A password manager can protect me from a phishing site even if I'm fooled.", best: 1, why: "It won't autofill on a fake domain, which is a built-in warning." },
        { who: "Statement", text: "Writing passwords on a sticky note under the keyboard is fine at school.", best: 0, why: "Anyone nearby can find it. Use a manager instead." },
        { who: "Statement", text: "With a passkey, the website never stores a secret that can be stolen and reused.", best: 1, why: "The site stores only a public key. The private key stays on your device." },
        { who: "Statement", text: "My password manager's master password should be my strongest, most unique password, protected by MFA.", best: 1, why: "It guards everything else." },
        { who: "Statement", text: "Browsers and phones can't store passkeys yet.", best: 0, why: "Major phones, browsers and password managers support passkeys today." }],
      end: "Let the tools do the remembering." }],
    quiz: [
      { q: "What do you need to remember when using a password manager?", o: ["Every password", "One strong master password", "Nothing at all"], a: 1 },
      { q: "Why are passkeys resistant to phishing?", o: ["There's no password to type into a fake site, and the key only works on the real site", "They expire every hour", "They're longer passwords"], a: 0 },
      { q: "Where does CISA suggest you research password managers?", o: ["Pop-up ads", "Trusted sources such as Consumer Reports", "Random forums"], a: 1 }] },

  { d: 21, w: "w3", kind: "core", title: "Turn On MFA",
    poster: { f: "img/oct21-strong-passwords-turn-on-mfa.webp", alt: "Poster: Strong Passwords Turn On Mfa. Created by Lily Morningstar." },
    video: { yt: "sQ5oFX8ZMNA", title: "How to Turn on MFA! (We Can Secure Our World)", by: "CISA" },
    extras: [{ kal: "1_qafyxvdp", title: "Protecting Your Small Business: Multi-Factor Authentication", by: "NIST" }],
    read: '<p><b>Multifactor authentication</b> (MFA) adds a second step to your login: something you <b>have</b> (phone, security key) or something you <b>are</b> (fingerprint, face) on top of something you <b>know</b> (password). It makes you much less likely to get hacked.</p>' +
      '<p><b>Turn it on in three steps:</b> go to <b>Settings</b> (or Account / Security), look for <b>two-factor authentication</b> or <b>two-step verification</b>, and <b>confirm</b> the method you want. Start with email, banking and social media.</p>' +
      '<p><b>Choose the strongest method available</b>, from most to least secure:</p><ol>' +
      '<li><b>Security key or passkey</b>: resists phishing.</li><li><b>Authenticator app</b> code or approval.</li><li><b>Text or email code</b>: still far better than nothing.</li></ol>' +
      '<div class="callout" style="--c:var(--w3)"><b>MFA fatigue:</b> attackers who already have your password may spam you with login approvals, hoping you tap “Approve.” If you get a prompt you didn\'t start, deny it, change your password and report it.</div>',
    src: "Adapted from the CISA Secure Our World MFA tip sheet, CISA's Key Ways deck and NIST's Small Business Cybersecurity Corner.",
    docs: [{ f: "docs/sow-mfa.pdf", t: "MFA tip sheet (CISA)" }],
    games: [{ type: "rank", title: "Rank the Login Methods", prompt: "Order these login protections from MOST secure (top) to LEAST secure (bottom).",
      items: ["Password + physical security key (or passkey)", "Password + authenticator app code", "Password + code sent by text message", "Password only, no MFA"],
      why: "Security keys and passkeys resist phishing. App codes beat SMS, which can be intercepted or SIM-swapped. Any MFA beats none." }],
    quiz: [
      { q: "Your phone shows an MFA approval request you didn't start. What do you do?", o: ["Approve it to make it stop", "Deny it, change your password and report it", "Ignore it forever"], a: 1, why: "It means someone likely has your password." },
      { q: "Which accounts should get MFA first?", o: ["Email, banking and social media", "Weather apps", "Games you no longer play"], a: 0 },
      { q: "MFA adds a factor beyond your password, such as:", o: ["Your username", "A fingerprint or a code from your phone", "Your favorite color"], a: 1 }] },

  { d: 22, w: "w3", kind: "core", title: "Keep It Secret, Keep It Safe",
    poster: { f: "img/oct22-sensitive-data-keep-it-secret.webp", alt: "Poster: Sensitive Data Keep It Secret. Created by Lily Morningstar." },
    video: { yt: "hsNRrEnB_aM", title: "Security Awareness Episode 2: Data Handling", by: "National Cybersecurity Alliance" },
    extras: [{ yt: "zCcX6aSXcLI", title: "How to Update Software! (We Can Secure Our World)", by: "CISA" }, { yt: "EgBtKZzM_xI", title: "How to Set Automatic Updates on Windows", by: "National Cybersecurity Alliance" }, { yt: "a4bq1vHKNZI", title: "How to Set Automatic Updates on iPhone", by: "National Cybersecurity Alliance" }],
    read: '<p>Sensitive data in the wrong hands can be disastrous. Habits that keep it safe:</p><ul>' +
      '<li><b>Keep passwords to yourself:</b> don\'t write them down, share them or reuse them.</li>' +
      '<li><b>Handle sensitive information with care:</b> don\'t discuss it where others can hear, don\'t leave it lying around, and <b>lock your screen</b> whenever you step away (Windows + L, or Control + Command + Q on a Mac).</li>' +
      '<li><b>Is this who I think it is?</b> Be skeptical of unusual requests for information. If you aren\'t sure, stop and contact the person through a method you know is legitimate.</li>' +
      '<li><b>Update promptly:</b> updates patch security holes. Turn on automatic updates, and install alerts for your browser and antivirus as soon as you see them. Don\'t click “Remind me later.”</li></ul>',
    src: "Adapted from KnowBe4 “Sensitive Data: Keep it Secret, Keep it Safe” and the CISA Secure Our World software updates tip sheet.",
    docs: [{ f: "docs/sow-software-updates.pdf", t: "Software updates tip sheet (CISA)" }],
    games: [{ type: "findrisks", title: "Spot the Risks in the Lab", prompt: "You walk into a campus computer lab. Flag every security risk.",
      items: [
        { ic: "🗒️", label: "Sticky note with a password on a monitor", risk: true, why: "Anyone walking by can read it." },
        { ic: "💻", label: "Logged-in laptop left unattended", risk: true, why: "Lock your screen every time you step away." },
        { ic: "🖨️", label: "Printed class roster with student IDs left on the printer", risk: true, why: "Personal data left lying around. Pick up printouts right away." },
        { ic: "⏰", label: "Update window: “Remind me later” clicked for 3 weeks", risk: true, why: "Unpatched systems are easy targets." },
        { ic: "🔌", label: "Unknown USB drive plugged into a PC", risk: true, why: "Found drives can carry malware. Turn them in." },
        { ic: "🗣️", label: "Two students reading grades aloud in the hallway", risk: true, why: "Sensitive info shouldn't be discussed where others can hear." },
        { ic: "🔒", label: "Computer showing the lock screen", risk: false, why: "Locked: exactly right." },
        { ic: "🗑️", label: "Shred bin for papers", risk: false, why: "Shredding protects sensitive printouts." },
        { ic: "☕", label: "Coffee mug on the desk", risk: false, why: "Just coffee. (Maybe keep it away from the keyboard.)" },
        { ic: "🪪", label: "Visitor badge clipped on a guest", risk: false, why: "Visible badges help staff spot people who don't belong." }] }],
    quiz: [
      { q: "You step away from your laptop for two minutes. You should:", o: ["Leave it, it's only two minutes", "Lock the screen", "Close the lid only if it's raining"], a: 1 },
      { q: "Someone claiming to be a coworker emails from a personal account asking for a client file. You should:", o: ["Send it, they're a coworker", "Stop and verify through a method you know is legitimate", "Reply with half the file"], a: 1 },
      { q: "Why install updates promptly?", o: ["They patch security weaknesses attackers exploit", "They change your wallpaper", "They're required by law"], a: 0 }] },

  { d: 23, w: "w3", kind: "tabletop", title: "Tabletop: The Password Guessing Game", intro: "Mission briefing inside",
    poster: { f: "img/oct23-passwords-are-not-clues.webp", alt: "Poster: Passwords Are Not Clues. Created by Lily Morningstar." },
    extras: [],
    video: { yt: "o44JF50rsJc", title: "How to Change Privacy and Security Settings on Instagram", by: "National Cybersecurity Alliance" },
    readTitle: "Mission briefing",
    read: '<p>Your team has been hired as <b>ethical hackers</b> to test a fictional department. Five employees are active on social media. Using only their public posts, figure out their passwords before a real attacker does.</p>' +
      '<p>Look for keywords people put in passwords: <b>pet names, childhood streets, important dates, hometowns, hobbies, cars and kids\' names</b>. Then think about how they\'d combine them with numbers and symbols.</p>' +
      '<div class="callout" style="--c:var(--w3)"><b>The core takeaway:</b> if a stranger can guess it, a computer can crack it in seconds. Personal information should never be part of your password.</div>',
    src: "Adapted from the KnowBe4 Tabletop Experience “The Password Guessing Game” (2026). All personas are fictional.",
    games: [
      { type: "choice", skin: "profile", title: "Crack the Personas", prompt: "Read the posts. Which password is this person most likely using?", keep: true,
        items: [
          { name: "Sarah Miller", handle: "@sarah_miller", posts: [["1d", "Can't believe my best friend Bell is already 3 years old today! #PuppyBirthday"], ["2d", "Just bought my dream car! It's a bright blue Mustang. I've wanted one since I graduated in 2018."], ["3d", "Check-in at Red Rock Canyon. So glad to be back in my hometown of Las Vegas!"]],
            opts: ["Bell3!", "Vegas2018!", "BlueMustang"], best: 1, why: "Sarah used her hometown and graduation year. Bell the puppy was a false lead." },
          { name: "Fatima Al-Sayed", handle: "@fatimaa", posts: [["1d", "My cat, Zina, loves sitting on my blueprints while I work."], ["2d", "Spending the weekend stargazing at the Al-Qudra lake."], ["3d", "Beautiful sunset over the Jumeirah coastline tonight."]],
            opts: ["stargazerZin4", "Jumeirah2026", "AlQudraLake!"], best: 0, why: "Her pet's name (Zina) plus her hobby (stargazing). Swapping a for 4 doesn't fool cracking tools." },
          { name: "Elena Rodriguez", handle: "@erodriguez", posts: [["1d", "Happy Birthday to my little princess, Sophia! Can't believe she's turning 7 today."], ["2d", "Finally visiting Paris! It's been my dream destination since I was a kid."], ["3d", "Morning routine: a double espresso and a walk on Maple Street."]],
            opts: ["MapleStreet1", "SophiaParis7", "Espresso!!"], best: 1, why: "Her daughter's name and age plus a travel spot. Looks decent, but family and travel details are public." },
          { name: "Arjun Nair", handle: "@arjun_nair", posts: [["1d", "Watching the IPL finals tonight! Go Bangalore!"], ["2d", "Can't wait to see the Himalayas on my vacation next month!"], ["3d", "My first car was a 2004 blue hatchback. It survived so many trips!"]],
            opts: ["GoBangalore!", "Himalayas2026", "Arjun2004hatchback"], best: 2, why: "His own name plus his first car. Long, but built entirely from public facts." },
          { name: "David Chen", handle: "@david_chen", posts: [["1d", "Cooper loved the hiking trail at Blue Ridge this weekend."], ["2d", "My first car was a 1992 silver sedan. I miss that car."], ["3d", "Watching the Lakers game — hope they pull off a win!"]],
            opts: ["Lakers1992", "Cooper_loves_hiking", "SilverSedan92"], best: 1, why: "His dog's name and their favorite activity. Underscores don't make an obvious sentence safe." }],
        end: "Attackers automate exactly what you just did, only much faster." },
      { type: "sort", title: "Post It or Keep It?", prompt: "Which of these would you avoid posting publicly?",
        bins: [["ok", "Fine to post"], ["no", "Keep it off public profiles"]],
        cards: [["Your pet's name and birthday", "no", "Common in passwords and security questions."],
          ["The street you grew up on", "no", "A classic security question answer."],
          ["“On vacation for two weeks, house is empty!”", "no", "Tells burglars and scammers when you're away."],
          ["Your opinion of a new movie", "ok", "No password or security question value."],
          ["Your mother's maiden name", "no", "A top security question answer."],
          ["A photo of your new student ID card", "no", "Exposes your ID number and photo."],
          ["“Our team won the CTF!” (no personal details)", "ok", "Celebrate. Nothing an attacker can use."],
          ["Your first car's make and year", "no", "Another common security question."]],
        end: "Make profiles private, and keep password clues offline." }] },

  { d: 24, w: "w3", kind: "bonus", title: "Cybersecurity Career Week",
    read: '<p><b>NICE Cybersecurity Career Week</b> runs <b>October 19–24, 2026</b>, led by NIST\'s NICE program. It celebrates the many paths into cybersecurity. This is your week to explore.</p>' +
      '<p>The <b>NICE Framework</b> describes cybersecurity work as <b>work roles</b> grouped into categories such as Oversight & Governance, Design & Development, Implementation & Operation, Protection & Defense, and Investigation. Employers and schools, including CAE-designated colleges like CSN, use it to map skills to jobs.</p>' +
      '<div class="row"><a class="btn ghost" href="https://www.nist.gov/itl/applied-cybersecurity/nice/events/cybersecurity-career-week" target="_blank" rel="noopener">Career Week events ↗</a><a class="btn ghost" href="https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center" target="_blank" rel="noopener">NICE Framework ↗</a><a class="btn ghost" href="https://www.csn.edu/cybercenter" target="_blank" rel="noopener">CSN Cyber Center ↗</a></div>',
    src: "Source: NIST NICE Cybersecurity Career Week and NICE Framework Resource Center.",
    games: [{ type: "sort", title: "Match the Job to the Category", prompt: "Which NICE Framework work role category does each job task belong to?",
      bins: [["pd", "Protection & Defense"], ["in", "Investigation"], ["dd", "Design & Development"], ["og", "Oversight & Governance"]],
      cards: [["Respond to and contain security incidents", "pd", "Incident Response is a Protection & Defense role."],
        ["Find weaknesses through vulnerability assessments", "pd", "Vulnerability Analysis sits in Protection & Defense."],
        ["Recover and analyze evidence from a seized laptop", "in", "Digital Evidence Analysis is an Investigation role."],
        ["Investigate cybercrime cases for law enforcement", "in", "Cybercrime Investigation."],
        ["Write and test secure application code", "dd", "Secure Software Development."],
        ["Design a secure network architecture", "dd", "Cybersecurity Architecture."],
        ["Write security policy and plan training", "og", "Policy and workforce roles live in Oversight & Governance."],
        ["Manage privacy compliance for an organization", "og", "Privacy Compliance."]],
      end: "Which category sounds most like you? Check out the CSN Cyber Center for programs and clubs." }] },

  { d: 25, w: "w3", kind: "bonus", title: "Public Wi-Fi & Backups",
    video: { yt: "RQttayB5ymA", title: "Security Awareness Episode 8: Wi-Fi", by: "National Cybersecurity Alliance" },
    read: '<p><b>Public Wi-Fi:</b> confirm the exact network name with staff (attackers set up lookalike “evil twin” hotspots), avoid banking and sensitive logins on open networks, prefer your phone\'s hotspot or a trusted VPN, and turn off auto-join for networks you don\'t use.</p>' +
      '<p><b>Backups</b> make recovery from ransomware, theft or a dead drive faster and less stressful. A simple rule is <b>3-2-1</b>: keep <b>3</b> copies of important files, on <b>2</b> different kinds of storage, with <b>1</b> copy offsite or in the cloud. CISA\'s 2026 guidance also recommends <b>encrypting</b> your devices and data, so stolen files stay unreadable.</p>',
    poster: { f: "img/poster-cisa-next-step.webp", alt: "CISA 2026 poster: next steps including logging, backups, encryption and incident response plans" },
    src: "Adapted from CISA's Cybersecurity Awareness Month 2026 “next step” poster and National Cybersecurity Alliance guidance.",
    games: [{ type: "choice", skin: "card", title: "Safe on This Network?", prompt: "Safe or risky?", actions: ["Safe enough", "Risky"],
      items: [
        { who: "Coffee shop", text: "Two open networks: “Coffee_Guest” and “Coffee_Guest_FREE.” You pick the one with the stronger signal and log in to your bank.", best: 1, why: "One may be an evil twin, and banking on open Wi-Fi is risky. Ask staff, and use cellular data for banking." },
        { who: "Airport", text: "You use your phone's personal hotspot to submit an assignment in Canvas.", best: 0, why: "Your own hotspot is safer than open public Wi-Fi." },
        { who: "Hotel", text: "You read the news on the hotel's guest Wi-Fi.", best: 0, why: "Low-risk browsing on HTTPS sites is generally fine." },
        { who: "Library", text: "Your only copy of your capstone project lives on a USB drive in your backpack.", best: 1, why: "One copy is no backup. Follow 3-2-1." }],
      end: "Know your network, and keep backups." }] },

  /* ================= WEEK 4 · INCIDENT REPORTING ================= */
  { d: 26, w: "w4", kind: "core", title: "One Report, Shared Protection",
    poster: { f: "img/oct26-report-it-fast.webp", alt: "Poster: Report It Fast. Created by Lily Morningstar." },
    video: { yt: "kOOuGoq7NVQ", title: "Why Report Fraud? (short version)", by: "Federal Trade Commission" },
    extras: [{ yt: "RsBgQ559bYs", title: "How to Report Phishing in Gmail", by: "National Cybersecurity Alliance" }],
    kb4: { id: null, title: "Hack-Proof Habits: Reporting Part 1" },
    read: '<p>Suspicious email? <b>Report immediately</b>, to protect yourself and your organization.</p><ul>' +
      '<li><b>One report protects many.</b> When you report a phish, the security team can find and remove the same message from everyone else\'s inbox.</li>' +
      '<li><b>Fast beats perfect.</b> Report right away, even if you\'re not sure. Small problems become big ones when people wait.</li>' +
      '<li><b>Clicked already? Report anyway.</b> Mistakes happen. The worst outcome is silence. Change your password if you entered it, and tell IT what happened.</li>' +
      '<li><b>Don\'t assume someone else reported it.</b></li></ul>' +
      '<div class="callout" style="--c:var(--w4)"><b>At CSN:</b> use your email\'s Report or Report phishing button, and contact the CSN IT Help Desk for anything you clicked or entered. Outside of school, use your email provider\'s report feature and the agencies you\'ll meet on October 28.</div>',
    src: "Adapted from the KnowBe4 Week 4 poster “One Report, Shared Protection” and the KnowBe4 Scout card.",
    games: [{ type: "choice", skin: "card", title: "What Now?", prompt: "Pick the best response.",
      items: [
        { who: "Oops", text: "You clicked a link in a fake “Microsoft” email and typed your password before you noticed.", opts: ["Close the tab and hope for the best", "Change your password right away, turn on MFA, and report it to IT", "Wait to see if anything weird happens"], best: 1, why: "Speed matters. Change it, lock it down with MFA, and report so IT can check for misuse." },
        { who: "Inbox", text: "A phishing email clearly isn't fooling you. Your friend got the same one.", opts: ["Delete it, since you weren't fooled", "Report it so it can be blocked for everyone", "Reply to the scammer with a joke"], best: 1, why: "Your report protects the people who might be fooled." },
        { who: "Phone", text: "You approved an MFA prompt by accident while half-asleep.", opts: ["Report it and change your password immediately", "It's fine, you'll be more careful", "Turn off MFA so it doesn't happen again"], best: 0, why: "Someone has your password. Change it and report it now." },
        { who: "Group chat", text: "A classmate says they got a weird text claiming to be from CSN Financial Aid.", opts: ["Tell them to ignore it", "Encourage them to report it and verify with Financial Aid directly", "Ask them to forward the link to you to check it"], best: 1, why: "Reporting and verifying through official channels is the habit to spread." }],
      end: "If you see something, say something. Fast." }],
    quiz: [
      { q: "Why report a phish you didn't fall for?", o: ["So the security team can block it for everyone", "It's required to graduate", "Reporting isn't useful in that case"], a: 0 },
      { q: "You realize you entered your password on a fake site. First steps:", o: ["Change the password, enable MFA, and report it", "Delete your account", "Do nothing unless something happens"], a: 0 },
      { q: "The most dangerous reaction to a mistake is:", o: ["Reporting it too quickly", "Staying silent", "Asking IT for help"], a: 1 }] },

  { d: 27, w: "w4", kind: "core", title: "Phishing, Physical, Breaches. Oh My!",
    poster: { f: "img/oct27-phishing-physical-security-data-breaches.webp", alt: "Poster: Phishing Physical Security Data Breaches. Created by Lily Morningstar." },
    video: { yt: "QiaIL-J9Vds", title: "Security Awareness Episode 3: Computer Theft", by: "National Cybersecurity Alliance" },
    kb4: { id: null, title: "Hack-Proof Habits: Reporting Part 2" },
    read: '<p>When you spot a security problem, quick reporting helps protect everyone. Three kinds to watch for:</p><ul>' +
      '<li><b>Phishing:</b> a suspicious email or message. Don\'t click any links. Report it right away using your organization\'s process.</li>' +
      '<li><b>Physical security issues:</b> broken locks, unauthorized visitors, propped-open doors, stolen devices or unattended sensitive documents. Tell your security team immediately.</li>' +
      '<li><b>Possible data breaches:</b> finding private information where it shouldn\'t be, like a shared folder anyone can open or records in a public place. Report it immediately.</li></ul>' +
      '<p>Don\'t assume someone else will report it. Quick reporting stops small problems from becoming big ones.</p>',
    src: "Adapted from KnowBe4 “Phishing, Physical Security, and Data Breaches, Oh My!” (Week 4 learning document).",
    games: [{ type: "sort", title: "What Kind of Incident?", prompt: "Classify each situation, then report it.",
      bins: [["ph", "Phishing"], ["phy", "Physical security"], ["db", "Possible data breach"]],
      cards: [["A text claiming to be from the bookstore asks you to log in to claim a refund.", "ph", "A suspicious message with a link."],
        ["The lab's server room door has been propped open with a trash can all day.", "phy", "Report propped doors and broken locks."],
        ["A shared Google Drive folder with student SSNs is open to “anyone with the link.”", "db", "Private data where it shouldn't be."],
        ["Someone without a badge is walking around the IT office unescorted.", "phy", "An unauthorized visitor."],
        ["A voicemail from “IT” asks you to call back with your password.", "ph", "Vishing is phishing too."],
        ["You find a printout of employee salaries in the break room.", "db", "Sensitive data exposed."],
        ["Your laptop was stolen from your car.", "phy", "Device theft. Report it fast so accounts can be secured."],
        ["An instructor's gradebook export is attached to a public club website.", "db", "Exposed education records."]],
      end: "Phishing, physical or breach: the answer is always report it quickly." }],
    quiz: [
      { q: "You notice a door to a restricted area won't latch. You should:", o: ["Ignore it, someone else will report it", "Report it to security right away", "Post about it on social media"], a: 1 },
      { q: "You find a spreadsheet of student records on a public website. This is:", o: ["A possible data breach. Report it immediately", "Normal", "Phishing"], a: 0 },
      { q: "Why report even small issues?", o: ["Quick reporting stops small problems from becoming big ones", "To get people in trouble", "Small issues never matter"], a: 0 }] },

  { d: 28, w: "w4", kind: "core", title: "Reporting Cybercrime",
    poster: { f: "img/oct28-incident-reporting-quick-guide.webp", alt: "Poster: Incident Reporting Quick Guide. Created by Lily Morningstar." },
    video: { yt: "IoKTR4QR6-w", title: "How to Report Fraud at ReportFraud.ftc.gov", by: "Federal Trade Commission" },
    read: '<p>Where you report depends on what happened:</p><ul>' +
      '<li><b>General cybercrime:</b> FBI Internet Crime Complaint Center at <b>ic3.gov</b>, and CISA at <b>cisa.gov/report</b>.</li>' +
      '<li><b>Hacked account:</b> the platform\'s own support team.</li>' +
      '<li><b>Identity theft:</b> the FTC at <b>identitytheft.gov</b>.</li>' +
      '<li><b>Scams, fraud and credit card fraud:</b> your card company and the FTC at <b>reportfraud.ftc.gov</b>.</li>' +
      '<li><b>Ransomware:</b> CISA, the FBI field office and the U.S. Secret Service.</li>' +
      '<li><b>Business email compromise:</b> your organization\'s IT department and the FBI at ic3.gov.</li>' +
      '<li><b>Tax-related phishing:</b> the IRS at phishing@irs.gov.</li>' +
      '<li><b>Cyberbullying:</b> the platform or your school, and local law enforcement if there are threats.</li></ul>' +
      '<p><b>Keep evidence:</b> copies of emails with full headers, screenshots, social media messages, receipts and log files with date, time and time zone.</p>',
    src: "Adapted from the CISA Secure Our World “Reporting Cybercrime” tip sheet.",
    docs: [{ f: "docs/sow-reporting-cybercrime.pdf", t: "Reporting Cybercrime tip sheet (CISA)" }],
    games: [{ type: "sort", title: "Where Do I Report It?", prompt: "Match each situation to the best place to report it.",
      bins: [["ic3", "FBI IC3 (ic3.gov)"], ["idt", "FTC IdentityTheft.gov"], ["rf", "FTC ReportFraud.ftc.gov"], ["plat", "The platform's support team"], ["cisa", "CISA (cisa.gov/report)"]],
      cards: [["Someone opened a credit card in your name.", "idt", "Identity theft goes to IdentityTheft.gov, which also builds a recovery plan."],
        ["Your Instagram account was hacked and the email changed.", "plat", "Start with the platform's account recovery support."],
        ["You paid for concert tickets on a fake site.", "rf", "Report to your card company and ReportFraud.ftc.gov."],
        ["A spoofed vendor email tricked your employer into wiring money.", "ic3", "Business email compromise goes to IT and the FBI's IC3."],
        ["A city water utility's systems are hit by a cyber incident.", "cisa", "CISA collects incident reports to protect other organizations."],
        ["An online romance scammer took your savings.", "ic3", "Internet-enabled fraud goes to IC3."],
        ["A Discord account impersonating you is messaging your friends.", "plat", "Report impersonation to the platform."]],
      end: "Collect evidence first, then report to the right place." }],
    quiz: [
      { q: "Which site helps you report identity theft and build a recovery plan?", o: ["identitytheft.gov", "ic3.gov", "irs.gov"], a: 0 },
      { q: "Before reporting, you should save:", o: ["Nothing; agencies already have the evidence", "Emails with full headers, screenshots and receipts", "Only your memory of what happened"], a: 1 },
      { q: "Business email compromise should be reported to your IT department and:", o: ["The FBI at ic3.gov", "Your social media followers", "The sender"], a: 0 }] },

  { d: 29, w: "w4", kind: "core", title: "Incident Response Plans",
    video: { kal: "1_2jgqc4oj", title: "NIST Cybersecurity Framework (CSF) 2.0", by: "NIST" },
    extras: [{ yt: "8XuqFwgFYUk", title: "Introduction to Log Management", by: "CISA" }],
    read: '<p>Incidents happen. Organizations that plan ahead recover faster. CISA\'s <b>new actions for 2026</b> (from its Cybersecurity Performance Goals) are:</p><ul>' +
      '<li><b>Have an incident response (IR) plan and use it.</b> Exercise it for common threats like ransomware, include leadership and legal counsel, and review and drill it at least once a year.</li>' +
      '<li><b>Be prepared for system disruptions.</b> Plan how to keep essential work going without key systems or even internet access, for example by switching to paper or radio.</li>' +
      '<li>Also: <b>use logging</b> to spot attackers, <b>back up</b> critical data, and <b>encrypt</b> data and devices.</li></ul>' +
      '<p>The <b>NIST Cybersecurity Framework 2.0</b> organizes all of this into six functions: <b>Govern, Identify, Protect, Detect, Respond and Recover</b>.</p>' +
      '<p><b>IR team roles</b> (from KnowBe4\'s exercise): Incident Commander, IT Security Lead, Communications Lead, Legal Counsel, HR Representative and Department Manager.</p>',
    src: "Adapted from CISA's Cybersecurity Awareness Month 2026 best-practices presentation and NIST CSF 2.0.",
    docs: [{ f: "img/poster-cisa-next-step.webp", t: "CISA 2026 next steps poster" }],
    games: [{ type: "sort", title: "Map It to CSF 2.0", prompt: "Which Cybersecurity Framework 2.0 function does each activity belong to?",
      bins: [["gv", "Govern"], ["id", "Identify"], ["pr", "Protect"], ["de", "Detect"], ["rs", "Respond"], ["rc", "Recover"]],
      cards: [["Set the cybersecurity policy and assign who is responsible", "gv", "Govern sets strategy, roles and policy."],
        ["Assess the security risk of a new software supplier", "gv", "Supply chain risk management is part of Govern in CSF 2.0."],
        ["Keep an inventory of devices, software and data", "id", "You can't protect what you don't know you have."],
        ["Turn on MFA and train staff", "pr", "Safeguards that prevent incidents."],
        ["Monitor logs for unusual logins at 3 AM", "de", "Finding attacks in progress."],
        ["Isolate an infected laptop and notify the IR team", "rs", "Containing and managing an incident."],
        ["Restore systems from clean backups", "rc", "Getting back to normal operations."]],
      end: "Govern sits at the center and guides the other five." }],
    quiz: [
      { q: "How often should an IR plan be reviewed and drilled, at minimum?", o: ["Once a year", "Every 10 years", "Only after an incident"], a: 0, why: "CISA's 2026 goals call for at least an annual review and drill." },
      { q: "Which function was added in NIST CSF 2.0?", o: ["Govern", "Protect", "Detect"], a: 0 },
      { q: "Being “prepared for system disruptions” means:", o: ["Having a way to keep essential work going without key systems", "Never turning computers off", "Buying more servers"], a: 0 }] },

  { d: 30, w: "w4", kind: "tabletop", title: "Tabletop: Ransomware Response", intro: "Mission briefing inside",
    video: { yt: "8ElqWPpFw8I", title: "Defend Against Ransomware Attacks", by: "CISA" },
    extras: [{ kal: "1_5xaxne18", title: "Protecting Your Small Business: Ransomware", by: "NIST" }, { yt: "q7_y-0yD-3E", title: "Ransomware Help Desk · Kubikle", by: "National Cybersecurity Alliance" }],
    kb4: { id: null, title: "Pursuit of Privacy Game" },
    readTitle: "Mission briefing",
    read: '<div class="callout" style="--c:var(--w4)"><b>Scenario:</b> a critical server in your organization is encrypted by ransomware. The attackers demand a large sum of cryptocurrency to decrypt the files. They also claim they stole customer financial data and will publish it in 24 hours. <b>Complication:</b> the backup systems show signs of compromise from two weeks ago.</div>' +
      '<p>Your incident response team:</p><ul>' +
      '<li><b>Incident Commander:</b> leads the response, makes strategic decisions, briefs executives.</li>' +
      '<li><b>IT Security Lead:</b> technical containment, scoping, forensics, outside security vendors.</li>' +
      '<li><b>Communications Lead:</b> internal and external messaging, media, social media monitoring.</li>' +
      '<li><b>Legal Counsel:</b> breach notification laws, evidence preservation, law enforcement coordination.</li>' +
      '<li><b>HR Representative:</b> employee communications, insider issues, staff support.</li>' +
      '<li><b>Department Manager:</b> business impact and continuity for the affected unit.</li></ul>' +
      '<p>Mission part 1: put the first response steps in order. Part 2: route each complication to the right role.</p>',
    src: "Adapted from the KnowBe4 Tabletop Experience “Incident Response” and CISA ransomware guidance.",
    docs: [{ f: "docs/oct30-doc-incident-response-tabletop-packet.pdf", t: "Incident Response Tabletop Packet (by Lily Morningstar)" }, { f: "https://csrc.nist.gov/CSRC/media/Projects/ransomware-protection-and-response/documents/NIST_Ransomware_Tips_and_Tactics_Infographic.pdf", t: "NIST Ransomware Tips & Tactics (online)" }],
    games: [
      { type: "rank", title: "Rapid Response Checklist", prompt: "Put the first six response steps in order, first at the top.",
        items: ["Report the incident immediately (following the escalation policy)", "Mobilize the incident response team", "Isolate affected systems", "Document the incident timeline", "Assess data backup status", "Activate the communication plan for stakeholders"],
        why: "Report and mobilize first, then contain. Legal counsel, regulatory notification, the ransom policy and law enforcement follow your organization's policy." },
      { type: "sort", title: "Who Handles This?", prompt: "Route each complication to the role that leads on it.",
        bins: [["ic", "Incident Commander"], ["it", "IT Security Lead"], ["comm", "Communications Lead"], ["legal", "Legal Counsel"], ["hr", "HR Representative"], ["dm", "Department Manager"]],
        cards: [["A tech blog publishes details of the attack that weren't public yet.", "comm", "Media response belongs to Communications."],
          ["The backups show signs of compromise from two weeks ago.", "it", "Technical scoping and forensics."],
          ["A regulator demands immediate information about the incident.", "legal", "Regulatory and breach-notification obligations."],
          ["Employees are spreading inaccurate rumors on internal chat.", "hr", "Internal employee communication and support."],
          ["Your largest client threatens to cancel and wants an executive briefing.", "ic", "Strategic decisions and executive-level coordination."],
          ["The payroll office can't run payroll while the server is down.", "dm", "Business continuity for the affected unit."],
          ["A law firm representing customers demands details of the breach.", "legal", "Legal Counsel reviews all external legal communication."]],
        end: "Complications always come. Success depends on adapting within the plan." }] },

  /* ================= HALLOWEEN BOSS FIGHT ================= */
  { d: 31, w: "b", kind: "boss", title: "Boss Fight: Cyber Jeopardy", intro: "Final challenge",
    games: [{ type: "jeopardy", title: "Cyber Jeopardy", cats: [
      { name: "Phishing & Social Eng.", qs: [
        { q: "Phishing by text message is called…", o: ["Smishing", "Vishing", "Whaling"], a: 0 },
        { q: "Following someone through a secure door is…", o: ["Baiting", "Tailgating", "Pretexting"], a: 1 },
        { q: "Who really owns <span class='mono'>paypal.com.secure-login.net</span>?", o: ["PayPal", "secure-login.net", "Nobody"], a: 1 },
        { q: "Impersonating a CEO to trick finance staff is called…", o: ["Whaling", "Quishing", "Spoofing Wi-Fi"], a: 0 },
        { q: "Why not click “unsubscribe” in a suspicious email?", o: ["It may be a phishing link", "It's illegal", "It deletes your inbox"], a: 0 }] },
      { name: "AI & Deepfakes", qs: [
        { q: "An AI-generated fake video or voice is a…", o: ["Deepfake", "Firewall", "Patch"], a: 0 },
        { q: "Best defense against a voice-clone “emergency” call:", o: ["Send money fast", "Hang up and call back on a known number", "Ask for a selfie"], a: 1 },
        { q: "CISA's AI rule: if you wouldn't post it on social media…", o: ["…post it anyway", "…don't share it with AI", "…encrypt it first"], a: 1 },
        { q: "Which clue is LESS reliable now because of AI?", o: ["Spelling mistakes", "Mismatched sender domain", "Pressure to bypass procedures"], a: 0 },
        { q: "In KnowBe4's Prompt Challenge, which prompt was UNSAFE?", o: ["Brainstorm headlines", "Summarize a confidential merger document", "Organize my to-do list"], a: 1 }] },
      { name: "Passwords & MFA", qs: [
        { q: "CISA's minimum password length:", o: ["8", "12", "16"], a: 2 },
        { q: "Most secure MFA method:", o: ["SMS code", "Physical security key", "Email code"], a: 1 },
        { q: "A tool that creates, stores and fills unique passwords:", o: ["Password manager", "Browser history", "Spreadsheet"], a: 0 },
        { q: "You get an MFA prompt you didn't start. You…", o: ["Approve it", "Deny it, change your password, report it", "Ignore it"], a: 1 },
        { q: "Why are passkeys phishing-resistant?", o: ["They're longer", "The private key never leaves your device and only works on the real site", "They expire hourly"], a: 1 }] },
      { name: "Data & Devices", qs: [
        { q: "Stepping away from your laptop? First…", o: ["Lock the screen", "Dim the brightness", "Close your email"], a: 0 },
        { q: "Found a USB drive in the parking lot?", o: ["Plug it in", "Turn it in without plugging it in", "Keep it"], a: 1 },
        { q: "The 3-2-1 rule is about…", o: ["Passwords", "Backups", "Firewalls"], a: 1 },
        { q: "The federal law protecting student education records:", o: ["FERPA", "HIPAA", "GDPR"], a: 0 },
        { q: "Which CSF 2.0 function was added in version 2.0?", o: ["Protect", "Govern", "Recover"], a: 1 }] },
      { name: "Report It!", qs: [
        { q: "Report identity theft at…", o: ["identitytheft.gov", "ic3.gov", "nvd.nist.gov"], a: 0 },
        { q: "Forward spam texts to…", o: ["7726", "911", "411"], a: 0 },
        { q: "Business email compromise goes to IT and…", o: ["The FBI's ic3.gov", "The sender", "Your followers"], a: 0 },
        { q: "First step in KnowBe4's ransomware checklist:", o: ["Pay the ransom", "Report the incident immediately", "Post on social media"], a: 1 },
        { q: "How often should an IR plan be drilled, at minimum (CISA 2026)?", o: ["Annually", "Every 5 years", "Never"], a: 0 }] }] }],
    quizTitle: "Final check",
    quizPass: 7,
    quiz: [
      { q: "What is the 2026 Cybersecurity Awareness Month theme?", o: ["Securing the Next 250", "Secure Our World", "Do Your Part. #BeCyberSmart"], a: 0 },
      { q: "Which is the strongest password?", o: ["Summer2026!", "maple rocket lagoon violin harbor", "P@ssw0rd123"], a: 1 },
      { q: "An email from your “Dean” urgently requests gift cards. The best response is:", o: ["Buy them quickly", "Verify with the Dean through a known channel and report the email", "Reply asking if it's real"], a: 1 },
      { q: "Which MFA method resists phishing best?", o: ["A security key or passkey", "A text message code", "Security questions"], a: 0 },
      { q: "You find a shared folder of student SSNs open to anyone with the link. This is:", o: ["A possible data breach to report immediately", "Fine if it's on Google Drive", "Phishing"], a: 0 },
      { q: "What should you never paste into a public AI chatbot?", o: ["A question about the OSI model", "Your password or other people's personal data", "A request for study tips"], a: 1 },
      { q: "A sticker over a parking meter's QR code is an example of:", o: ["Quishing", "Encryption", "Patching"], a: 0 },
      { q: "Why install software updates promptly?", o: ["They patch security weaknesses", "They make the screen brighter", "They're optional decorations"], a: 0 },
      { q: "In the Password Guessing Game, why was “Vegas2018!” weak?", o: ["It's too long", "It's built from Sarah's public posts (hometown + graduation year)", "It has a symbol"], a: 1 },
      { q: "You clicked a phishing link and entered your password. You should:", o: ["Stay quiet", "Change the password, turn on MFA, and report it", "Delete the email and move on"], a: 1 }] }
  ],

  /* ================= RESOURCE LIBRARY ================= */
  library: [
    { group: "Start here", items: [
      { t: "CSN Cyber Center", d: "Your campus home for cybersecurity programs, clubs, competitions and events.", u: "https://www.csn.edu/cybercenter" },
      { t: "KnowBe4 Cybersecurity Awareness Month Kit", d: "Register free for the 2026 kit behind this course: modules, posters, tabletop exercises and learning documents.", u: "https://www.knowbe4.com/resources/kits/cybersecurity-awareness-month", show: "knowbe4.com/resources/kits/cybersecurity-awareness-month" },
      { t: "National Cybersecurity Alliance", d: "Stay Safe Online tips, videos and Cybersecurity Awareness Month resources.", u: "https://www.staysafeonline.org/" },
      { t: "CISA Cyber Hygiene Services", d: "Free vulnerability scanning and web application scanning for eligible organizations.", u: "https://www.cisa.gov/cyber-hygiene-services" },
      { t: "CISA Cybersecurity Awareness Month", d: "The 2026 toolkit, posters, tip sheets and presentations.", u: "https://www.cisa.gov/cybersecurity-awareness-month" },
      { t: "Secure Our World", d: "CISA's four essentials: phishing, passwords, MFA and updates.", u: "https://www.cisa.gov/secure-our-world" },
      { t: "KnowBe4 CAPY", d: "Free bite-sized safety lessons for you and your family. No login needed.", u: "https://www.knowbe4.com/free-cybersecurity-tools/capy", show: "knowbe4.com/free-cybersecurity-tools/capy" }] },
    { group: "Report it", items: [
      { t: "Report an incident to CISA", d: "Share cyber incident information to protect other organizations.", u: "https://www.cisa.gov/report" },
      { t: "FBI Internet Crime Complaint Center", d: "Report internet crime, online fraud and business email compromise.", u: "https://www.ic3.gov/" },
      { t: "FTC ReportFraud", d: "Report scams, fraud and bad business practices.", u: "https://reportfraud.ftc.gov/" },
      { t: "FTC IdentityTheft.gov", d: "Report identity theft and get a personal recovery plan.", u: "https://www.identitytheft.gov/" }] },
    { group: "From NIST", intro: "NIST supports Cybersecurity Awareness Month with standards, career resources and short videos. These are the most useful for CSN cybersecurity students.", items: [
      { t: "NIST Cybersecurity Awareness Month", d: "NIST's hub of resources, events and Cybersecurity Career Week.", u: "https://www.nist.gov/cybersecurity-awareness-month/resources" },
      { t: "Cybersecurity Career Week · Oct 19–24, 2026", d: "NICE's week of events on careers in cybersecurity.", u: "https://www.nist.gov/itl/applied-cybersecurity/nice/events/cybersecurity-career-week", show: "nist.gov/…/nice/events/cybersecurity-career-week" },
      { t: "Free & Low-Cost Online Learning", d: "NICE's list of free and low-cost cybersecurity courses and training.", u: "https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content", show: "nist.gov/…/nice/resources/online-learning-content" },
      { t: "NICE Framework Resource Center", d: "The work roles, tasks and skills that define cybersecurity jobs.", u: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center", show: "nist.gov/…/nice-framework-resource-center" },
      { t: "NIST: Learn About Phishing", d: "How phishing works and why people fall for it.", u: "https://csrc.nist.gov/phishing" },
      { t: "SP 800-63-4 Digital Identity Guidelines", d: "The federal standard behind modern password and MFA rules.", u: "https://csrc.nist.gov/pubs/sp/800/63/4/final" },
      { t: "Cybersecurity Framework (CSF) 2.0", d: "Govern, Identify, Protect, Detect, Respond, Recover.", u: "https://www.nist.gov/cyberframework" },
      { t: "Ransomware Tips & Tactics", d: "One-page NIST infographic on preventing and recovering from ransomware.", u: "https://csrc.nist.gov/CSRC/media/Projects/ransomware-protection-and-response/documents/NIST_Ransomware_Tips_and_Tactics_Infographic.pdf", show: "csrc.nist.gov · PDF" },
      { t: "Small Business Cybersecurity Corner", d: "Plain-language guides on MFA, phishing, ransomware and more.", u: "https://www.nist.gov/itl/smallbusinesscyber" },
      { t: "NIST Privacy Framework", d: "A tool for managing privacy risk.", u: "https://www.nist.gov/privacy-framework" },
      { t: "National Vulnerability Database", d: "Search published vulnerabilities (CVEs) and their severity scores.", u: "https://nvd.nist.gov/" }] },
    { group: "Tip sheets & posters (included in this course)", items: [
      { t: "4 Easy Ways to Stay Safe Online", d: "CISA Secure Our World tip sheet.", u: "docs/sow-4-easy-ways.pdf", show: "PDF" },
      { t: "Phishing tip sheet", d: "CISA Secure Our World.", u: "docs/sow-phishing.pdf", show: "PDF" },
      { t: "Passwords tip sheet", d: "CISA Secure Our World.", u: "docs/sow-passwords.pdf", show: "PDF" },
      { t: "MFA tip sheet", d: "CISA Secure Our World.", u: "docs/sow-mfa.pdf", show: "PDF" },
      { t: "Software updates tip sheet", d: "CISA Secure Our World.", u: "docs/sow-software-updates.pdf", show: "PDF" },
      { t: "Using AI tip sheet", d: "CISA Secure Our World.", u: "docs/sow-using-ai.pdf", show: "PDF" },
      { t: "Reporting Cybercrime tip sheet", d: "CISA Secure Our World.", u: "docs/sow-reporting-cybercrime.pdf", show: "PDF" },] }
  ],

  /* Sources & citations (videos and web links are added automatically from the lessons and library). */
  citations: [
    { group: "KnowBe4 2026 Cybersecurity Awareness Month resource kit (core framework)", items: [
      'KnowBe4. (2026). <i>Cybersecurity Awareness Month resource kit</i> and <i>Cybersecurity Awareness Weekly Training Planner</i>. <a href="https://www.knowbe4.com/resources/kits/cybersecurity-awareness-month" target="_blank" rel="noopener">knowbe4.com/resources/kits/cybersecurity-awareness-month</a>. Source of the four weekly themes.',
      'KnowBe4. (2026). <i>Tabletop Experience: Unmasking Phishing and Whaling Attacks</i> [Exercise guide]. Adapted for October 9.',
      'KnowBe4. (2026). <i>Tabletop Experience: The AI Prompt Challenge</i> [Exercise guide]. Adapted for October 16.',
      'KnowBe4. (2026). <i>Tabletop Experience: The Password Guessing Game</i> [Exercise guide]. Fictional personas adapted for October 23.',
      'KnowBe4. (2025). <i>Tabletop Experience: Incident Response</i> [Exercise guide]. Adapted for October 30.',
      'KnowBe4. (2022). <i>Cybersecurity Skeptic No More!</i> (“Your Role in Internet Security”) [Learning document].',
      'KnowBe4. (2025). <i>Phishing Gets Smarter: How AI Is Changing Online Scams</i> [Learning document].',
      'KnowBe4. (2024). <i>Sensitive Data: Keep it Secret, Keep it Safe</i> [Learning document].',
      'KnowBe4. (2025). <i>Phishing, Physical Security, and Data Breaches, Oh My!</i> [Learning document].',
      'Posters and badge artwork on this website were created by Lily Morningstar. KnowBe4\'s 2026 posters and Specialist character cards are not published on this website.',
      'KnowBe4. (2026). <i>Smishing Frenzy</i> [Interactive training module, free kit access]. <a href="https://training.knowbe4.com/modstore/view/af44ce18-ea58-47c9-a352-fb1f277ec903/en-us" target="_blank" rel="noopener">training.knowbe4.com</a>.'] },
    { group: "Cybersecurity and Infrastructure Security Agency (CISA)", items: [
      'CISA. (2026). <i>Cybersecurity Best Practices</i> [Cybersecurity Awareness Month 2026 presentation]. Source of the 2026 theme “Securing the Next 250” and the new 2026 Cybersecurity Performance Goal actions.',
      'CISA. (2026). <i>Key Ways to Stay Secure Online</i> [Cybersecurity Awareness Month 2026 presentation].',
      'CISA. (2026). <i>Basics: 4 Essentials</i> and <i>Next Step</i> [Cybersecurity Awareness Month posters]. <a href="https://www.cisa.gov/cybersecurity-awareness-month" target="_blank" rel="noopener">cisa.gov/cybersecurity-awareness-month</a>.',
      'CISA. (2023). <i>Secure Our World</i> tip sheets: <i>4 Easy Ways to Stay Safe Online</i>, <i>Phishing</i>, <i>Passwords</i>, <i>Multifactor Authentication</i>, <i>Software Updates</i>. <a href="https://www.cisa.gov/secure-our-world" target="_blank" rel="noopener">cisa.gov/secure-our-world</a>.',
      'CISA. (n.d.). <i>Secure Our World</i>: <i>Stay Safe Online When Using AI</i>, <i>Reporting Cybercrime</i> and <i>Cybersecurity Awareness Month Puzzles</i> [Tip sheets].',
      'CISA. (n.d.). <i>Cyber Hygiene Services</i>. <a href="https://www.cisa.gov/cyber-hygiene-services" target="_blank" rel="noopener">cisa.gov/cyber-hygiene-services</a>.'] },
    { group: "National Institute of Standards and Technology (NIST)", items: [
      'NIST. (2025). <i>Digital Identity Guidelines</i> (SP 800-63-4). <a href="https://csrc.nist.gov/pubs/sp/800/63/4/final" target="_blank" rel="noopener">csrc.nist.gov/pubs/sp/800/63/4/final</a>.',
      'NIST. (2024). <i>The NIST Cybersecurity Framework (CSF) 2.0</i>. <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener">nist.gov/cyberframework</a>.',
      'NIST NICE. (n.d.). <i>NICE Framework Resource Center</i> and <i>Cybersecurity Career Week</i> (October 19–24, 2026). <a href="https://www.nist.gov/itl/applied-cybersecurity/nice" target="_blank" rel="noopener">nist.gov/itl/applied-cybersecurity/nice</a>.',
      'NIST. (n.d.). <i>Cybersecurity Awareness Month resources</i>. <a href="https://www.nist.gov/cybersecurity-awareness-month/resources" target="_blank" rel="noopener">nist.gov/cybersecurity-awareness-month/resources</a>.'] },
    { group: "Other organizations", items: [
      'National Cybersecurity Alliance. (n.d.). <i>Stay Safe Online</i> [Website and video library]. <a href="https://www.staysafeonline.org/" target="_blank" rel="noopener">staysafeonline.org</a>.',
      'Federal Trade Commission. (n.d.). <i>ReportFraud.ftc.gov</i> and <i>IdentityTheft.gov</i>.',
      'Federal Bureau of Investigation. (n.d.). <i>Internet Crime Complaint Center (IC3)</i>. <a href="https://www.ic3.gov/" target="_blank" rel="noopener">ic3.gov</a>.'] },
    { group: "Logos", lmsOnly: true, items: [
      'College of Southern Nevada logo: used with approval from CSN Marketing (2026). Trademark of the College of Southern Nevada.',
      'NSA / National Centers of Academic Excellence in Cybersecurity (CAE-C) community seal: identifies CSN\'s CAE designation. Trademark of its owner.'] }
  ],
  citationNote: 'Readings, games and quizzes are original material written by the author, adapted from and paraphrasing the sources below. Fictional scenarios, emails and personas are for training only. Videos are embedded from their publishers\' official channels and remain their property.'
};
