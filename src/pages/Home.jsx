import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import FeedItem from "../components/FeedItem";
import { initialFeedList, initialfeedList } from "../data/response";

const Home = ({churead}) => {

  const [feedList, setFeedList] = useState
  (initialFeedList);



  useEffect(() => {
    if (!churead) return
    const newFeed = {

      id: feedList.length + 1,
      userName: "anonymous",
      userProfileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      churead: churead,
      likeCount: 0,
    };
    setFeedList([newFeed, ...feedList]);
  }, []);



  return (
    <div className="h-full pt-20 pb-[74px] overflow-hidden">
      {/* START: 헤더 영역 */}
      <Header />
      {/* END: 헤더 영역 */}
      <main className="h-full overflow-auto">
        <div>
          {/* START: 피드 영역 */}
          <ul>
            {feedList.map((feed) => 
              <FeedItem key ={feed.id} data={feed} />
            )}
          </ul>
          {/* END: 피드 영역 */}
        </div>
      </main>
      {/* START: 네비게이션 영역 */}
      <Nav />
      {/* END: 네비게이션 영역 */}
    </div>
  );
};

export default Home;
