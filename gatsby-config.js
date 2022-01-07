module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
    designPerson: {
      title: "Design for Everyone",
      subheader: "In Just a minute",
      personDetails: [
        {
          img: "https://i.ibb.co/BGCwbxX/marketer.png",
          title: "For Marketers",
          quesText: "is Creative velocity a bottle-nec  for A/B Testing?",
          description: "Generate multiple designs in a minute",
        },
        {
          img: "https://i.ibb.co/qW5Lt8j/business-owner.png",
          title: "For Content Writers",
          quesText: "Do you have limited access to quality designs?",
          description: "Get quality designs in 1/100th of the time and cost.",
        },
        {
          img: "https://i.ibb.co/zGk4701/content-writer.png",
          title: "For Business Owners",
          quesText: "Are you stuck with templates?",
          description:
            "Instantly convert your text content into visual designs.",
        },
        {
          img: "https://i.ibb.co/Q9z8B1Q/designer.png",
          title: "For Designers",
          quesText: "Are you looking to overcome creative block?",
          description:
            "Never run out of ideas. Generate designs and add fuel to your creative fires.",
        },
      ],
    },
    designCompanion: {
      title: "Sivi your AI Design Companion",
      subheader:
        "Sivi gathers input like a human, curates relevant assets, and generates designs adhering to visual design principles.",
      mascotIcon: "https://i.ibb.co/C24wzvT/sivi-mascot.png",
      vectorTick: "https://i.ibb.co/RSszKv0/Vector.png",
      column1: [
        "Original, template-free designs",
        "High conversion rates",
        "Faster turn-around time",
      ],
      column2: [
        "No co-ordination hassle",
        "Multiple Design Options",
        "At a fraction of cost",
      ],
    },
    oldWayNewWay: {
      left: {
        title: "Old Way",
        subheader: "Stuck with templates and design editing tools?",
        items: [
          {
            img: "https://i.ibb.co/NWLv6Tv/Group-51.png",
            text: "Trying to find the right template; just like looking for a needle in a haystack.",
          },
          {
            img: "https://i.ibb.co/mJ3DLB3/time-1.png",
            text: "Forcefully adapting the content for the chosen template.",
          },
          {
            img: "https://i.ibb.co/jG6kJKQ/Group-46.png",
            text: "Wasting a lot of time in editing the template to match your brand style.",
          },
        ],
      },
      right: {
        title: "The All New Sivi Way",
        subheader: "Generate Designs rather than editing templates",
        img: "https://i.ibb.co/3mHkJJz/image-8.png",
        items: [
          "Generate Designs",
          "For Your  Content",
          "In your brand style",
          "Within a minute",
        ],
        tickImg: "https://i.ibb.co/RSszKv0/Vector.png",
      },
    },
    gradientContainers: {
      gradient1: {
        text1:
          "Are you a business owner, marketer, content writer or a designer? Join the new revolution in",
        text2:
          "design where humans and AI interact to produce stunning creatives",
      },
      gradient2: {
        text1: "In a world full of distraction, grabbing attention is key.",
        text2: "In a world full of distraction, grabbing attention is key.",
      },
      gradient3: {
        text1: "No design skills? No problem.",
        text2:
          "You can now create beautiful designs without having to be a designer.",
      },
      gradient4: {
        text1: "No more sifting through design templates.",
        text2: "Sivi generates unique and stunning graphics for your content.",
      },
    },
    header: {
      title: "Generate instant Graphic designs",
      subheader:
        "Instantly convert your text content into visual designs for your campaigns, product banners, website content, ads, email newsletters, and more in 1/100th of the time and cost.",
      icons: [
        {
          src: "https://i.ibb.co/dcZNDZg/icon.png",
          text: "Advertisements",
        },
        {
          src: "https://i.ibb.co/MC41BbN/megaphone.png",
          text: "Marketing",
        },
        {
          src: "https://i.ibb.co/XpVc6Z9/web-24px.png",
          text: "Website Content",
        },
        {
          src: "https://i.ibb.co/DfYr3jP/volume-up-24px.png",
          text: "Social Posts",
        },
        {
          src: "https://i.ibb.co/sgC4Ft7/web-24px.png",
          text: "Product Banners",
        },
        {
          src: "https://i.ibb.co/TwRjwfY/Group-63.png",
          text: "NewsLetters",
        },
      ],
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
