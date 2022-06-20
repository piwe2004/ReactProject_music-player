import React from 'react';
import QueueMusic from '@mui/icons-material/QueueMusic';
import Close from '@mui/icons-material/Close';
import classNames from 'classnames';
import './PlayList.scss';
import SortableList from "@billy-fe/sortable-list";
import {useSelector} from "react-redux";
import PlayListItem from "./PlayListItem";
import MusicList from "../../store/data";


const PlayList = ({ showPlayList, setShowPlayList }) => {
    const playList = useSelector(state => state.playList)
    const onClickClosePlayList = () => {
        setShowPlayList(false);
    }

    const renderItem = (item, index) => <PlayListItem item={item} index={index} />

  return (
    <div className={classNames('play-list',{'show':showPlayList})}>
      <div className="header">
        <div className="row">
          <QueueMusic className="list" />
          <span>Play list</span>
        </div>
        <Close
          sx={{ fontSize: 22, cursor: 'pointer' }}
          onClick={onClickClosePlayList}
        />
      </div>
        {/*<SortableList
            data={playList}
            renderItem={renderItem}
        />*/}
      <ul>
      {MusicList.map((item,index)=>  <li key={index}><PlayListItem item={item} index={index} /></li>)}
      </ul>
    </div>
  );
};

export default PlayList;
