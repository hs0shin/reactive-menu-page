import React from 'react';

import {Wrapper, TopBarWrapper, BodyWrapper, ReactiveLeft, ReactiveRight } from '../../components/styled-components/MainPageFragments';

import TopBar from '../../components/ui/TopBar';
import Page from '../../components/ui/Page';
import PageDescription from '../../components/ui/PageDescription';
import Menu from '../../components/ui/Menu';


const dummyData = {
    menuList: [
        { name: 'project', display: '프로젝트', description: '프로젝트를 생성하고 관리합니다..' },
        { name: 'manage', display: '배포 / 관리', description: '프로젝트를 심사하고, 배포 상태를 관리합니다.' },
        { name: 'user', display: '유저', description: '유저 설정을 할 수 있습니다.' },
        { name: 'setting', display: 'setting', description: '환경 설정을 할 수 있습니다.' },
    ],
}



export default function MainPage() {

    return (
        <Wrapper>
            <TopBarWrapper>
                <TopBar></TopBar>
            </TopBarWrapper>
            <BodyWrapper>
                <ReactiveLeft><Menu></Menu></ReactiveLeft>
                <ReactiveRight>
                    <PageDescription>
                        <h1></h1>
                    </PageDescription>
                    <Page>
                    </Page>
                </ReactiveRight>
            </BodyWrapper>
        </Wrapper>
    )
}