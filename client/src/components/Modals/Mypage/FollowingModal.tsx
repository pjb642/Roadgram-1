import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../..';
import { getFollower } from '../../../store/FollowSlice';
// import { followings } from '../../../store/FollowSlice';
import { followingModal } from '../../../store/ModalSlice';
import './_followModal.scss';


function FollowingModal () {
  const dispatch = useDispatch();
  const { isFollowingModal } = useSelector((state: RootState) => state.modal);
  const { followingList } = useSelector((state: RootState) => state.follow);
  // const { id, nickname, profileImage } = useSelector((state: RootState) => state.follow)
  const { userInfo, accessToken } = useSelector((state: RootState) => state.auth);
  // const observerRef = useRef();

  const closeModal = () => {
    dispatch(followingModal(!isFollowingModal));
  };
  
  // const [target, setTarget] = useState(null);

  // // IntersectionObserver 생성
  // const options = {
  //   root: null,
  //   rootMargin: '10px',
  //   threshold: 1.0
  // };

  // useEffect(() => {
  //   console.log(followingList);
  // }, [followingList]);

  // const getMoreList = async () => {
  //   await axios
  //   .get(`${process.env.REACT_APP_API_URL}/follow/following?user=${userInfo.id}&loginMethod=${0}&page=${2}`, {headers: {authorization: `${accessToken}`}})
  //   .then((res) => {
  //     dispatch(getFollower(res.data.data));
  //   })
  //   .catch(console.log);
    // setFollowingLists((itemLists) => itemLists.concat(Items));
  // };

  // const onIntersect = async ([entry], observer) => {
  //   if (entry.isIntersecting) {
  //     observer.unobserve(entry.target);
  //     await getMoreList();
  //     observer.observe(entry.target);
  //   }
  // };

  // useEffect(() => {
  //   let observer;
  //   if (target) {
  //     observer = new IntersectionObserver(onIntersect, {
  //       threshold: 0.4,
  //     });
  //     observer.observe(target);
  //   }
  //   return () => observer && observer.disconnect();
  // }, [target]);

  return (
    <div className="follow-center-wrap">
      <div className="follow-background">
        <div className="follow-box">
          <button className="close-button" type="button" onClick={closeModal}>&times;</button>
          <div className="follow-title">팔로잉</div>
          <div id="follows" className="follows">
          {followingList?.map((each) => {
            return (
              <div className="follow_profile_div" key={each.id}>
                <img alt="profile_image" src={each.profileImage} className="follow_profile_image"/>
                <span className="follow_nickname">{each.nickname}</span>
              </div>
            )})
          }
          {/* <div ref={setTarget} /> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default FollowingModal;
