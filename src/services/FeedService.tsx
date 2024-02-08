import { IFeed } from "../components/Feed/Feed";

export const getFeeds = () => {
  // API.get('/feed')
};

export const addFeed = (
  feed: IFeed = {
    id: 0,
    image: "",
    message: "",
    author: "",
  }
) => {
  // API.post('/feed', feed);
  //NOTE: APPROACH COM LOCASTORAGE NAO E PERMITIDO POR O LIMITE PERMITIDO NO VALOR PARA UN BASE64
  // const feeds: string | null = localStorage.getItem("feeds");
  // let result: Array<IFeed> = [];
  // if (feeds !== null) {
  //   const jsonFeeds: Array<IFeed> = JSON.parse(feeds);
  //   jsonFeeds.push(feed);
  //   result = jsonFeeds;
  // } else {
  //   const arrayFeeds: Array<IFeed> = new Array<IFeed>();
  //   arrayFeeds.push(feed);
  //   result = arrayFeeds;
  // }
  // localStorage.clear();
  // localStorage.setItem("feeds", JSON.stringify(result));
};
