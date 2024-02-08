import { FC } from "react";
import { Feed, IFeed } from "../Feed/Feed";
import "./FeedList.css";

export interface FeedListProps {
  feeds: IFeed[];
}

export const FeedList: FC<FeedListProps> = ({ feeds }) => {
  console.log(feeds);
  const feedsResult = feeds.map((feed) => (
    <Feed
      key={feed.id}
      id={feed.id}
      image={feed.image}
      message={feed.message}
      author={feed.author}
    ></Feed>
  ));
  return <div className="FeedList">{feedsResult}</div>;
};
