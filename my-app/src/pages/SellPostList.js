import React from 'react'
import {
    MediaDiv,
    Footer,
    Main2,
    } from '../css/styledComponenet';
import Header from '../components/Header_2';
import Kategorie from '../components/Kategorie';
import PostList from '../components/PostList';


function SellPostList() {
    return (
        <MediaDiv>
            <Header/>
            <Main2>
                <Kategorie/>
                <PostList/>
            </Main2>
            <Footer>
                <p>ⓒ멋쟁이사자처럼 10th at 경상국립대<br/>강경아 강지희 김민지 박재욱 박경훈 송채율 이도연 이재성</p>
            </Footer>
        </MediaDiv>
    )
}

export default SellPostList;