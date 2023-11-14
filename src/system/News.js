import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spin from "./Spin";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "gereral",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "EMILY WAGSTER PETTUS Associated Press",
      title:
        "Mississippi Supreme Court won't remove Favre from lawsuit over misspent welfare money",
      description:
        "The Mississippi Supreme Court says it will not remove NFL Hall of Famer Brett Favre as a defendant in a civil lawsuit that seeks to recover millions of dollars of misspent welfare money",
      url: "https://abcnews.go.com/Sports/wireStory/mississippi-supreme-court-remove-favre-lawsuit-misspent-welfare-102168482",
      urlToImage:
        "https://s.abcnews.com/images/US/wirestory_459deccd38224b2dce175ed7f8a7174c_12x5_992.jpg",
      publishedAt: "2023-08-10T15:35:20Z",
      content:
        "JACKSON, Miss. -- The Mississippi Supreme Court says it will not remove NFL Hall of Famer Brett Favre as a defendant in a civil lawsuit that seeks to recover millions of dollars of misspent welfare m… [+2615 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Luc Cohen, Chris Prentice",
      title:
        "US set to unveil long-awaited crackdown on real estate money laundering",
      description:
        "The U.S. Treasury Department will soon propose a rule that would effectively end anonymous luxury-home purchases, closing a loophole that the agency says allows corrupt oligarchs, terrorists and other criminals to hide ill-gotten gains.",
      url: "https://www.reuters.com/world/us/us-set-unveil-long-awaited-crackdown-real-estate-money-laundering-2023-08-10/",
      urlToImage:
        "https://www.reuters.com/resizer/ESqCThvojEaH8Lut-gtpaZ7tVmw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NQY6BYY3LRLQPDWJ4ARGD2SQVY.jpg",
      publishedAt: "2023-08-10T10:18:05Z",
      content:
        "NEW YORK, Aug 10 (Reuters) - The U.S. Treasury Department will soon propose a rule that would effectively end anonymous luxury-home purchases, closing a loophole that the agency says allows corrupt o… [+4788 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Melissa Korn, Andrea Fuller, Jennifer S. Forsyth",
      title:
        "Colleges Spend Like There’s No Tomorrow. ‘These Places Are Just Devouring Money.’",
      description:
        "Students foot the bill for flagship state universities that pour money into new buildings and programs with little pushback",
      url: "https://www.wsj.com/articles/state-university-tuition-increase-spending-41a58100?mod=hp_lead_pos7",
      urlToImage: "https://images.wsj.net/im-832978/social",
      publishedAt: "2023-08-10T09:30:00Z",
      content: null,
    },
    {
      source: {
        id: "financial-post",
        name: "Financial Post",
      },
      author: "Financial Post",
      title: "Financial Post",
      description:
        "Looking for recommendations on investing and personal finance? From money saving tips, filing taxes, all your money needs are covered.",
      url: "http://business.financialpost.com/category/fp-finance/",
      urlToImage:
        "https://dcs-static.gprod.postmedia.digital/13.5.3/websites/images/fp/ogimage-fp.png",
      publishedAt: "2023-05-17T20:37:34.4466449Z",
      content: null,
    },
    {
      source: {
        id: "financial-post",
        name: "Financial Post",
      },
      author: "Financial Post",
      title: "Financial Post",
      description:
        "Read all about business essentials to get the best tips on money saving, retirement planning and other financial advice.",
      url: "https://financialpost.com/category/personal-finance/business-essentials/",
      urlToImage:
        "https://dcs-static.gprod.postmedia.digital/13.5.3/websites/images/fp/ogimage-fp.png",
      publishedAt: "2023-05-17T20:37:31.414993Z",
      content: null,
    },
    {
      source: {
        id: "newsweek",
        name: "Newsweek",
      },
      author: "Anna Skinner",
      title: "Biden Wants to Send Americans More Checks",
      description:
        "If President Joe Biden's 2024 budget is approved, parents could see more money issued by the government.",
      url: "https://www.newsweek.com/biden-wants-send-americans-checks-1786779",
      urlToImage:
        "https://d.newsweek.com/en/full/2206892/president-joe-biden.jpg",
      publishedAt: "2023-03-09T20:46:28Z",
      content:
        "<ul><li>President Joe Biden has proposed his 2024 budget which could decrease the deficit by nearly $3 trillion and restore the American Rescue Plan's Child Tax Credit to its 2021 amount.</li><li>The… [+4267 chars]",
    },
    {
      source: {
        id: "the-hill",
        name: "The Hill",
      },
      author: "Alex Gangitano, Rachel Frazin",
      title: "Questions grow about Biden’s position on a gas tax holiday",
      description:
        "President Biden is facing growing questions about whether he will throw his support behind a federal gas tax holiday in an attempt to save Americans some money at the pump while gas prices remain high from inflation and the impact of Russia’s invasion into Uk…",
      url: "https://thehill.com/policy/equilibrium-sustainability/3260062-questions-grow-about-bidens-position-on-a-gas-tax-holiday/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2022/04/california-gas-prices_040422_ap-Jeff-Chiu_gasprices.jpg?w=1280",
      publishedAt: "2022-04-06T10:03:07Z",
      content:
        "President Biden is facing growing questions about whether he will throw his support behind a federal gas tax holiday in an attempt to save Americans some money at the pump while gas prices remain hig… [+6271 chars]",
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: null,
      title:
        "‘Money is no object’: Ghislaine Maxwell trial shines light on class divide",
      description:
        "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
      url: "https://www.ft.com/content/0b9d93da-1687-4eb1-bd53-0a84a1b40dff",
      urlToImage: null,
      publishedAt: "2021-12-14T06:22:29.1165883Z",
      content:
        "Keep abreast of significant corporate, financial and political developments around the world.\r\nStay informed and spot emerging risks and opportunities with independent global reporting, expert\r\ncomme… [+32 chars]",
    },
    {
      source: {
        id: "the-sport-bible",
        name: "The Sport Bible",
      },
      author: "Ryan Sidle",
      title: "Dana White Hits Back At Paige VanZant After Instagram Claims",
      description:
        "The UFC fighter said she earned more posting on social media than she did in the octagon and wants more money in her next contract.",
      url: "http://www.thesportbible.com/ufc/pub-talk-dana-white-hits-back-at-paige-vanzant-after-instagram-claims-20190828",
      urlToImage:
        "http://beta.ems.ladbiblegroup.com/s3/content/808x455/61791cc65d668d6c1794bd4ee562a2ee.png",
      publishedAt: "2019-08-28T21:07:40Z",
      content:
        "UFC president Dana White has responded to Paige VanZant's claims that she makes more money posting on Instagram than she does fighting in UFC. \r\nVanZant claimed on Tuesday that she wanted more money … [+1438 chars]",
    },
        {
            "source": {
                "id": null,
                "name": "Business Insider India"
            },
            "author": "Ayush Mehrotra",
            "title": "Rejuvenate and reset: 10 detox drinks post festivals - Business Insider India",
            "description": "A post-festival detox can help rejuvenate your body and kickstart a healthier routine. Here are 10 detox drinks that can aid in cleansing and restoring your system after the festivities.",
            "url": "https://www.businessinsider.in/science/health/food/webstories/10-detox-drinks-post-festivals/slidelist/105187316.cms",
            "urlToImage": "https://www.businessinsider.in/thumb/msid-105187316,width-900,height-1200,resizemode-4/science/health/food/webstories/10-detox-drinks-post-festivals.jpg",
            "publishedAt": "2023-11-13T12:30:00Z",
            "content": "Blend together a detox smoothie using ingredients like kale, spinach, cucumber, ginger, and a splash of lemon juice. The fiber in leafy greens supports digestion, while ginger has anti-inflammatory p… [+131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DNA India"
            },
            "author": "Kajari Goswami",
            "title": "8 health benefits of Rajma (kidney beans) - DNA India",
            "description": "8 health benefits of Rajma (kidney beans)",
            "url": "https://www.dnaindia.com/web-stories/lifestyle/8-health-benefits-of-rajma-kidney-beans-1699876834039",
            "urlToImage": null,
            "publishedAt": "2023-11-13T12:15:05Z",
            "content": "Rajma also contains various minerals and vitamins such as molybdenum, folate, iron, copper, manganese, potassium, and vitamin K1."
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Dr Priyanka Rohatgi",
            "title": "Powerhouse food for weight loss, cholesterol management, and healthy heart? Why papaya should be on your diet - The Indian Express",
            "description": "How Papaya indirectly contributes to a reduced risk of heart disease, explains Dr Priyanka Rohatgi, Chief Nutritionist, Apollo Hospitals.",
            "url": "https://indianexpress.com/article/health-wellness/powerhouse-food-weight-loss-cholesterol-management-healthy-heart-papaya-9024968/",
            "urlToImage": "https://images.indianexpress.com/2023/11/Health-and-Wellness-papaya-1.jpg",
            "publishedAt": "2023-11-13T12:13:14Z",
            "content": "Papaya, a tropical fruit abundant in nutrients and enzymes, isn’t only a favorite for weight watchers due to its low calorie content and high fiber; it also stands out as a heart-healthy powerhouse.F… [+3769 chars]"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Can air pollution in India increase the risk of type 2 diabetes? | In Focus podcast - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/podcast/can-air-pollution-in-india-increase-the-risk-of-diabetes/article67528737.ece",
            "urlToImage": null,
            "publishedAt": "2023-11-13T12:13:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WION"
            },
            "author": "WION Desk",
            "title": "6 Health Benefits of White Pepper (Safed Mirch) - WION",
            "description": "6 Health Benefits of White Pepper (Safed Mirch)",
            "url": "https://www.wionews.com/web-stories/trending/6-health-benefits-of-white-pepper-safed-mirch--1699874771616",
            "urlToImage": null,
            "publishedAt": "2023-11-13T12:05:54Z",
            "content": "White pepper, also known as safed mirch, has several health advantages that people often neglect. White pepper helps to relieve many common problems that bother our bodies, from headaches to heart is… [+59 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Insider India"
            },
            "author": "Ankush Banerjee",
            "title": "How we smell things can differ for each of your nostrils, study finds - Business Insider India",
            "description": "If you've experienced a 3D movie with those stylish glasses, you may have observed how the film appears different through both lenses. The red lens shifts",
            "url": "https://www.businessinsider.in/science/news/how-we-smell-things-can-differ-for-each-of-your-nostrils-study-finds/articleshow/105186938.cms",
            "urlToImage": "https://www.businessinsider.in/photo/105186938/how-we-smell-things-can-differ-for-each-of-your-nostrils-study-finds.jpg",
            "publishedAt": "2023-11-13T12:02:00Z",
            "content": "If you've experienced a 3D movie with those stylish glasses, you may have observed how the film appears different through both lenses. The red lens shifts details to one side, while the blue pulls th… [+1703 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Healio"
            },
            "author": null,
            "title": "Physical and mental health measures worse for adults with HF vs. lung, colorectal cancers - Healio",
            "description": "PHILADELPHIA &mdash; Older adults with heart failure have worse physical and mental health than those with several types of cancer, a speaker reported at the American Heart Association Scientific Sessions.The data, from a pooled analysis of Medicare Advantage…",
            "url": "https://www.healio.com/news/cardiology/20231112/physical-and-mental-health-measures-worse-for-adults-with-hf-vs-lung-colorectal-cancers",
            "urlToImage": "https://www.healio.com/~/media/slack-news/cardiology/misc/infographics/2023/11_november/ct1123shah_aha_ig11_web.jpg",
            "publishedAt": "2023-11-13T12:00:56Z",
            "content": "We were unable to process your request. Please try again later. If you continue to have this issue please contact customerservice@slackinc.com.Back to Healio\r\nKey takeaways:\r\n<ul><li>Health-related q… [+3568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Healio"
            },
            "author": null,
            "title": "MASH now top indication for liver transplantation in those with hepatocellular carcinoma - Healio",
            "description": "BOSTON &mdash; Metabolic dysfunction-associated steatohepatitis is currently the most common indication for liver transplantation in patients with hepatocellular carcinoma, increasing from 10% in 2013 to 31% in 2022, according to a presenter.&ldquo;Given the …",
            "url": "https://www.healio.com/news/hepatology/20231112/mash-now-top-indication-for-liver-transplantation-in-those-with-hepatocellular-carcinoma",
            "urlToImage": "https://www.healio.com/~/media/images/fscss/i3wyanokecdncom/healio_safe_image.png",
            "publishedAt": "2023-11-13T12:00:43Z",
            "content": "We were unable to process your request. Please try again later. If you continue to have this issue please contact customerservice@slackinc.com.Back to Healio\r\nKey takeaways:\r\n<ul><li>Alcoholic liver … [+3198 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Nutrition alert: Here’s what a 100-gram serving of ajwain or carom seeds contain - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/lifestyle/food-wine/nutrition-alert-ajwain-carom-seeds-health-benefits-festive-season-9024668/",
            "urlToImage": null,
            "publishedAt": "2023-11-13T11:30:34Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": null,
            "title": "How workplace flexibility is linked to lower cardiovascular risk - Mint Lounge",
            "description": "In a new study, researchers observed a reduction in cardiometabolic risk when employees had more control over time",
            "url": "https://lifestyle.livemint.com/health/wellness/workplace-flexibility-lower-cardiovascular-risk-111699872999738.html",
            "urlToImage": "https://images.livemint.com/img/2023/11/13/1140x641/workplace_1699873628257_1699873732256.jpg",
            "publishedAt": "2023-11-13T11:11:06Z",
            "content": "A new study has found that increasing workplace flexibility could lower employees risk of cardiovascular diseases. Researchers observed a reduction in cardiometabolic risk when employees have more co… [+2227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News-Medical.Net"
            },
            "author": null,
            "title": "Changing environment can have long-term, significant effects on the brain - News-Medical.Net",
            "description": "Changes in a person's environment can have long-term, significant effects on the brain, whether it's the inhalation of wildfire smoke or the experience of childhood trauma.",
            "url": "https://www.news-medical.net/news/20231113/Changing-environment-can-have-long-term-significant-effects-on-the-brain.aspx",
            "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2016/3/Artificially_Colored_MRI_Scan_Of_Human_Brain-Daisy_Daisy_a8c5d8bbbf824bc8932308e30187510f-620x480.jpg",
            "publishedAt": "2023-11-13T11:06:00Z",
            "content": "Changes in a person's environment can have long-term, significant effects on the brain, whether it's the inhalation of wildfire smoke or the experience of childhood trauma. The findings will be prese… [+6105 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Jahanvi Sharma",
            "title": "Highly contagious new Covid variant HV.1 spreading across US - Hindustan Times",
            "description": "A new Covid-19 variant has emerged across the United States and is rising quickly. Here's all you need to be aware of.",
            "url": "https://www.hindustantimes.com/world-news/us-news/highly-contagious-new-covid-variant-hv-1-spreading-across-us-all-you-need-to-know-101699870536142.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/13/1600x900/allergy_1677498739678_1699872664655.PNG",
            "publishedAt": "2023-11-13T11:00:00Z",
            "content": "HV.1, the new highly contagious Covid-19 variant is sweeping through the United States. This variant is dominating other strains, including EG.5 aka Eris, which itself is the dominant strain worldwid… [+1792 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Healthshots.com"
            },
            "author": "Natalia Ningthoujam",
            "title": "World Diabetes Day: 8 signs of low blood sugar in the morning - Health shots",
            "description": "Shaking and sweating in the morning? These might be signs of low blood sugar. Find out more about them on World Diabetes Day.",
            "url": "https://www.healthshots.com/preventive-care/self-care/signs-of-low-blood-sugar-or-hypoglycemia/",
            "urlToImage": "https://images.healthshots.com/healthshots/en/uploads/2023/11/13161308/DIZZY.jpg",
            "publishedAt": "2023-11-13T10:47:33Z",
            "content": "When you choose prolonged fasting overnight, do you wake up with dizziness or confusion? It may be due to low blood sugar in the morning. This is especially true for people who have been living with … [+4901 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Rising Tide of Dementia: Cases Could Be 42% Higher Than Predicted in England and Wales by 2040 - SciTechDaily",
            "description": "Up to 1.7 million people could be living with dementia in England and Wales by 2040 – over 40% more than previously forecast – finds a new UCL-led study. Previous studies, based on data up to 2010, showed that dementia incidence had declined in high-income co…",
            "url": "https://scitechdaily.com/rising-tide-of-dementia-cases-could-be-42-higher-than-predicted-in-england-and-wales-by-2040/",
            "urlToImage": "https://scitechdaily.com/images/Brain-Inflammation-Dementia-Concept-Art.jpg",
            "publishedAt": "2023-11-13T10:39:58Z",
            "content": "ByUniversity College LondonNovember 13, 2023\r\nA recent study in The Lancet Public Health indicates a significant rise in dementia incidence in England and Wales post-2008, potentially leading to 1.7 … [+4591 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WION"
            },
            "author": "WION Desk",
            "title": "6 Ways Drinking Water Helps You Lose Weight - WION",
            "description": "6 Reasons How Drinking Water Can Help You Lose Weight",
            "url": "https://www.wionews.com/web-stories/trending/6-reasons-how-drinking-water-can-help-you-lose-weight-1699868504701",
            "urlToImage": null,
            "publishedAt": "2023-11-13T10:10:40Z",
            "content": "Nov 13, 2023, 03:40PM IST"
        },
        {
            "source": {
                "id": null,
                "name": "North Country Public Radio"
            },
            "author": null,
            "title": "Pain, fatigue, fuzzy thinking: How long COVID disrupts the brain - North Country Public Radio",
            "description": "The neurological symptoms of COVID can persist for years after an infection. Scientists are just beginning to understand why.",
            "url": "https://www.northcountrypublicradio.org/news/npr/1211989263/pain-fatigue-fuzzy-thinking-how-long-covid-disrupts-the-brain",
            "urlToImage": "https://media.npr.org/assets/img/2023/11/09/gettyimages-1317793963-58e7981b35b97f4b4516bd854224868c15cea3ce.jpg?s=6",
            "publishedAt": "2023-11-13T10:09:28Z",
            "content": "Michelle Wilson got COVID three years ago. She's still waiting for her brain and nervous system to recover.\r\nWilson's memory is spotty, she's frequently in pain, and even a short walk leaves her exha… [+6842 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Namita S Kalla",
            "title": "How to lower high blood sugar: Include yoghurt, beans, flaxseeds and pumpkins in your daily diet - Moneycontrol",
            "description": "High blood sugar levels, known as hyperglycemia, can lead to several health problems. Apart from heart problems, it can increase your susceptibility to tuberculosis, pneumonia, urinary tract infections, and even diabetic ulcers and cataracts.",
            "url": "https://www.moneycontrol.com/news/health-and-fitness/how-to-lower-high-blood-sugar-include-yoghurt-beans-flaxseeds-and-pumpkins-in-your-daily-diet-11734951.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/Low-blood-pressure-causes-symptoms-770x433.jpg",
            "publishedAt": "2023-11-13T10:06:42Z",
            "content": "Do you feel like your daily routine is out of balance? There could be many possible causes for this feeling, including physical, emotional, or lifestyle-related factors. For example, your inner ear f… [+3219 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India TV News"
            },
            "author": "Written by Sakshi Verma",
            "title": "Superfood Pomegranate: Know 7 benefits of one of the oldest fruits - India TV News",
            "description": "Eating pomegranate boosts metabolism and along with this, it leaves are also considered effective in reducing extra fat accumulated on the body. Consuming pomegranate has several healthy benefits, let's have a look at some of them.",
            "url": "https://www.indiatvnews.com/health/superfood-pomegranate-know-7-benefits-of-one-of-the-oldest-fruits-2023-11-13-902539",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/11/pomegranate-1699869671.jpg",
            "publishedAt": "2023-11-13T10:02:00Z",
            "content": "Several types of nutritious elements are found in fruits. Apart from vitamins and minerals, different nutritional values are found in different fruits. Pomegranate is included in the list of nutritio… [+2355 chars]"
        }
  ];

  Capitalize = (string) => {
     return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `${this.Capitalize(this.props.category)}-NewsDonkey`
  }

  // async updateNews() {
  //   this.setState({ loading: true });
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41ff409c0efd4edebc0e14631865dc59&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // }
  async updateNews() {
    this.setState({ loading: true });
  
    const proxyUrl = "https://codesandbox.io/s/your-sandbox-id/api";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41ff409c0efd4edebc0e14631865dc59&pageSize=${this.props.pageSize}`;
    const url = `${proxyUrl}?url=${encodeURIComponent(apiUrl)}`;
  
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }
  

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePreClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
   
    return (
      <div className="row my-5">
        <h2 className='text-center'>News-Donkey Top {this.Capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spin />}
        {!this.state.loading &&
          this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-3" key={element.url}>
                <Newsitems
                  text={element.title ? element.title.slice(0, 36) : ""}
                  description={
                    element.description ? element.description.slice(0, 55) : ""
                  }
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.hindustantimes.com/ht-img/img/2023/08/11/1600x900/Akshay_OMG_2_1691742864003_1691742876987.jpg"
                  }
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        <div className="d-flex justify-content-between my-4">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-primary "
            onClick={this.handlePreClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
