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

  async updateNews() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=41ff409c0efd4edebc0e14631865dc59&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
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
