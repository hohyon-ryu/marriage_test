const quizData = {
  testName: "Christian Love and Values in Relationships Quiz",
  questions: [
    {
      id: 1,
      question:
        "Your spouse makes a mistake that costs you financially. How do you respond with Christian love?",
      options: [
        {
          id: "A",
          text: "Forgive immediately and assure your spouse of your unconditional love, working together to find a solution.",
          explanation:
            "This response embodies Christ-like forgiveness and problem-solving. 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you' (Ephesians 4:32).",
          score: 4,
        },
        {
          id: "B",
          text: "Express your frustration but work together to find a solution.",
          explanation:
            "This balances honesty with problem-solving. 'Speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ' (Ephesians 4:15).",
          score: 3,
        },
        {
          id: "C",
          text: "Take time to process your emotions before discussing the issue.",
          explanation:
            "While reflection is valuable, delayed response might cause tension. 'Do not let the sun go down while you are still angry' (Ephesians 4:26).",
          score: 2,
        },
        {
          id: "D",
          text: "Blame your spouse for the financial loss and demand they fix it alone.",
          explanation:
            "This response lacks love and grace. 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs' (1 Corinthians 13:4-5).",
          score: 1,
        },
      ],
    },
    {
      id: 2,
      question:
        "Your spouse is struggling with a personal habit that you find frustrating. How do you demonstrate unconditional love?",
      options: [
        {
          id: "A",
          text: "Patiently support your spouse without judgment, offering encouragement and help while trusting in God's timing for change.",
          explanation:
            "This shows patient, unconditional love and support. 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud' (1 Corinthians 13:4).",
          score: 4,
        },
        {
          id: "B",
          text: "Encourage your spouse and offer to help them overcome the habit.",
          explanation:
            "This demonstrates supportive love. 'Therefore encourage one another and build each other up' (1 Thessalonians 5:11).",
          score: 3,
        },
        {
          id: "C",
          text: "Pray for your spouse's transformation without mentioning the issue to them.",
          explanation:
            "While prayer is powerful, open communication is also important. 'Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ' (Ephesians 4:15).",
          score: 2,
        },
        {
          id: "D",
          text: "Constantly criticize your spouse for their habit and threaten to leave if they don't change.",
          explanation:
            "This approach lacks love and patience. 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs' (1 Corinthians 13:4-5).",
          score: 1,
        },
      ],
    },
    {
      id: 3,
      question:
        "Your spouse expresses doubts about their faith. How do you respond with Christian love?",
      options: [
        {
          id: "A",
          text: "Listen without judgment, assure them of your unconditional love and support, and offer to explore their questions together through prayer and study.",
          explanation:
            "This embodies unconditional love, support, and spiritual partnership. 'Above all, love each other deeply, because love covers over a multitude of sins' (1 Peter 4:8).",
          score: 4,
        },
        {
          id: "B",
          text: "Share your own experiences with doubt and how you overcame them.",
          explanation:
            "This approach uses personal testimony to encourage. 'Therefore encourage one another and build each other up' (1 Thessalonians 5:11).",
          score: 3,
        },
        {
          id: "C",
          text: "Suggest studying scripture together to address their doubts.",
          explanation:
            "While scripture study is valuable, it should be coupled with emotional support. 'Carry each other's burdens, and in this way you will fulfill the law of Christ' (Galatians 6:2).",
          score: 2,
        },
        {
          id: "D",
          text: "Criticize their lack of faith and warn them about the consequences of doubting.",
          explanation:
            "This response lacks empathy and understanding. 'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently' (Galatians 6:1).",
          score: 1,
        },
      ],
    },
    {
      id: 4,
      question:
        "Your spouse wants to make a career change that might impact your family's financial stability. How do you approach this with Christian love?",
      options: [
        {
          id: "A",
          text: "Support their decision, express your concerns lovingly, and work together on a plan, trusting in God's provision.",
          explanation:
            "This balances support, honest communication, and faith. 'And my God will meet all your needs according to the riches of his glory in Christ Jesus' (Philippians 4:19).",
          score: 4,
        },
        {
          id: "B",
          text: "Express your concerns lovingly while affirming your support for their happiness.",
          explanation:
            "This balances honesty with supportive love. 'Love does not delight in evil but rejoices with the truth' (1 Corinthians 13:6).",
          score: 3,
        },
        {
          id: "C",
          text: "Suggest praying together for guidance before making a decision.",
          explanation:
            "While prayer is important, it should be coupled with practical discussion. 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight' (Proverbs 3:5-6).",
          score: 2,
        },
        {
          id: "D",
          text: "Forbid them from making the change, prioritizing financial security over their calling.",
          explanation:
            "This response lacks trust in God and respect for your spouse. 'For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs' (1 Timothy 6:10).",
          score: 1,
        },
      ],
    },
    {
      id: 5,
      question:
        "You and your spouse have different views on how to spend time together. How do you address this with Christian love?",
      options: [
        {
          id: "A",
          text: "Seek a compromise that incorporates both of your interests, prioritizing quality time and mutual enjoyment.",
          explanation:
            "This approach values unity, mutual consideration, and selfless love. 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves' (Philippians 2:3).",
          score: 4,
        },
        {
          id: "B",
          text: "Take turns choosing activities, honoring each other's preferences.",
          explanation:
            "This demonstrates mutual respect and love. 'Be devoted to one another in love. Honor one another above yourselves' (Romans 12:10).",
          score: 3,
        },
        {
          id: "C",
          text: "Focus on the quality of time spent together rather than the specific activity.",
          explanation:
            "While this prioritizes relationship, it may not fully address the issue. 'How good and pleasant it is when God's people live together in unity!' (Psalm 133:1).",
          score: 2,
        },
        {
          id: "D",
          text: "Insist on always doing what you want, disregarding your spouse's preferences.",
          explanation:
            "This attitude is selfish and unloving. 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves' (Philippians 2:3).",
          score: 1,
        },
      ],
    },
    {
      id: 6,
      question:
        "Your spouse has been neglecting their responsibilities at home. How do you address this with Christian love?",
      options: [
        {
          id: "A",
          text: "Have a gentle conversation about shared responsibilities, offering support and working together to find solutions.",
          explanation:
            "This balances honesty with gentleness and teamwork. 'Let your conversation be always full of grace, seasoned with salt' (Colossians 4:6).",
          score: 4,
        },
        {
          id: "B",
          text: "Express appreciation for what they do and lovingly encourage more involvement.",
          explanation:
            "This uses encouragement to inspire change. 'Therefore encourage one another and build each other up' (1 Thessalonians 5:11).",
          score: 3,
        },
        {
          id: "C",
          text: "Pray for your spouse and trust God to convict them about their responsibilities.",
          explanation:
            "While prayer is important, open communication is also necessary. 'If your brother or sister sins, go and point out their fault, just between the two of you' (Matthew 18:15).",
          score: 2,
        },
        {
          id: "D",
          text: "Criticize your spouse harshly and refuse to do any housework until they start pulling their weight.",
          explanation:
            "This response lacks love and grace. 'A gentle answer turns away wrath, but a harsh word stirs up anger' (Proverbs 15:1).",
          score: 1,
        },
      ],
    },
    {
      id: 7,
      question:
        "Your spouse has different views on raising children. How do you navigate this with Christian love?",
      options: [
        {
          id: "A",
          text: "Pray together for wisdom, study biblical principles of parenting, and work to find a unified approach that respects both perspectives.",
          explanation:
            "This seeks God's guidance and values unity. 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you' (James 1:5).",
          score: 4,
        },
        {
          id: "B",
          text: "Respect each other's approaches while maintaining consistency on core values.",
          explanation:
            "This balances unity with individual perspectives. 'Make every effort to keep the unity of the Spirit through the bond of peace' (Ephesians 4:3).",
          score: 3,
        },
        {
          id: "C",
          text: "Seek guidance from a Christian family counselor or pastor.",
          explanation:
            "While seeking counsel is wise, it should not replace direct communication and prayer together. 'Plans fail for lack of counsel, but with many advisers they succeed' (Proverbs 15:22).",
          score: 2,
        },
        {
          id: "D",
          text: "Insist on your way of parenting, dismissing your spouse's input entirely.",
          explanation:
            "This approach lacks humility and respect. 'Wives, submit yourselves to your own husbands as you do to the Lord. Husbands, love your wives, just as Christ loved the church and gave himself up for her' (Ephesians 5:22,25).",
          score: 1,
        },
      ],
    },
    {
      id: 8,
      question:
        "Your spouse is going through a period of emotional distance. How do you respond with Christian love?",
      options: [
        {
          id: "A",
          text: "Give them space while consistently affirming your love, pray for them, and gently offer support when they're ready to talk.",
          explanation:
            "This shows patient, unconditional love and spiritual support. 'Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres' (1 Corinthians 13:4,7).",
          score: 4,
        },
        {
          id: "B",
          text: "Initiate conversations about their feelings and needs.",
          explanation:
            "This demonstrates caring through communication. 'Everyone should be quick to listen, slow to speak and slow to become angry' (James 1:19).",
          score: 3,
        },
        {
          id: "C",
          text: "Increase your efforts to serve and care for them practically.",
          explanation:
            "While practical care is valuable, emotional connection is also important. 'Dear children, let us not love with words or speech but with actions and in truth' (1 John 3:18).",
          score: 2,
        },
        {
          id: "D",
          text: "Become emotionally distant yourself to teach them a lesson.",
          explanation:
            "This response lacks love and maturity. 'Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing' (1 Peter 3:9).",
          score: 1,
        },
      ],
    },
    {
      id: 9,
      question:
        "You discover your spouse has been dishonest about a significant matter. How do you respond with Christian love?",
      options: [
        {
          id: "A",
          text: "Express your hurt, seek to understand their reasons, offer forgiveness, and work together to rebuild trust.",
          explanation:
            "This balances honesty, understanding, and forgiveness. 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you' (Ephesians 4:32).",
          score: 4,
        },
        {
          id: "B",
          text: "Seek to understand the reasons behind their dishonesty without condoning it.",
          explanation:
            "This balances grace with truth. 'Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ' (Ephesians 4:15).",
          score: 3,
        },
        {
          id: "C",
          text: "Take time to process your emotions, praying for guidance before responding.",
          explanation:
            "While reflection is valuable, prompt addressing of the issue is important. 'In your anger do not sin: Do not let the sun go down while you are still angry' (Ephesians 4:26).",
          score: 2,
        },
        {
          id: "D",
          text: "Threaten to end the relationship and tell others about their dishonesty.",
          explanation:
            "This response lacks forgiveness and discretion. 'Whoever would foster love covers over an offense, but whoever repeats the matter separates close friends' (Proverbs 17:9).",
          score: 1,
        },
      ],
    },
    {
      id: 10,
      question:
        "Your spouse is struggling with self-esteem issues. How do you show Christian love in this situation?",
      options: [
        {
          id: "A",
          text: "Consistently affirm their worth in God's eyes and yours, encourage their strengths, and support them in seeking professional help if needed.",
          explanation:
            "This approach combines spiritual affirmation, practical support, and professional help. 'So God created mankind in his own image, in the image of God he created them' (Genesis 1:27). 'Carry each other's burdens, and in this way you will fulfill the law of Christ' (Galatians 6:2).",
          score: 4,
        },
        {
          id: "B",
          text: "Encourage them to seek professional Christian counseling.",
          explanation:
            "This values professional and spiritual support. 'Where there is no guidance, a people falls, but in an abundance of counselors there is safety' (Proverbs 11:14).",
          score: 3,
        },
        {
          id: "C",
          text: "Pray with them, asking God to reveal His love and their true worth.",
          explanation:
            "While prayer is powerful, it should be combined with practical support. 'Dear children, let us not love with words or speech but with actions and in truth' (1 John 3:18).",
          score: 2,
        },
        {
          id: "D",
          text: "Tell them to 'get over it' and stop being so sensitive.",
          explanation:
            "This response lacks empathy and love. 'Be completely humble and gentle; be patient, bearing with one another in love' (Ephesians 4:2).",
          score: 1,
        },
      ],
    },
    {
      id: 11,
      question:
        "Your spouse is feeling called to a ministry or service opportunity that would require significant sacrifice from your family. How do you respond with Christian love?",
      options: [
        {
          id: "A",
          text: "Prayerfully consider the opportunity together, discussing potential impacts and ways to support each other, trusting in God's guidance and provision.",
          explanation:
            "This approach balances spiritual discernment, open communication, and faith. 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future' (Jeremiah 29:11).",
          score: 4,
        },
        {
          id: "B",
          text: "Express your concerns lovingly, but commit to supporting their decision.",
          explanation:
            "This balances honesty with supportive love. 'Carry each other's burdens, and in this way you will fulfill the law of Christ' (Galatians 6:2).",
          score: 3,
        },
        {
          id: "C",
          text: "Suggest a period of prayer and fasting together before making a decision.",
          explanation:
            "While spiritual preparation is valuable, it should be coupled with practical discussion. 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight' (Proverbs 3:5-6).",
          score: 2,
        },
        {
          id: "D",
          text: "Refuse to consider the opportunity, citing family obligations as more important than ministry.",
          explanation:
            "This response lacks faith and may hinder God's calling. 'Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me' (Matthew 10:37).",
          score: 1,
        },
      ],
    },
    {
      id: 12,
      question:
        "You and your spouse have different love languages. How do you use this knowledge to express Christian love more effectively?",
      options: [
        {
          id: "A",
          text: "Learn and practice expressing love in your spouse's preferred way, while also teaching them about your love language for mutual growth and understanding.",
          explanation:
            "This demonstrates selfless love and fosters mutual understanding. 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others' (Philippians 2:3-4).",
          score: 4,
        },
        {
          id: "B",
          text: "Prioritize expressing love in your spouse's preferred way, even if it's not natural for you.",
          explanation:
            "This demonstrates selfless love. 'Husbands, love your wives, just as Christ loved the church and gave himself up for her' (Ephesians 5:25).",
          score: 3,
        },
        {
          id: "C",
          text: "Focus on expressing love through service, regardless of love languages.",
          explanation:
            "While service is important, it may not fully meet your spouse's emotional needs. 'Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms' (1 Peter 4:10).",
          score: 2,
        },
        {
          id: "D",
          text: "Insist that your spouse adapt to your love language, as it's the only way you know how to express love.",
          explanation:
            "This approach lacks consideration and willingness to grow. 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking' (1 Corinthians 13:4-5).",
          score: 1,
        },
      ],
    },
  ],
};
