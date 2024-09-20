import React from "react";
import { BiLike } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

const FeedItem = ({data}) => {

  const {userName, userProfileImage, churead, likeCount} = data;

  return (
    <li className="border-t border-churead-gray-300 border-opacity-15 px-6 py-3">
      <div className="flex items-start gap-3">
        {/* START: 프로필 이미지 영역 */}
        <div className="w-10 rounded-full overflow-hidden mt-1">
          <img src={userProfileImage} alt="사용자 프로필 이미지" />
        </div>
        {/* END: 프로필 이미지 영역 */}
        {/* START: 콘텐츠 영역 */}
        <div className="w-full">
          <div className="flex items-center">
            <span className="font-bold">{userName}</span>
            {/* START: 수정, 삭제 버튼 영역 */}
            <div className="ml-auto">
              <button type="button" className="max-w-6 p-1">
              <RiDeleteBinLine size={"18px"}/>
              </button>
              <button type="button" className="max-w-6 p-1">
              <FiEdit3 size={"18px"}/>
              </button>
            </div>
            {/* END: 수정, 삭제 버튼 영역 */}
          </div>
          <p className="pt-1">
            {churead}
          </p>
          {/* START: 좋아요 영역 */}
          <div className="flex items-center">
            <button type="button" className="text-churead-gray-400">
            <BiLike size={"18px"}/> 
            </button>
            <span>{likeCount}</span>
          </div>
          {/* END: 좋아요 영역 */}
        </div>
        {/* END: 콘텐츠 영역 */}
      </div>
    </li>
  );
};

export default FeedItem;
